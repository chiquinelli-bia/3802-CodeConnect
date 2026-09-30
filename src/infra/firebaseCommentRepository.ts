import { doc, getDoc, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "./firebase";
import type { IProjectComment } from "../domain/entities/IProject";
import type { ICommentRepository } from "../domain/repositories/ICommentRepository";

export class FirebaseCommentRepository implements ICommentRepository {
  private defaultCollection = "posts";

  async addComment(
    projectId: string,
    comment: IProjectComment,
    collectionName?: string,
  ): Promise<void> {
    const targetCollection = collectionName || this.defaultCollection;
    const projectRef = doc(db, targetCollection, String(projectId));

    const commentData = {
      id: String(comment.id),
      texto: comment.texto,
      usuario: {
        id: String(comment.usuario.id || "anonimo-id"),
        nome: comment.usuario.nome || "Anônimo",
        imagem: comment.usuario.imagem || "",
      },
    };

    await updateDoc(projectRef, {
      comentarios_postagem: arrayUnion(commentData),
    });
  }

  async updateComment(
    projectId: string,
    commentId: string,
    newText: string,
    collectionName?: string,
  ): Promise<void> {
    const targetCollection = collectionName || this.defaultCollection;
    const projectRef = doc(db, targetCollection, String(projectId));

    const projectSnap = await getDoc(projectRef);
    if (!projectSnap.exists()) {
      throw new Error("Projeto não encontrado.");
    }

    const data = projectSnap.data();
    const currentComments: any[] = data.comentarios_postagem ?? [];

    const updatedComments = currentComments.map((c) => {
      if (String(c.id) === String(commentId)) {
        return {
          ...c,
          texto: newText,
          text: newText,
        };
      }
      return c;
    });

    await updateDoc(projectRef, {
      comentarios_postagem: updatedComments,
    });
  }
}

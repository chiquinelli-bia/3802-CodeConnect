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
}

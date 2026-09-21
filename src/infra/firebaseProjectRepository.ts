import {
  collection,
  getDocs,
  addDoc,
  doc,
  updateDoc,
  increment,
} from "firebase/firestore";
import { db } from "./firebase";
import type {
  IProject,
  ICreateProjectInput,
} from "../domain/entities/IProject";
import type { IProjectRepository } from "../domain/repositories/IProjectRepository";

export class FirebaseProjectRepository implements IProjectRepository {
  private defaultCollection = "projetos";

  async listAll(collectionName?: string): Promise<IProject[]> {
    const targetCollection = collectionName || this.defaultCollection;
    const querySnapshot = await getDocs(collection(db, targetCollection));

    return querySnapshot.docs.map((docSnap) => {
      const data = docSnap.data();

      return {
        id: docSnap.id,
        slug: data.slug ?? "",
        titulo: data.titulo ?? "",
        resumo: data.resumo ?? "",
        conteudo_codigo: data.conteudo_codigo ?? "",
        imagem_capa: data.imagem_capa || data.imagem || "",
        linhas_de_codigo: data.linhas_de_codigo ?? 0,
        likes: data.likes ?? 0, // Campo de likes devidamente mapeado
        comentarios: data.comentarios ?? 0,
        compartilhamentos: data.compartilhamentos ?? 0,
        tags: data.tags ?? [],
        comentarios_postagem: data.comentarios_postagem ?? [],
        usuario: {
          id: data.usuario?.id ?? "", // <-- Propriedade obrigatória em IProjectUser
          email: data.usuario?.email ?? "", // <-- Propriedade obrigatória em IProjectUser
          nome: data.usuario?.nome ?? "Anônimo",
          imagem: data.usuario?.imagem ?? "",
        },
      } satisfies IProject;
    });
  }

  filter(projects: IProject[], searchTerm: string, tags: string[]): IProject[] {
    const termoLower = searchTerm.toLowerCase().trim();

    return projects.filter((project) => {
      const bateuTermo =
        !termoLower ||
        project.titulo.toLowerCase().includes(termoLower) ||
        project.resumo.toLowerCase().includes(termoLower);

      const bateuTags =
        tags.length === 0 ||
        tags.every((tag) =>
          project.tags.map((t) => t.toLowerCase()).includes(tag.toLowerCase()),
        );

      return bateuTermo && bateuTags;
    });
  }

  async create(
    projectData: ICreateProjectInput,
    collectionName?: string,
  ): Promise<void> {
    const targetCollection = collectionName || this.defaultCollection;

    await addDoc(collection(db, targetCollection), {
      ...projectData,
      likes: 0, // Garante que novos projetos nasçam com 0 likes
      linhas_de_codigo: projectData.linhas_de_codigo ?? 0,
      comentarios: 0,
      compartilhamentos: 0,
      comentarios_postagem: [],
      createdAt: new Date(),
    });
  }

  async likeProject(projectId: string, collectionName?: string): Promise<void> {
    const targetCollection = collectionName || this.defaultCollection;
    const projectRef = doc(db, targetCollection, projectId);

    await updateDoc(projectRef, {
      likes: increment(1),
    });
  }
}

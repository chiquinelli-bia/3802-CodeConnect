import type { IUser } from "./IUser";

export interface IProjectUser extends Pick<IUser, "id" | "nome" | "email"> {
  imagem?: string;
}

export interface IProjectComment {
  id: string | number;
  texto: string;
  usuario: Pick<IUser, "id" | "nome"> & { imagem?: string };
}
export interface IProject {
  id: number | string;
  titulo: string;
  slug: string;
  likes: number;
  resumo: string;
  conteudo_codigo?: string;
  imagem_capa: string;
  linhas_de_codigo?: number;
  compartilhamentos?: number;
  tags: string[];
  comentarios_postagem?: IProjectComment[];
  usuario: IProjectUser;
}

export type ICreateProjectInput = Omit<
  IProject,
  "id" | "slug" | "compartilhamentos" | "comentarios_postagem"
>;

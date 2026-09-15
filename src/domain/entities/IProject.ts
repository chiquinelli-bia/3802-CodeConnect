import type { IUser } from "./IUser.js";

export interface IProject {
  id: number | string;
  titulo: string;
  resumo: string;
  conteudo_codigo?: string;
  imagem_capa: string;
  linhas_de_codigo?: number;
  comentarios?: number;
  compartilhamentos?: number;
  tags: string[];
  comentarios_postagem?: any[];
  usuario: IUser;
}

export type ICreateProjectInput = Omit<
  IProject,
  "id" | "comentarios" | "compartilhamentos" | "comentarios_postagem"
>;

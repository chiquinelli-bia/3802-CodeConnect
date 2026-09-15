import type { IUser } from "./IUser";

// O autor do projeto herda de IUser, garantindo os mesmos tipos
export interface IProjectUser extends Pick<IUser, "id" | "email"> {
  nome: string;
  imagem: string;
}

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
  usuario: IProjectUser;
}

export type ICreateProjectInput = Omit<
  IProject,
  "id" | "comentarios" | "compartilhamentos" | "comentarios_postagem"
>;

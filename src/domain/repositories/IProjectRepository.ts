import type { IProject, ICreateProjectInput } from "../entities/IProject.js";

export interface IProjectRepository {
  listAll(): Promise<IProject[]>;

  filter(projects: IProject[], searchTerm: string, tags: string[]): IProject[];

  create(projectData: ICreateProjectInput): Promise<void>;
}

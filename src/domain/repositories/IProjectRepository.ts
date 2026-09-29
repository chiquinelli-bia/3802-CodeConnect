import type {
  IProject,
  ICreateProjectInput,
  IProjectComment,
} from "../entities/IProject.js";

export interface IProjectRepository {
  listAll(collectionName?: string): Promise<IProject[]>;

  filter(projects: IProject[], searchTerm: string, tags: string[]): IProject[];

  create(
    projectData: ICreateProjectInput,
    collectionName?: string,
  ): Promise<void>;

  likeProject(projectId: string, collectionName?: string): Promise<void>;

  addComment(
    projectId: string,
    comment: IProjectComment,
    collectionName?: string,
  ): Promise<void>;
}

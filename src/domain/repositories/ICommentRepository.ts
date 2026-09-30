import type { IProjectComment } from "../entities/IProject";

export interface ICommentRepository {
  addComment(
    projectId: string,
    comment: IProjectComment,
    collectionName?: string,
  ): Promise<void>;
}

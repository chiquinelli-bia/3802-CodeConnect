import type { IProjectRepository } from "../../repositories/IProjectRepository";
import { PROJECTS_COLLECTION } from "./config";

export class LikeProject {
  constructor(private projectRepository: IProjectRepository) {}

  async execute(projectId: string): Promise<void> {
    const targetId = projectId.trim();

    if (!targetId) {
      throw new Error("O ID do projeto é obrigatório para realizar a curtida.");
    }

    await this.projectRepository.likeProject(targetId, PROJECTS_COLLECTION);
  }
}

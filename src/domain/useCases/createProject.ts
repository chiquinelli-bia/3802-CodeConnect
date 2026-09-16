import type { IProjectRepository } from "../repositories/IProjectRepository.ts";
import type { ICreateProjectInput } from "../entities/IProject.ts";
import { PROJECTS_COLLECTION } from "./api/config";

export class CreateProject {
  constructor(private projectRepository: IProjectRepository) {}

  async execute(projectData: ICreateProjectInput): Promise<void> {
    if (!projectData.titulo.trim()) {
      throw new Error("O título do projeto é obrigatório.");
    }

    await this.projectRepository.create(projectData, PROJECTS_COLLECTION);
  }
}

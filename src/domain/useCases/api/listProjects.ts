import type { IProjectRepository } from "../../repositories/IProjectRepository.js";
import type { IProject } from "../../entities/IProject.js";
import { PROJECTS_COLLECTION } from "./config";

export class ListProjects {
  constructor(private projectRepository: IProjectRepository) {}

  async execute(): Promise<IProject[]> {
    return await this.projectRepository.listAll(PROJECTS_COLLECTION);
  }
}

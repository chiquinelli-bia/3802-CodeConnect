import type { IProjectRepository } from "../repositories/IProjectRepository.ts";
import type { ICreateProjectInput } from "../entities/IProject.ts";
import { PROJECTS_COLLECTION } from "./api/config";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9 -]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export class CreateProject {
  constructor(private projectRepository: IProjectRepository) {}

  async execute(projectData: ICreateProjectInput): Promise<void> {
    if (!projectData.titulo.trim()) {
      throw new Error("O título do projeto é obrigatório.");
    }

    const slug = slugify(projectData.titulo);

    const newProjectData = {
      ...projectData,
      slug,
    };

    await this.projectRepository.create(newProjectData, PROJECTS_COLLECTION);
  }
}

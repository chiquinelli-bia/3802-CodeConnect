import type { IProjectRepository } from "../repositories/IProjectRepository.ts";
import type { ICreateProjectInput } from "../entities/IProject.ts";
import { PROJECTS_COLLECTION } from "./api/config";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[\r\n]+/g, " ")
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
    if (!projectData.titulo?.trim()) {
      throw new Error("O título do projeto é obrigatório.");
    }

    const baseSlug = slugify(projectData.titulo);

    const uniqueSuffix = Math.random().toString(36).substring(2, 7);
    const slug = `${baseSlug}-${uniqueSuffix}`;

    const newProjectData = {
      ...projectData,
      slug,
      likes: projectData.likes ?? 0,
    };

    await this.projectRepository.create(newProjectData, PROJECTS_COLLECTION);
  }
}

import type { IProject } from "../../entities/IProject";

export class GetProjectBySlug {
  execute(projects: IProject[], slug: string): IProject | null {
    const targetSlug = slug.toLowerCase().trim();

    if (!targetSlug) {
      return null;
    }

    const project = projects.find((project) => project.slug === targetSlug);

    return project || null;
  }
}

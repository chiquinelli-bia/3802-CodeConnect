import type { IProject } from "../../entities/IProject";

export class FilterProjects {
  execute(
    projects: IProject[],
    searchTerm: string,
    tags: string[],
  ): IProject[] {
    const termoLower = searchTerm.toLowerCase().trim();

    return projects.filter((project) => {
      const bateuTermo =
        !termoLower ||
        project.titulo.toLowerCase().includes(termoLower) ||
        project.resumo.toLowerCase().includes(termoLower);

      const bateuTags =
        tags.length === 0 ||
        tags.every((tag) =>
          project.tags.map((t) => t.toLowerCase()).includes(tag.toLowerCase()),
        );

      return bateuTermo && bateuTags;
    });
  }
}

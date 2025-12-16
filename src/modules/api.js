import axios from "axios";
const URL_BASE = "https://codeconnect-api-upload.onrender.com";

export async function buscarProjetos() {
  try {
    const cards = await axios.get(`${URL_BASE}/projetos`);
    return cards.data;
  } catch (error) {
    alert("Erro ao buscar projetos.");
    throw new Error("Erro ao buscar projetos");
  }
}

export function filtrarProjetos(projetos, termoPesquisa, tagsSelecionadas) {
  const termoLower = termoPesquisa.toLowerCase();

  return projetos
    .filter((projeto) => {
      if (tagsSelecionadas.length === 0) return true;

      return tagsSelecionadas.every((tag) =>
        projeto.tags.some((t) => t.toLowerCase() === tag.toLowerCase())
      );
    })
    .filter((projeto) => {
      if (!termoLower) return true;

      return projeto.titulo.toLowerCase().includes(termoLower);
    });
}

import axios from "axios";
const URL_BASE = "https://codeconnect-api-1.onrender.com/projetos";

export async function buscarProjetos() {
  try {
    const cards = await axios.get(URL_BASE);
    return cards.data;
  } catch (error) {
    alert("Erro ao buscar projetos.");
    throw new Error("Erro ao buscar projetos");
  }
}

export function filtrarProjetos(projetos, termoPesquisa, tagsSelecionadas) {
  const termoLower = termoPesquisa.toLowerCase();

  return projetos.filter((projeto) => {
    const tituloValido =
      termoLower === ""
        ? true
        : projeto.titulo.toLowerCase().includes(termoLower);

    const tagsValido =
      tagsSelecionadas.length === 0
        ? true
        : tagsSelecionadas.every((tag) =>
            projeto.tags.map((t) => t.toLowerCase()).includes(tag.toLowerCase())
          );

    return tituloValido && tagsValido;
  });
}

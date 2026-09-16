import { imgExemplo } from "../img/index.js";

export function setupDescartar(
  setDescricao,
  setTagsSelecionadas,
  setTermoPesquisa,
  setTitulo,
) {
  setTitulo("");
  setDescricao("");
  setTagsSelecionadas([]);
  setTermoPesquisa("");

  const imagemUpload = document.querySelector(".main-imagem");
  const nomeImagemUpload = document.querySelector(".container-imagem-nome p");

  if (imagemUpload) {
    imagemUpload.src = imgExemplo;
  }

  if (nomeImagemUpload) {
    nomeImagemUpload.textContent = "";
  }
}

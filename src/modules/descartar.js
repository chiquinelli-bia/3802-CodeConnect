import { imgExemplo } from "../img/index.js";

export function setupDescartar(
  setDescricao,
  setTagsSelecionadas,
  setTermoPesquisa,
  setTitulo
) {
  setTitulo("");
  setDescricao("");
  setTagsSelecionadas([]);
  setTermoPesquisa("");
  const imagemUpload = document.querySelector(".main-imagem");
  const nomeImagemUpload = document.querySelector(".container-imagem-nome p");
  imagemUpload.src = imgExemplo;
  nomeImagemUpload.textContent = "image_projeto.png";
}

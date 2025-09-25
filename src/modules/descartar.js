const imagemUpload = document.querySelector(".main-imagem");
const nomeImagemUpload = document.querySelector(".container-imagem-nome p");
const botaodescartar = document.querySelector(".botao-descartar");
export function setupDescartar() {
  botaodescartar.addEventListener("click", (evento) => {
    evento.preventDefault();
    const form = document.querySelector("form");
    form.reset();
    imagemUpload.src = "./src/img/imagem1.png";
    nomeImagemUpload.textContent = "image_projeto.png";
    const inputTag = document.getElementById("categoria");
    const ulTags = inputTag.nextElementSibling;
    ulTags.innerHTML = "";
  });
}

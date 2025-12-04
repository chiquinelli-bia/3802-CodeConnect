// futuramente pedir para criar uma rota para delete no server.js(da api)
// no array de projetos, q apague a imagem tbm. ai apagar pelo postman

import axios from "axios";
const URL_BASE = "https://codeconnect-api-upload.onrender.com";

export async function publicarProjeto(
  imagemFile,
  titulo,
  resumo,
  tags,
  linhasDeCodigo,
  compartilhamentos,
  comentarios,
  usuario,
  conteudoCodigo,
  comentariosPostagem
) {
  try {
    // 1. ENVIAR IMAGEM PARA /uploads
    const formImg = new FormData();
    formImg.append("image", imagemFile);

    const upload = await axios.post(`${URL_BASE}/uploads`, formImg, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    const imagemUrl = upload.data.url; // URL real do GitHub
    console.log("Imagem enviada:", imagemUrl);

    // 2. ENVIAR PROJETO PARA /projetos

    const projeto = {
      imagem_capa: imagemUrl,
      titulo,
      resumo,
      tags,
      linhas_de_codigo: linhasDeCodigo,
      compartilhamentos,
      comentarios,
      usuario,
      conteudo_codigo: conteudoCodigo,
      comentarios_postagem: comentariosPostagem,
    };

    const resposta = await axios.post(`${URL_BASE}/projetos`, projeto);

    console.log("Projeto criado com sucesso:", resposta.data);
    return resposta.data;
  } catch (error) {
    console.error("Erro ao publicar projeto:", error);
    throw error;
  }
}

import { getImagemFile } from "../modules/upload.js";

export async function setupPublicar() {
  const listaTags = document.querySelector(".lista-tags");

  const imagemFile = getImagemFile(); // ← FILE real

  const titulo = document.getElementById("titulo").value;
  const resumo = document.getElementById("descricao").value;

  const tags = Array.from(listaTags.querySelectorAll("li")).map(
    (tag) => tag.textContent
  );

  const linhasDeCodigo = "0";
  const compartilhamentos = "0";
  const comentarios = "0";

  const usuario = {
    imagem:
      "https://raw.githubusercontent.com/chiquinelli-bia/codeconnect-api-2/main/uploads/download.png?raw=true",
    nome: "Usuario",
  };

  const conteudoCodigo = " ";
  const comentariosPostagem = [];

  try {
    alert("Enviando projeto, aguarde...");

    const resultado = await publicarProjeto(
      imagemFile,
      titulo,
      resumo,
      tags,
      linhasDeCodigo,
      compartilhamentos,
      comentarios,
      usuario,
      conteudoCodigo,
      comentariosPostagem
    );

    console.log(resultado);
    alert("Projeto enviado com sucesso!");
  } catch (error) {
    console.log("Erro ao enviar:", error.response?.data || error.message);
    alert("Erro ao enviar projeto!");
  }
}

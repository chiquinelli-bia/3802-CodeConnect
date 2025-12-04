// futuramente pedir para criar uma rota para delete no server.js(da api)
// no array de projetos, q apague a imagem tbm. ai apagar pelo postman

import axios from "axios";
import { getImagemFile } from "../modules/upload.js"; // ← usar FILE real

const URL_BASE = "https://codeconnect-api-upload.onrender.com";

async function publicarProjeto(
  imagemFile,
  titulo,
  resumo,
  tags,
  linhas_de_codigo,
  compartilhamentos,
  comentarios,
  usuario,
  conteudo_codigo,
  comentarios_postagem
) {
  try {
    const formData = new FormData();

    // imagem → real file
    if (imagemFile) {
      formData.append("imagem", imagemFile);
    }

    formData.append("titulo", titulo);
    formData.append("resumo", resumo);
    formData.append("tags", JSON.stringify(tags));
    formData.append("linhas_de_codigo", linhas_de_codigo);
    formData.append("compartilhamentos", compartilhamentos);
    formData.append("comentarios", comentarios);
    formData.append("usuario", JSON.stringify(usuario));
    formData.append("conteudo_codigo", conteudo_codigo);
    formData.append(
      "comentarios_postagem",
      JSON.stringify(comentarios_postagem)
    );

    for (let pair of formData.entries()) {
      console.log(pair[0], pair[1]);
    }

    const resposta = await axios.post(`${URL_BASE}/projetos`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return resposta.data;
  } catch (error) {
    console.log("Erro ao enviar:", error);
    throw error;
  }
}

export async function setupPublicar() {
  const listaTags = document.querySelector(".lista-tags");

  const imagemFile = getImagemFile(); // ← agora pega o FILE real

  const titulo = document.getElementById("titulo").value;
  const resumo = document.getElementById("descricao").value;

  const tags = Array.from(listaTags.querySelectorAll("li")).map(
    (tag) => tag.textContent
  );

  const linhas_de_codigo = "0";
  const compartilhamentos = "0";
  const comentarios = "0";

  const usuario = {
    imagem:
      "https://raw.githubusercontent.com/chiquinelli-bia/codeconnect-api-2/main/uploads/download.png?raw=true",
    nome: "Usuario",
  };

  const conteudo_codigo = " ";
  const comentarios_postagem = [];

  try {
    const resultado = await publicarProjeto(
      imagemFile,
      titulo,
      resumo,
      tags,
      linhas_de_codigo,
      compartilhamentos,
      comentarios,
      usuario,
      conteudo_codigo,
      comentarios_postagem
    );

    console.log(resultado);

    alert("Enviando projeto. Aguarde um instante");
    if (resultado) {
      alert("Projeto enviado com sucesso!");
    }
  } catch (error) {
    console.log("Erro ao enviar:", error.response?.data || error.message);
    alert("Erro ao enviar projeto!");
  }
}

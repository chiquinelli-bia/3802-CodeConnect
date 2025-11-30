//futuramente pedir para criar uma rota para delete no server.js(da api) no array de projetos, q apague a imagem tbm. ai apagar pelo postman
import axios from "axios";
const botoesPublicar = document.querySelectorAll(
  ".botao-publicar, .link-destaque"
);

const listaTags = document.querySelector(".lista-tags");
async function publicarProjeto(
  id,
  imagem_capa,
  titulo,
  resumo,
  tags,
  linhas_de_codigo,
  compartilhamentos,
  comentarios,
  usuario,
  conteudo_codigo
) {
  // return new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     // mandar pra api
  //     const deuCerto = console.log(
  //       id,
  //       imagem_capa,
  //       titulo,
  //       resumo,
  //       tags,
  //       linhas_de_codigo,
  //       compartilhamentos,
  //       comentarios,
  //       usuario,
  //       conteudo_codigo
  //     );
  //     // ajustar os alerts
  //     if (deuCerto) {
  //       resolve(
  //         "Simulação de envio — resultado aleatório, ainda em fase de testes.  Projeto publicado com sucesso."
  //       );
  //     } else {
  //       reject(
  //         "Simulação de envio — resultado aleatório, ainda em fase de testes. Erro ao publicar o projeto."
  //       );
  //     }
  //   }, 2000);
  // });
}
export function setupPublicar() {
  const imagemUpload = document.querySelector(".main-imagem");

  botoesPublicar.forEach((botao) => {
    botao.addEventListener("click", async (evento) => {
      evento.preventDefault();
      const id = 2;
      const imagem_capa = imagemUpload.src;

      const titulo = document.getElementById("nome").value;
      const resumo = document.getElementById("descricao").value;
      const tags = Array.from(listaTags.querySelectorAll("p")).map(
        (tag) => tag.textContent
      );
      const linhas_de_codigo = "x";
      const compartilhamentos = "x";
      const comentarios = "x";
      //mudar as props abaixo, ver a pasta perfil do pinterest
      const usuario = {
        imagem:
          "https://raw.githubusercontent.com/chiquinelli-bia/codeconnect-api-2/main/uploads/download.png?raw=true",
        nome: "Usuario",
      };
      const conteudo_codigo = "";
      try {
        const resultado = await publicarProjeto(
          id,
          imagem_capa,
          titulo,
          resumo,
          tags,
          linhas_de_codigo,
          compartilhamentos,
          comentarios,
          usuario,
          conteudo_codigo
        );
        console.log(resultado);
        alert(resultado);
      } catch (error) {
        console.log("Deu errado: ", error);
        alert(error);
      }
    });
  });
}

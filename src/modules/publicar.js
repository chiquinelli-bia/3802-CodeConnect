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
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // mandar pra api
      const deuCerto = console.log(
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
      // ajustar os alerts
      if (deuCerto) {
        resolve(
          "Simulação de envio — resultado aleatório, ainda em fase de testes.  Projeto publicado com sucesso."
        );
      } else {
        reject(
          "Simulação de envio — resultado aleatório, ainda em fase de testes. Erro ao publicar o projeto."
        );
      }
    }, 2000);
  });
}
export function setupPublicar() {
  botoesPublicar.forEach((botao) => {
    botao.addEventListener("click", async (evento) => {
      evento.preventDefault();
      // buscar a foto
      const id = 2;
      const imagem_capa =
        "https://github.com/MonicaHillman/codeconnect-api/blob/main/img/artigo2.png?raw=true";

      const titulo = document.getElementById("nome").value;
      const resumo = document.getElementById("descricao").value;
      const tags = Array.from(listaTags.querySelectorAll("p")).map(
        (tag) => tag.textContent
      );
      const linhas_de_codigo = "x";
      const compartilhamentos = "x";
      const comentarios = "x";
      const usuario = {
        imagem:
          "https://github.com/MonicaHillman/codeconnect-api/blob/main/img/icone2.png?raw=true",
        nome: "Amanda",
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

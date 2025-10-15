const botoesPublicar = document.querySelectorAll(
  ".botao-publicar, .link-destaque"
);

const listaTags = document.querySelector(".lista-tags");
async function publicarProjeto(nomeDoProjeto, descricaoProjeto, tagsProjeto) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const deuCerto = Math.random() > 0.5;
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

      const nomeDoProjeto = document.getElementById("nome").value;
      const descricaoDoProjeto = document.getElementById("descricao").value;
      const tagsProjeto = Array.from(listaTags.querySelectorAll("p")).map(
        (tag) => tag.textContent
      );
      try {
        const resultado = await publicarProjeto(
          nomeDoProjeto,
          descricaoDoProjeto,
          tagsProjeto
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

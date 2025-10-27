const tagsDisponiveis = [
  "front-end",
  "back-end",
  "full-stack",
  "programação",
  "data science",
  "ux design",
  "ui design",
  "html",
  "css",
  "javascript",
  "typescript",
  "react",
  "node.js",
  "python",
  "java",
  "sql",
  "banco de dados",
  "api",
  "figma",
  "git",
  "github",
  "bootstrap",
  "tailwind",
  "acessibilidade",
  "design system",
];
async function verificaTagsDisponiveis(tagTexto) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(tagsDisponiveis.includes(tagTexto.toLowerCase()));
    }, 1000);
  });
}
export function setupTags() {
  const inputs = document.querySelectorAll('input[name="categoria"]');

  inputs.forEach((input) => {
    const container = input.closest("div");
    let listaTags = container?.querySelector(".lista-tags");

    if (!listaTags) {
      listaTags = document.createElement("ul");
      listaTags.classList.add("lista-tags");
      input.after(listaTags);
    }

    input.addEventListener("keydown", async (evento) => {
      if (evento.key === "Enter") {
        evento.preventDefault();

        const tagTxt = input.value.trim();
        if (!tagTxt) return;

        try {
          const tagExiste = await verificaTagsDisponiveis(tagTxt);

          if (!tagExiste) {
            alert(
              `Tag não foi encontrada. tags disponíveis: ${tagsDisponiveis}.`
            );
            return;
          }

          const newTag = document.createElement("li");
          newTag.classList.add("lista-tag-element");
          newTag.innerHTML = `
            <p>${tagTxt.toLowerCase()}</p>
            <img src="./src/img/close-black.svg" class="remove-tag" alt="Remover tag">
          `;

          listaTags.appendChild(newTag);
          input.value = "";
        } catch (error) {
          console.error("Erro ao verificar a existência da tag", error);
          alert("Erro ao verificar a existência da tag. Verifique o console.");
        }
      }
    });
  });
  //   const tag = document.querySelector("lista-tag-element");

  // estou tentando pegar a tag para excluir pelo target

  //   listaTags.addEventListener("click", (evento) => {
  //     if (evento.target.classList.contains("remove-tag")) {
  //       const tagQueQueremosRemover = evento.target.parentElement;
  //       listaTags.removeChild(tagQueQueremosRemover);
  //     }
  //   });
  //   const botaoRemoverTag = document.querySelector(".botao-limpar-tags");
  //   botaoRemoverTag.addEventListener("click", () => {
  //     const inputPesquisa = document.querySelector(".pesquisa");
  //     const ulPesquisa = inputPesquisa.nextElementSibling;
  //     ulPesquisa.innerHTML = "";
  //   });
}

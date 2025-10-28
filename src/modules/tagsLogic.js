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
      const container = input.nextElementSibling;
      if (container) {
        container.appendChild(listaTags);
      }
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

          listaTags.addEventListener("click", (e) => {
            if (e.target.classList.contains("remove-tag")) {
              e.target.closest("li")?.remove();
            }
          });
        } catch (error) {
          console.error("Erro ao verificar a existência da tag", error);
          alert("Erro ao verificar a existência da tag. Verifique o console.");
        }
      }
    });
  });
}
export function botaoLimpartags() {
  const botaoLimpar = document.querySelector(".botao-limpar-tags");

  botaoLimpar.addEventListener("click", () => {
    const container = botaoLimpar.closest(".container-pesquisa");
    const lista = container.querySelector(".lista-tags");

    if (lista) lista.innerHTML = "";
  });
}

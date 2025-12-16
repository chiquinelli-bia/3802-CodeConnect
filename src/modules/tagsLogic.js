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
export async function verificaTagsDisponiveis(tagTexto) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(tagsDisponiveis.includes(tagTexto.toLowerCase()));
    }, 1000);
  });
}
export function botaoLimpartags() {
  const botaoLimpar = document.querySelector(".botao-limpar-tags");

  const container = botaoLimpar.closest(".container-pesquisa");
  const lista = container.querySelector(".lista-tags");
  if (lista) lista.innerHTML = "";
}

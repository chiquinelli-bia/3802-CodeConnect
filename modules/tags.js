
const tagsDisponiveis = ["front-end","programação","data science","full-stack","html","css","javascript"];
async function verificaTagsDisponiveis(tagTexto) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(tagsDisponiveis.includes(tagTexto));
        }, 1000)
    })
}
export function setupTags () {
    const inputTags = document.getElementsByName("categoria");

    inputTags.forEach(input => {
        const ul = document.createElement("ul");
        ul.classList.add("lista-tags");
        input.after(ul);

        input.addEventListener("keypress", async (evento) => {
            if (evento.key === "Enter") {
                evento.preventDefault();
                const tagTxt = input.value.trim();
                if (tagTxt !== "") {
                    try {
                        const tagExiste = await verificaTagsDisponiveis(tagTxt);
                        if (tagExiste) {
                            const newTag = document.createElement("li");
                            const div = document.querySelector(".container-pesquisa");
                            newTag.classList.add("lista-tag-element")
                            newTag.innerHTML = `<p>${tagTxt}</p> <img src="./img/close-black.svg" class="remove-tag">`;
                            ul.appendChild(newTag);
                            if (!ul.parentElement.tagName.toLowerCase() === 'form') {
                                div.appendChild(ul); 
                            }                        
                            input.value = "";
                        } else {
                            alert("Tag não foi encontrada. tags disponíveis: front-end, programação, data science, full-stack, html, css, javascript.");
                        }
                    } catch (error) {
                        console.error("Erro ao verificar a existência da tag", error);
                        alert("Erro ao verificar a existência da tag. Verifique o console.")
                    }
                }
            }
        });
        ul.addEventListener("click", (evento) => {
            if (evento.target.classList.contains("remove-tag")) {
                const tagQueQueremosRemover = evento.target.parentElement;
                ul.removeChild(tagQueQueremosRemover);
            }
        });
        const listaTags = document.querySelector(".lista-tags");
        listaTags.addEventListener("click", (evento) => {
            if (evento.target.classList.contains("remove-tag")) {
                const tagQueQueremosRemover = evento.target.parentElement;
                listaTags.removeChild(tagQueQueremosRemover);
            }
        })
    });

    const botaoRemoverTag = document.querySelector(".botao-limpar-tags");
    botaoRemoverTag.addEventListener("click", () => {
        const inputPesquisa = document.querySelector(".pesquisa");
        const ulPesquisa = inputPesquisa.nextElementSibling; 
        ulPesquisa.innerHTML = "";
    });

}

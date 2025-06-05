const uploadBtn = document.getElementById("upload-btn");
const inputUpload = document.getElementById("image-upload");

// fazer a modularização do código

uploadBtn.addEventListener("click", () => {
    inputUpload.click();
})
function lerConteudoDoArquivo(arquivo) {
    return new Promise((resolve, reject) => {
        const leitor = new FileReader();
        leitor.onload = () => {
            resolve({ url: leitor.result, nome: arquivo.name })
        }
        leitor.onerror = () => {
            reject(`Erro na leitura do arquivo ${arquivo.name}`)
        }
        leitor.readAsDataURL(arquivo)
    })
}


const imagemUpload = document.querySelector(".main-imagem");
const nomeImagemUpload = document.querySelector(".container-imagem-nome p");
inputUpload.addEventListener("change", async (evento) => {
    const file = evento.target.files[0];
    if (file) {
        try {
            const conteudoDoArquivo = await lerConteudoDoArquivo(file);
            imagemUpload.src = conteudoDoArquivo.url;
            nomeImagemUpload.textContent = conteudoDoArquivo.nome;
        } catch (erro) {
            console.error("Erro na leitura do arquivo")
        }
    }    
})
const inputTag = document.getElementsByName("categoria");
const listaTags = document.querySelector(".lista-tags");
listaTags.addEventListener("click", (evento) => {
    if (evento.target.classList.contains("remove-tag")) {
        const tagQueQueremosRemover = evento.target.parentElement;
        listaTags.removeChild(tagQueQueremosRemover);
    }
})
const tagsDisponiveis = ["front-end","programação","data science","full-stack","html","css","javascript"];
async function verificaTagsDisponiveis(tagTexto) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(tagsDisponiveis.includes(tagTexto));
        }, 1000)
    })
}
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
                        div.appendChild(ul);
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
    const botaoRemoverTag = document.querySelector(".botao-limpar-tags");   
    
    ul.addEventListener("click", (evento) => {
        if (evento.target.classList.contains("remove-tag")) {
            const tagQueQueremosRemover = evento.target.parentElement;
            ul.removeChild(tagQueQueremosRemover);
        }
    });
    botaoRemoverTag.addEventListener("click", () => {
      ul.innerHTML = ""; 
    });
});

const botaoPublicar = document.querySelector(".botao-publicar");
async function publicarProjeto(nomeDoProjeto, descricaoProjeto, tagsProjeto) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const deuCerto = Math.random() > 0.5;
            if (deuCerto) {
                resolve("Projeto publicado com sucesso.")
            } else {
                reject("Erro ao publicar o projeto.")
            }
        }, 2000)
    })
    
}
botaoPublicar.addEventListener("click", async (evento) => {
    evento.preventDefault();

    const nomeDoProjeto = document.getElementById("nome").value;
    const descricaoDoProjeto = document.getElementById("descricao").value;
    const tagsProjeto = Array.from(listaTags.querySelectorAll("p")).map((tag) => tag.textContent);
    try {
        const resultado = await publicarProjeto(nomeDoProjeto, descricaoDoProjeto, tagsProjeto);
        console.log(resultado);
        alert("Deu tudo certo!")
    } catch (error) {
        console.log("Deu errado: ", error)
        alert("Deu tudo errado!");
    }
})
const botaodescartar = document.querySelector(".botao-descartar");
botaodescartar.addEventListener("click", (evento) => {
    evento.preventDefault();
    const form = document.querySelector("form");
    form.reset();
    imagemUpload.src = "./img/imagem1.png";
    nomeImagemUpload.textContent = "image_projeto.png";
    tagsDisponiveis.innerHTML = "";
})
const inputs = document.querySelectorAll("input, textarea");
const navbar = document.querySelector(".lista-links");
const mediaQuery = window.matchMedia("(max-width: 1024px)");

inputs.forEach(input => {
    input.addEventListener("focus", () => {
        if (mediaQuery.matches) {
            navbar.style.display = "none";
        }
    });
    input.addEventListener("blur", () => {
        if (mediaQuery.matches) {
            navbar.style.display = "flex";
        }
    });
});

const uploadBtn = document.getElementById("upload-btn");
const inputUpload = document.getElementById("image-upload");


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
const ImagemUpload = document.querySelector(".main-imagem");
const nomeimagemUpload = document.querySelector(".container-imagem-nome p");
inputUpload.addEventListener("change", async (evento) => {
    const file = evento.target.files[0];
    if (file) {
        try {
            const conteudoDoArquivo = await lerConteudoDoArquivo(file);
            ImagemUpload.src = conteudoDoArquivo.url;
            nomeimagemUpload.textContent = conteudoDoArquivo.nome;
        } catch (erro) {
            console.error("Erro na leitura do arquivo")
        }
    }    
})
const inputTag = document.getElementById("categoria");
const listaTags = document.getElementById("lista-tags");
listaTags.addEventListener("click", (evento) => {
    if (evento.target.classList.contains("remove-tag")) {
        const tagQueQueremosRemover = evento.target.parentElement;
        listaTags.removeChild(tagQueQueremosRemover);
    }
})
const tagsDisponiveis = ["Front-end", "Programação", "Data Science", "Full-stack", "HTML", "CSS", "JavaScript"];
async function verificaTagsDisponiveis(tagTexto) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(tagsDisponiveis.includes(tagTexto));
        }, 1000)
    })
}
inputTag.addEventListener("keypress", async (evento) => {
    if (evento.key === "Enter") {
        evento.preventDefault();
        const tagTxt = inputTag.value.trim();
        if (tagTxt !== "") {
            try { 
                const tagExiste = await verificaTagsDisponiveis(tagTxt);
                if (tagExiste) {
                    const newTag = document.createElement("li");
                    newTag.innerHTML = `<p>${tagTxt}</p> <img src="./img/close-black.svg" class="remove-tag">`;
                    listaTags.appendChild(newTag);
                    inputTag.value = "";
                } else {
                    alert("Tag não foi encontrada.");
                }
            } catch (error) {
                console.error("Erro ao verificar a existência da tag");
                alert("Erro ao verificar a existência da tag. Verifique o console.")
            }
        }
    }
})
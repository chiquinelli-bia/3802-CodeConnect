const uploadBtn = document.getElementById('upload-btn');
const inputUpload = document.getElementById('image-upload');


uploadBtn.addEventListener('click', () => {
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
const ImagemUpload = document.querySelector('.main-imagem');
const nomeimagemUpload = document.querySelector('.container-imagem-nome p');
inputUpload.addEventListener('change', async (evento) => {
    const file = evento.target.files[0];
    if (file) {
        try {
            const conteudoDoArquivo = await lerConteudoDoArquivo(file);
            ImagemUpload.src = conteudoDoArquivo.url;
            nomeimagemUpload.textContent = conteudoDoArquivo.nome;
        } catch (erro) {
            console.error('Erro na leitura do arquivo')
        }
    }    
})
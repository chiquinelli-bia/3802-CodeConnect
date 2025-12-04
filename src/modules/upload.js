let imagemBase64 = null;
let imagemFile = null;

export function getImagemBase64() {
  return imagemBase64;
}

export function getImagemFile() {
  return imagemFile;
}

export function setupUpload() {
  const inputUpload = document.getElementById("image-upload");
  const imagemUpload = document.querySelector(".main-imagem");
  const nomeImagemUpload = document.querySelector(".container-imagem-nome p");

  // abrir o seletor de arquivo automaticamente
  inputUpload.click();

  inputUpload.onchange = async (evento) => {
    const file = evento.target.files[0];
    if (!file) return;

    try {
      // salva o arquivo real para envio
      imagemFile = file;

      // converte para base64 só para mostrar na tela
      const url = await lerConteudoDoArquivo(file);
      imagemBase64 = url;

      // atualiza preview
      imagemUpload.src = url;
      nomeImagemUpload.textContent = file.name;
    } catch (erro) {
      console.error("Erro ao ler arquivo", erro);
    }
  };
}

function lerConteudoDoArquivo(arquivo) {
  return new Promise((resolve, reject) => {
    const leitor = new FileReader();
    leitor.onload = () => resolve(leitor.result);
    leitor.onerror = () => reject();
    leitor.readAsDataURL(arquivo);
  });
}

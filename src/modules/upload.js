export function setupUpload() {
  const inputUpload = document.getElementById("image-upload");
  const imagemUpload = document.querySelector(".main-imagem");
  const nomeImagemUpload = document.querySelector(".container-imagem-nome p");

  inputUpload.click();

  inputUpload.onchange = async (evento) => {
    const file = evento.target.files[0];
    if (!file) return;

    try {
      const url = await lerConteudoDoArquivo(file);
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

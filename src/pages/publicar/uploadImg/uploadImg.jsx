import { Botao, Input } from "../../../shared/shared";
import { imgExemplo, imgX } from "../../../img/index.js";
import { setupUpload } from "../../../modules/upload.js";

export function UploadImg() {
  return (
    <div className="container-upload-imagem">
      <div className="container-imagem">
        <img src={imgExemplo} alt="imagem de exemplo" className="main-imagem" />
      </div>
      <Botao id="upload-btn" onClick={setupUpload}>
        Carregar imagem
      </Botao>
      <Input
        tipo="file"
        id="image-upload"
        accept="image/*"
        className="hidden"
      />

      <div className="container-imagem-nome">
        <p>Imagem_projeto.png</p>
        <img src={imgX} />
      </div>
    </div>
  );
}

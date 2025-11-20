import { Botao } from "../../../shared/shared";
import { imgExemplo, imgX } from "../../../img/index.js";

export function UploadImg() {
  return (
    <div className="container-upload-imagem">
      <div className="container-imagem">
        <img src={imgExemplo} alt="imagem de exemplo" className="main-imagem" />
      </div>
      <Botao id="upload-btn">Carregar imagem</Botao>

      <div className="container-imagem-nome">
        <p>Imagem_projeto.png</p>
        <img src={imgX} />
      </div>
    </div>
  );
}

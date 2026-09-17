import { Botao, Input } from "../../../components/shared";
import { imgExemplo, imgX } from "../../../img/index.js";
import { useProject } from "../../../app/hooks/useProjectContext";

export function UploadImg() {
  const { imagemCapa, nomeArquivo, handleImageChange, handleRemoverImagem } =
    useProject();

  return (
    <div className="container-upload-imagem">
      <div className="container-imagem">
        <img
          src={imagemCapa || imgExemplo}
          alt="imagem do projeto"
          className="main-imagem"
        />
      </div>

      <Botao
        id="upload-btn"
        type="button"
        onClick={() => document.getElementById("image-upload").click()}
      >
        Carregar imagem
      </Botao>

      <Input
        tipo="file"
        id="image-upload"
        accept="image/*"
        className="hidden"
        onChange={handleImageChange}
      />

      {nomeArquivo && (
        <div className="container-imagem-nome">
          <p>{nomeArquivo}</p>
          <img
            src={imgX}
            alt="Remover imagem"
            onClick={handleRemoverImagem}
            style={{ cursor: "pointer" }}
          />
        </div>
      )}
    </div>
  );
}

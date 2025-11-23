import { setupDescartar } from "../../../../modules/descartar";
import { setupPublicar } from "../../../../modules/publicar";
import { Botao } from "../../../../shared/shared";

export function Buttons() {
  return (
    <div className="container-botoes">
      <Botao className="botao-descartar" onClick={setupDescartar}>
        Descartar
      </Botao>
      <Botao className="botao-publicar" type="submit" onClick={setupPublicar}>
        Publicar
      </Botao>
    </div>
  );
}

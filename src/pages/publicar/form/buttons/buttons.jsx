import { setupDescartar } from "../../../../modules/descartar";
import { setupPublicar } from "../../../../modules/publicar";
import { Botao } from "../../../../shared/shared";

export function Buttons() {
  return (
    <div className="container-botoes">
      <Botao className="botao-descartar" type="button" onClick={setupDescartar}>
        Descartar
      </Botao>
      <Botao className="botao-publicar" type="button" onClick={setupPublicar}>
        Publicar
      </Botao>
    </div>
  );
}

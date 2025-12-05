import { setupPublicar } from "../../../../modules/publicar";
import { Botao } from "../../../../shared/shared";

export function Buttons({ onReset }) {
  return (
    <div className="container-botoes">
      <Botao className="botao-descartar" type="button" onClick={onReset}>
        Descartar
      </Botao>
      <Botao className="botao-publicar" type="button" onClick={setupPublicar}>
        Publicar
      </Botao>
    </div>
  );
}

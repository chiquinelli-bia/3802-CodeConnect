import { botaoLimpartags } from "../../../modules/tagsLogic";
import "../../../styles/styles.css";

export default function Filtro() {
  function handleClean() {
    botaoLimpartags();
  }
  return (
    <section className="container-pesquisa">
      <ul className="lista-tags"></ul>

      <button onClick={handleClean} className="botao-limpar-tags">
        Limpar Tudo
      </button>
    </section>
  );
}

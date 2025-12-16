import { botaoLimpartags } from "../../../modules/tagsLogic";
import "../../../pages/publicar/styles.css";

export default function BotaoLimparTags() {
  function handleClean() {
    botaoLimpartags();
  }
  return (
    <button onClick={handleClean} className="botao-limpar-tags">
      Limpar Tudo
    </button>
  );
}

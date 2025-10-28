import { setupUpload } from "./upload.js";
import { botaoLimpartags, setupTags } from "./tagsLogic.js";
import { setupPublicar } from "./publicar.js";
import { setupDescartar } from "./descartar.js";
import { setupResponsividade } from "./responsividade.js";
document.addEventListener("DOMContentLoaded", () => {
  setupUpload();
  setupTags();
  botaoLimpartags();
  setupPublicar();
  setupDescartar();
  setupResponsividade();
});

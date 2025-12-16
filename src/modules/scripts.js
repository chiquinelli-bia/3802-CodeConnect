import { setupUpload } from "./upload.js";
import { setupPublicar } from "./publicar.js";
import { setupDescartar } from "./descartar.js";
import { setupResponsividade } from "./responsividade.js";
document.addEventListener("DOMContentLoaded", () => {
  setupUpload();
  setupPublicar();
  setupDescartar();
  setupResponsividade();
});

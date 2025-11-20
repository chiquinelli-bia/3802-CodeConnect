import { useState, useEffect } from "react";
import Menu from "../../shared/menu/menu.jsx";
import { Input } from "../../shared/shared.jsx";
import { UploadImg } from "./uploadImg/uploadImg.jsx";
// importar css

export default function Publicar() {
  const [titulo, setTitulo] = useState("");
  const [termoPesquisa, setTermoPesquisa] = useState("");
  const [tagsSelecionadas, setTagsSelecionadas] = useState([]);
  return (
    <>
      <Menu />
      <main>
        <UploadImg />
        <div className="container-descricao">
          <h2>Novo projeto</h2>
          <form>
            <div>
              <Input
                label="Título do Projeto"
                tipo="text"
                id="titulo"
                name="titulo"
                value={titulo}
                setValor={setTitulo}
              />
            </div>
          </form>
        </div>
      </main>
    </>
  );
}

import { useState, useEffect } from "react";
import Menu from "../../shared/menu/menu.jsx";
import { Input } from "../../shared/shared.jsx";
// import BotaoLimparTags from "./filtro/filtro.jsx";
// importar css

export default function Publicar() {
  const [titulo, setTitulo] = useState("");
  const [termoPesquisa, setTermoPesquisa] = useState("");
  const [tagsSelecionadas, setTagsSelecionadas] = useState([]);
  return (
    <>
      <Menu />
      <main>
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
      </main>
    </>
  );
}

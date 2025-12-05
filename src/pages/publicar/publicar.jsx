import { useState } from "react";
import { setupDescartar } from "../../modules/descartar.js";
import Menu from "../../shared/menu/menu.jsx";
import { UploadImg } from "./uploadImg/uploadImg.jsx";
import { Form } from "./form/form.jsx";
import "./styles.css";

export default function Publicar() {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [termoPesquisa, setTermoPesquisa] = useState("");
  const [tagsSelecionadas, setTagsSelecionadas] = useState([]);
  const onReset = () => {
    setupDescartar(
      setDescricao,
      setTagsSelecionadas,
      setTermoPesquisa,
      setTitulo
    );
  };

  return (
    <>
      <Menu />
      <main>
        <UploadImg />
        <div className="container-descricao">
          <h2>Novo projeto</h2>
          <Form
            titulo={titulo}
            setTitulo={setTitulo}
            descricao={descricao}
            setDescricao={setDescricao}
            termoPesquisa={termoPesquisa}
            setTermoPesquisa={setTermoPesquisa}
            tagsSelecionadas={tagsSelecionadas}
            setTagsSelecionadas={setTagsSelecionadas}
            onReset={onReset}
          />
        </div>
      </main>
    </>
  );
}

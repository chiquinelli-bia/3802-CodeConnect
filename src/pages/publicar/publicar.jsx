import { useState, useEffect } from "react";
import Menu from "../../shared/menu/menu.jsx";
import { UploadImg } from "./uploadImg/uploadImg.jsx";
import { Form } from "./form/form.jsx";
// importar css

export default function Publicar() {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [termoPesquisa, setTermoPesquisa] = useState("");
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
          />
        </div>
      </main>
    </>
  );
}

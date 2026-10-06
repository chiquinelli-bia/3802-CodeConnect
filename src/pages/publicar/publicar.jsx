import Menu from "../../components/menu/menu.jsx";
import { UploadImg } from "./uploadImg/uploadImg.jsx";
import { Form } from "./form/form.jsx";
import "./styles.css";

export function Publicar() {
  return (
    <>
      <Menu />
      <main>
        <UploadImg />
        <div className="container-descricao">
          <h2>Novo projeto</h2>
          <Form />
        </div>
      </main>
    </>
  );
}

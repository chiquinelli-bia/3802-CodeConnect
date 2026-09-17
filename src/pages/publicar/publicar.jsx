import Menu from "../../components/menu/menu.jsx";
import { UploadImg } from "./uploadImg/uploadImg.jsx";
import { Form } from "./form/form.jsx";
import "./styles.css";
import { ProjectProvider } from "../../app/context/projectContext.jsx";

export function Publicar() {
  return (
    <ProjectProvider>
      <Menu />
      <main>
        <UploadImg />
        <div className="container-descricao">
          <h2>Novo projeto</h2>
          <Form />
        </div>
      </main>
    </ProjectProvider>
  );
}

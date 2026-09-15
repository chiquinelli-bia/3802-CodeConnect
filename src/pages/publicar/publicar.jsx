import { useState } from "react";
import { toast } from "react-toastify";
import { setupDescartar } from "../../modules/descartar.js";
import Menu from "../../shared/menu/menu.jsx";
import { UploadImg } from "./uploadImg/uploadImg.jsx";
import { Form } from "./form/form.jsx";
import "./styles.css";

import { FirebaseProjectRepository } from "../../infra/firebaseProjectRepository";
import { CreateProject } from "../../domain/useCases/CreateProject";

const repository = new FirebaseProjectRepository();
const createProjectUseCase = new CreateProject(repository);

export function Publicar() {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [termoPesquisa, setTermoPesquisa] = useState("");
  const [tagsSelecionadas, setTagsSelecionadas] = useState([]);
  const onReset = () => {
    setupDescartar(
      setDescricao,
      setTagsSelecionadas,
      setTermoPesquisa,
      setTitulo,
    );
  };
  const handlePublicar = async (e) => {
    e.preventDefault();

    const toastId = toast.loading("Publicando projeto...");

    try {
      await createProjectUseCase.execute({
        titulo,
        resumo: descricao,
        imagem_capa:
          imagemCapa ||
          "https://raw.githubusercontent.com/chiquinelli-bia/codeconnect-api-2/main/uploads/fokus.png?raw=true",
        tags: tagsSelecionadas,
        usuario: {
          nome: "Usuário Logado",
          imagem:
            "https://raw.githubusercontent.com/chiquinelli-bia/codeconnect-api-2/main/uploads/download.png?raw=true",
        },
      });

      toast.update(toastId, {
        render: "Projeto publicado com sucesso! 🎉",
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });

      onReset();
    } catch (error) {
      toast.update(toastId, {
        render: `Falha ao publicar: ${error.message}`,
        type: "error",
        isLoading: false,
        autoClose: 4000,
      });
    }
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
            onSubmit={handlePublicar}
          />
        </div>
      </main>
    </>
  );
}

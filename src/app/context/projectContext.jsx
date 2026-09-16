import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { setupDescartar } from "../../modules/descartar.js";
import { FirebaseProjectRepository } from "../../infra/firebaseProjectRepository.js";
import { CreateProject } from "../../domain/useCases/createProject";

const repository = new FirebaseProjectRepository();
const createProjectUseCase = new CreateProject(repository);

export const ProjectContext = createContext();

export function ProjectProvider({ children }) {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [termoPesquisa, setTermoPesquisa] = useState("");
  const [tagsSelecionadas, setTagsSelecionadas] = useState([]);
  const [imagemCapa, setImagemCapa] = useState("");
  const [nomeArquivo, setNomeArquivo] = useState("");

  const onReset = () => {
    setupDescartar(
      setDescricao,
      setTagsSelecionadas,
      setTermoPesquisa,
      setTitulo,
    );
    setImagemCapa("");
    setNomeArquivo("");
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setNomeArquivo(file.name);

    const leitor = new FileReader();
    leitor.onload = () => {
      setImagemCapa(leitor.result);
    };
    leitor.readAsDataURL(file);
  };

  const handleRemoverImagem = () => {
    setImagemCapa("");
    setNomeArquivo("");
  };

  const handlePublicar = async (e) => {
    e?.preventDefault();

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
    <ProjectContext.Provider
      value={{
        titulo,
        setTitulo,
        descricao,
        setDescricao,
        termoPesquisa,
        setTermoPesquisa,
        tagsSelecionadas,
        setTagsSelecionadas,
        imagemCapa,
        nomeArquivo,
        handleImageChange,
        handleRemoverImagem,
        handlePublicar,
        onReset,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
}

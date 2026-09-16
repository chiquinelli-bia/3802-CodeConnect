import { useState, useEffect } from "react";
import Menu from "../../shared/menu/menu.jsx";
import Search from "./search/search.jsx";
import BotaoLimparTags from "./filtro/filtro.jsx";
import Ordenacao from "./ordenacao/ordenacao.jsx";
import Card from "./card/card.jsx";
import "./feed.css";
import { FirebaseProjectRepository } from "../../infra/firebaseProjectRepository";
import { ListProjects } from "../../domain/useCases/api/listProjects.js";
import { FilterProjects } from "../../domain/useCases/api/FilterProjects";
import { toast } from "react-toastify";

const repository = new FirebaseProjectRepository();
const listProjectsUseCase = new ListProjects(repository);
const filterProjectsUseCase = new FilterProjects(repository);

export function Feed() {
  const [todosDados, setTodosDados] = useState([]);
  const [dados, setDados] = useState([]);
  const [termoPesquisa, setTermoPesquisa] = useState("");
  const [tagsSelecionadas, setTagsSelecionadas] = useState([]);

  // Busca inicial dos dados no Firebase
  useEffect(() => {
    async function carregar() {
      // Exibe um toast de carregamento enquanto busca os dados
      const toastId = toast.loading("Carregando projetos...");

      try {
        const projetos = await listProjectsUseCase.execute();
        setTodosDados(projetos);
        setDados(projetos);

        // Atualiza o toast informando sucesso
        toast.update(toastId, {
          render: "Projetos carregados com sucesso!",
          type: "success",
          isLoading: false,
          autoClose: 3000,
        });
      } catch (error) {
        console.error("Erro ao buscar projetos do Firebase:", error);

        // Atualiza o toast em caso de erro
        toast.update(toastId, {
          render: "Erro ao carregar projetos. Tente novamente mais tarde.",
          type: "error",
          isLoading: false,
          autoClose: 4000,
        });
      }
    }

    carregar();
  }, []);

  // Executa o filtro sempre que a busca ou as tags mudam
  useEffect(() => {
    const filtrados = filterProjectsUseCase.execute(
      todosDados,
      termoPesquisa,
      tagsSelecionadas,
    );
    setDados(filtrados);
  }, [termoPesquisa, tagsSelecionadas, todosDados]);

  return (
    <>
      <Menu />
      <section className="container">
        <div className="container-pesquisa">
          <Search
            termoPesquisa={termoPesquisa}
            setTermoPesquisa={setTermoPesquisa}
            tagsSelecionadas={tagsSelecionadas}
            setTagsSelecionadas={setTagsSelecionadas}
          />
          <BotaoLimparTags />
        </div>
        <Ordenacao />
        <ul className="lista-cards">
          {dados.map((item) => (
            <li key={item.id}>
              <Card
                id={item.id}
                imagemUrl={item.imagem_capa || item.imagem}
                titulo={item.titulo}
                resumo={item.resumo}
                linhasDeCodigo={item.linhas_de_codigo}
                compartilhamentos={item.compartilhamentos}
                comentarios={item.comentarios}
                usuario={item.usuario}
              />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

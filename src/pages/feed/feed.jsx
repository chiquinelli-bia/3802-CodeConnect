import { useState, useEffect, useMemo } from "react";
import Menu from "../../components/menu/menu.jsx";
import Search from "./search/search.jsx";
import BotaoLimparTags from "./filtro/filtro.jsx";
import Ordenacao from "./ordenacao/ordenacao.jsx";
import Card from "./card/card.jsx";
import "./feed.css";
import { FirebaseProjectRepository } from "../../infra/firebaseProjectRepository";
import { ListProjects } from "../../domain/useCases/api/listProjects.js";
import { FilterProjects } from "../../domain/useCases/api/filterProjects";
import { toast } from "react-toastify";

const repository = new FirebaseProjectRepository();
const listProjectsUseCase = new ListProjects(repository);
const filterProjectsUseCase = new FilterProjects(repository);

export function Feed() {
  const [todosDados, setTodosDados] = useState([]);
  const [termoPesquisa, setTermoPesquisa] = useState("");
  const [tagsSelecionadas, setTagsSelecionadas] = useState([]);

  // Busca inicial dos dados no Firebase
  useEffect(() => {
    async function carregar() {
      const toastId = toast.loading("Carregando projetos...");

      try {
        const projetos = await listProjectsUseCase.execute();
        setTodosDados(projetos);

        toast.update(toastId, {
          render: "Projetos carregados com sucesso!",
          type: "success",
          isLoading: false,
          autoClose: 3000,
        });
      } catch (error) {
        console.error("Erro ao buscar projetos do Firebase:", error);

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

  // Cálculo derivado da lista filtrada em tempo de renderização
  const dadosFiltrados = useMemo(() => {
    return filterProjectsUseCase.execute(
      todosDados,
      termoPesquisa,
      tagsSelecionadas,
    );
  }, [todosDados, termoPesquisa, tagsSelecionadas]);

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
          {dadosFiltrados.map((item) => (
            <li key={item.id}>
              <Card
                id={item.id}
                slug={item.slug}
                imagemUrl={item.imagem_capa || item.imagem}
                titulo={item.titulo}
                resumo={item.resumo}
                linhasDeCodigo={
                  item.linhas_de_codigo || item.linhasDeCodigo || 0
                }
                projectLikes={item.likes ?? item.projectLikes ?? 0} // Garante a busca no campo 'likes' do Firestore
                comentarios={item.comentarios || 0}
                usuario={item.usuario}
              />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

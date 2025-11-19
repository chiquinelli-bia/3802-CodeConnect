import { useState, useEffect } from "react";
import { filtrarProjetos } from "../../modules/api.js";
import Menu from "../../shared/menu/menu.jsx";
import Search from "./search/search.jsx";
import BotaoLimparTags from "./filtro/filtro.jsx";
import Card from "./card/card.jsx";
import "./feed.css";
import { buscarProjetos } from "../../modules/api.js";

export default function Feed() {
  const [todosDados, setTodosDados] = useState([]);
  const [dados, setDados] = useState([]);
  const [termoPesquisa, setTermoPesquisa] = useState("");
  const [tagsSelecionadas, setTagsSelecionadas] = useState([]);
  filtrarProjetos;
  useEffect(() => {
    async function carregar() {
      const projetos = await buscarProjetos();
      setTodosDados(projetos);

      setDados(projetos);
    }
    carregar();
  }, []);

  useEffect(() => {
    const filtrados = filtrarProjetos(
      todosDados,
      termoPesquisa,
      tagsSelecionadas
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
        <ul className="lista-cards">
          {dados.map((item) => (
            <li key={item.id}>
              <Card
                id={item.id}
                imagemUrl={item.imagem_capa}
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

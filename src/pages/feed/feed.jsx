import { useState, useEffect } from "react";
import axios from "axios";
import Menu from "../../shared/menu/menu.jsx";
import Search from "./search/search.jsx";
import "./feed.css";
import Filtro from "./filtro/filtro.jsx";
import Card from "./card/card.jsx";

function Feed() {
  const [dados, setDados] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://my-json-server.typicode.com/MonicaHillman/codeconnect-api/publicacoes"
      )
      .then((res) => {
        setDados(res.data);
        console.log(dados);
      })
      .catch((erro) => console.error("Erro ao buscar dados:", erro));
  }, []);
  return (
    <div className="container">
      <Menu />
      <div>
        <Search />
        <Filtro />
        <ul className="lista-cards">
          {dados
            ? dados.map((item, index) => (
                <li key={index}>
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
              ))
            : null}
        </ul>
      </div>
    </div>
  );
}
export default Feed;

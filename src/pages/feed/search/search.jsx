import { useState } from "react";
import "../../feed/feed.css";
export default function Search() {
  const [termoPesquisa, setTermoPesquisa] = useState("");
  console.log(termoPesquisa);
  return (
    <input
      type="search"
      placeholder="Digite oque você procura."
      className="form__search"
      name="categoria"
      value={termoPesquisa}
      onChange={(evento) => setTermoPesquisa(evento.target.value)}
    />
  );
}

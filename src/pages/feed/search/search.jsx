import { useState, useEffect } from "react";
import "../../feed/feed.css";
import { setupTags } from "../../../modules/tagsLogic.js";
export default function Search() {
  const [termoPesquisa, setTermoPesquisa] = useState("");
  useEffect(() => {
    setupTags();
  }, []);
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

import React, { useState } from "react";
import { verificaTagsDisponiveis } from "../../../modules/tagsLogic.js";

export default function Search({
  termoPesquisa,
  setTermoPesquisa,
  tagsSelecionadas,
  setTagsSelecionadas,
}) {
  const [input, setInput] = useState("");
  const handleKeyDown = async (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const valor = input.trim().toLowerCase();

      if (!valor) return;

      const tagExiste = await verificaTagsDisponiveis(valor);

      if (!tagExiste) {
        alert(
          "Tag não encontrada. Use apenas tags de tecnologia, como front-end, back-end, programação, linguagens (HTML, CSS, JS), ferramentas (Git, GitHub), design (UX/UI, Figma), etc."
        );
        return;
      }

      if (!tagsSelecionadas.includes(valor)) {
        setTagsSelecionadas([...tagsSelecionadas, valor]);
      }

      setInput("");
    }
  };

  const onChange = (e) => {
    setInput(e.target.value);
    setTermoPesquisa(e.target.value);
  };

  const removeTag = (tag) => {
    setTagsSelecionadas(tagsSelecionadas.filter((t) => t !== tag));
  };

  return (
    <>
      <input
        type="text"
        placeholder="Digite para pesquisar ou adicionar tag e aperte Enter"
        className="form__search"
        value={input}
        onChange={onChange}
        onKeyDown={handleKeyDown}
      />
      <ul className="lista-tags">
        {tagsSelecionadas.map((tag) => (
          <li key={tag} className="lista-tag-element">
            {tag}{" "}
            <button type="button" onClick={() => removeTag(tag)}>
              x
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

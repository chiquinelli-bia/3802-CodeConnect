import { useState } from "react";
import { toast } from "react-toastify";
import { verificaTagsDisponiveis } from "../../../modules/tagsLogic.js";
import { Botao } from "../../../components/shared.jsx";

export default function Search({
  label,
  id = "campo-busca",
  termoPesquisa,
  setTermoPesquisa,
  tagsSelecionadas,
  setTagsSelecionadas,
  className = "form__search",
}) {
  const [input, setInput] = useState("");

  const handleKeyDown = async (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const valor = input.trim().toLowerCase();

      if (!valor) return;

      const tagExiste = await verificaTagsDisponiveis(valor);

      if (!tagExiste) {
        toast.warning(
          "Tag não encontrada. Use tags de tecnologia como HTML, CSS, JS, Git, Figma, etc.",
          { toastId: "tag-invalida" },
        );
        return;
      }

      if (!tagsSelecionadas.includes(valor)) {
        setTagsSelecionadas([...tagsSelecionadas, valor]);
      } else {
        toast.info("Esta tag já foi adicionada.", { toastId: "tag-duplicada" });
      }

      setTermoPesquisa("");
      setInput("");
    }
  };

  const onChange = (e) => {
    const valor = e.target.value;
    setInput(valor);
    setTermoPesquisa(valor);
  };

  const removeTag = (tagParaRemover) => {
    setTagsSelecionadas(
      tagsSelecionadas.filter((tag) => tag !== tagParaRemover),
    );
  };

  return (
    <>
      {label && <label htmlFor={id}>{label}</label>}

      <input
        id={id}
        type="text"
        placeholder="Digite e aperte Enter"
        className={className}
        value={input}
        onChange={onChange}
        onKeyDown={handleKeyDown}
      />

      {tagsSelecionadas.length > 0 && (
        <ul className="lista-tags">
          {tagsSelecionadas.map((tag) => (
            <li key={tag} className="lista-tag-element">
              <span>{tag}</span>
              <Botao
                type="button"
                className="botao-remover-tag"
                onClick={() => removeTag(tag)}
                aria-label={`Remover tag ${tag}`}
              >
                ×
              </Botao>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

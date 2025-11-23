import { Input } from "../../../shared/shared";
import Search from "../../feed/search/search";
import { Buttons } from "./buttons/buttons";
import { Textarea } from "./textarea/textarea";

export function Form({
  titulo,
  setTitulo,
  descricao,
  setDescricao,
  termoPesquisa,
  setTagsSelecionadas,
  setTermoPesquisa,
  tagsSelecionadas,
}) {
  return (
    <form>
      <div>
        <Input
          label="Título do Projeto"
          tipo="text"
          id="titulo"
          name="titulo"
          className="input-campo"
          value={titulo}
          setValor={setTitulo}
        />
      </div>
      <Textarea
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
        setDescricao={setDescricao}
      />

      <div>
        <Search
          label="tags"
          id="tags"
          className="input-campo"
          termoPesquisa={termoPesquisa}
          setTermoPesquisa={setTermoPesquisa}
          tagsSelecionadas={tagsSelecionadas}
          setTagsSelecionadas={setTagsSelecionadas}
        />
      </div>
      <div className="container-botoes">
        <Buttons />
      </div>
    </form>
  );
}

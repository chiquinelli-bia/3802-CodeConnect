import { Input, Botao } from "../../../shared/shared";
import Search from "../../feed/search/search";
import { Textarea } from "./textarea/textarea";

export function Form({
  titulo,
  setTitulo,
  descricao,
  setDescricao,
  termoPesquisa,
  setTermoPesquisa,
  tagsSelecionadas,
  setTagsSelecionadas,
  onReset,
  onSubmit,
}) {
  return (
    <form onSubmit={onSubmit}>
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
        <Botao className="botao-descartar" type="button" onClick={onReset}>
          Descartar
        </Botao>
        <Botao className="botao-publicar" type="submit">
          Publicar
        </Botao>
      </div>
    </form>
  );
}

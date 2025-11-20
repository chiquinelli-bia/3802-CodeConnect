import { Input } from "../../../shared/shared";

export function Form({ titulo, setTitulo }) {
  return (
    <form>
      <div>
        <Input
          label="Título do Projeto"
          tipo="text"
          id="titulo"
          name="titulo"
          value={titulo}
          setValor={setTitulo}
        />
      </div>
      <div>
        <label htmlFor="descricao">Descricao</label>
        <textarea id="descricao" name="descricao"></textarea>
      </div>
      {/* <div>
              <label for="categoria">Tags</label>
              <input type="text" id="categoria" name="categoria" />
              <ul className="lista-tags"></ul>
            </div> */}
      {/* <div className="container-botoes">
              <button className="botao-descartar">Descartar</button>
              <button className="botao-publicar">Publicar</button>
            </div> */}
    </form>
  );
}

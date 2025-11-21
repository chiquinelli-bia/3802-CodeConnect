import { Input } from "../../../shared/shared";
import { Textarea } from "./textarea/textarea";

export function Form({ titulo, setTitulo, descricao, setDescricao }) {
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
      <Textarea
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
        setDescricao={setDescricao}
      />
    </form>
  );
}

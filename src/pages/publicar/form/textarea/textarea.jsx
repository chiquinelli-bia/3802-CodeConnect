export function Textarea({ descricao, setDescricao }) {
  return (
    <div>
      <label htmlFor="descricao">Descricao</label>
      <textarea
        id="descricao"
        name="descricao"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
      ></textarea>
    </div>
  );
}

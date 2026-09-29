export function Textarea({
  label = "Descrição",
  id = "descricao",
  name = "descricao",
  value,
  onChange,
  descricao,
  setDescricao,
  rows = 4,
  placeholder,
  required = false,
  className,
}) {
  const valorAtual = value !== undefined ? value : descricao;
  const handleChange = onChange || ((e) => setDescricao?.(e.target.value));

  return (
    <div className={className}>
      {label && <label htmlFor={id}>{label}</label>}
      <textarea
        id={id}
        name={name}
        value={valorAtual}
        onChange={handleChange}
        rows={rows}
        placeholder={placeholder}
        required={required}
      ></textarea>
    </div>
  );
}

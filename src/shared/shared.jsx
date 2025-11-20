export function Titulo({ children }) {
  return <h1 className="form__titulo">{children}</h1>;
}

export function SubTitulo({ children }) {
  return <h2 className="form__texto">{children}</h2>;
}
export function Input({
  label,
  tipo,
  placeholder,
  id,
  accept,
  value,
  setValor,
}) {
  return (
    <>
      {label && <label htmlFor={tipo}>{label}</label>}
      <input
        type={tipo}
        placeholder={placeholder || undefined}
        required
        id={id}
        accept={accept || undefined}
        value={value}
        onChange={(evento) => setValor(evento.target.value)}
      />
    </>
  );
}

export function CheckBox() {
  return (
    <>
      <div className="form__campo-checkbox">
        <input type="checkbox" id="lembrar" />
        <label htmlFor="lembrar" />
      </div>
      <p className="form__opcoes-texto">Lembrar-me</p>
    </>
  );
}
export function Botao({ children }) {
  return (
    <button
      aria-disabled="true"
      title="Funcionalidade em desenvolvimento"
      className="form__botao"
      type="submit"
    >
      {children}
    </button>
  );
}
export function Txt({ classe, children }) {
  return <p className={classe}>{children}</p>;
}

export function RedesSociais({ nome, icon }) {
  return (
    <li title="em desenvolvimento">
      <a href="#" aria-disabled="true" className="disabled">
        <img src={icon} alt={`ícone do ${nome}`} /> {nome}
      </a>
    </li>
  );
}

export function Link({ link, children }) {
  return (
    <a href={link} className="container-links__link">
      {children}
    </a>
  );
}

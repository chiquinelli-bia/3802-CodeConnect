import { Link as LinkRouter } from "react-router-dom";

export function Input({
  label,
  tipo,
  placeholder,
  className,
  id,
  accept,
  name,
  value,
  setValor,
  ...props
}) {
  return (
    <>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        type={tipo}
        placeholder={placeholder || undefined}
        required
        className={className}
        id={id}
        accept={accept || undefined}
        name={name || undefined}
        {...props}
        {...(tipo === "file"
          ? {}
          : {
              value: value,
              onChange: (e) => setValor && setValor(e.target.value),
            })}
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
export function Botao({
  disabled,
  title,
  className,
  type,
  id,
  onClick,
  children,
}) {
  return (
    <button
      aria-disabled={disabled || false}
      title={title || "Funcionalidade em desenvolvimento"}
      className={className}
      type={type}
      id={id}
      onClick={disabled ? undefined : onClick}
    >
      {children}
    </button>
  );
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
    <LinkRouter to={link} className="container-links__link">
      {children}
    </LinkRouter>
  );
}

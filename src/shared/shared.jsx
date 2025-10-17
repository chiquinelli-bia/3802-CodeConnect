import React from "react";

export function Titulo({ children }) {
  return <h1 className="form__titulo">{children}</h1>;
}

export function SubTitulo({ children }) {
  return <h2 className="form__texto">{children}</h2>;
}
export function CampoDigitacao({ label, tipo, placeholder, value, setValor }) {
  return (
    <div className="form__campo-digitacao">
      <label htmlFor={tipo}>{label}</label>
      <input
        type={tipo}
        placeholder={placeholder}
        required
        id={tipo}
        value={value}
        onChange={(evento) => setValor(evento.target.value)}
      />
    </div>
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

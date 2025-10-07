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

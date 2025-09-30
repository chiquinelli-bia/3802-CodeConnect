import React from "react";
import ReactDOM from "react-dom/client";
function Titulo({ children }) {
  return <h1 className="form__titulo">{children}</h1>;
}

function SubTitulo({ children }) {
  return <h2 className="form__texto">{children}</h2>;
}
function CampoDigitacao({ label, tipo, placeholder }) {
  return (
    <div className="form__campo-digitacao">
      <label htmlFor="email">{label}</label>
      <input type={tipo} placeholder={placeholder} required id={tipo} />
    </div>
  );
}
function Botao({ children }) {
  return (
    <button className="form__botao" type="submit">
      {children}
    </button>
  );
}
function Login() {
  return (
    <div className="container-login">
      <img
        src="../img/imagem-login.png"
        alt="uma mulher negra de cabelos crespos usando óculos e mexendo no computador, também há o logo da codeconnect"
      />
      <section>
        <form>
          <Titulo>Login</Titulo>
          <SubTitulo>Boas Vindas! Faça seu Login.</SubTitulo>
          <CampoDigitacao
            label="E-mail ou usuário"
            tipo="email"
            placeholder="Digite o seu email ou usuário"
          />
          <CampoDigitacao
            label="Senha"
            tipo="password"
            placeholder="Digite a sua senha"
          />

          <Botao>Login</Botao>
        </form>
      </section>
    </div>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<Login />);

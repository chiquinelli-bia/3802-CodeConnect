import React from "react";
import ReactDOM from "react-dom/client";
function Titulo({ children }) {
  return <h1 className="form__titulo">{children}</h1>;
}

function SubTitulo({ children }) {
  return <h2 className="form__texto">{children}</h2>;
}
function CampoDigitacao({ label, tipo, placeholder, value, setValor }) {
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
function Botao({ children }) {
  return (
    <button className="form__botao" type="submit">
      {children}
    </button>
  );
}
function Login() {
  const [email, setEmail] = React.useState("");
  const [senha, setSenha] = React.useState("");
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
            value={email}
            setValor={setEmail}
          />
          <CampoDigitacao
            label="Senha"
            tipo="password"
            placeholder="Digite a sua senha"
            value={senha}
            setValor={setSenha}
          />

          <Botao>Login</Botao>
        </form>
      </section>
    </div>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<Login />);

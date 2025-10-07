import React from "react";
import ReactDOM from "react-dom/client";

import imagemLogin from "../img/imagem-login.png";
import githubIcon from "../img/Github.svg";
import googleIcon from "../img/Google.svg";

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

function CheckBox() {
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

function Txt({ classe, children }) {
  return <p className={classe}>{children}</p>;
}

function RedesSociais({ link, nome, icon }) {
  return (
    <li>
      <a href={link}>
        <img src={icon} alt={`ícone do ${nome}`} /> {nome}
      </a>
    </li>
  );
}

function Link({ children }) {
  return (
    <a href="#" className="container-links__link">
      {children}
    </a>
  );
}

function Login() {
  const [email, setEmail] = React.useState("");
  const [senha, setSenha] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("email " + email);
    console.log("senha " + senha);
  };

  return (
    <div className="container-login">
      <img
        src={imagemLogin}
        alt="uma mulher negra de cabelos crespos usando óculos e mexendo no computador, também há o logo da codeconnect"
      />

      <section>
        <form onSubmit={handleSubmit}>
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

          <fieldset className="form__opcoes">
            <CheckBox />
            <p>
              <a href="#" aria-label="Recuperar senha esquecida">
                Esqueci a senha
              </a>
            </p>
          </fieldset>

          <Botao>Login</Botao>
        </form>

        <div className="container-links">
          <Txt classe="container-links__titulo">ou entre com outras contas</Txt>
          <ul>
            <RedesSociais
              link="https://www.github.com"
              nome="Github"
              icon={githubIcon}
            />
            <RedesSociais
              link="https://www.google.com"
              nome="Google"
              icon={googleIcon}
            />
          </ul>

          <Txt classe="container-links__texto">Ainda não tem conta?</Txt>
          <Link>Crie seu cadastro!</Link>
        </div>
      </section>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Login />);

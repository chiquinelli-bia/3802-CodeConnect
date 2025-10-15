import React from "react";
import ReactDOM from "react-dom/client";
import {
  Titulo,
  SubTitulo,
  CampoDigitacao,
  CheckBox,
  Botao,
  Txt,
  RedesSociais,
  Link,
} from "./shared.jsx";

import imagemLogin from "../img/imagem-login.png";
import githubIcon from "../img/Github.svg";
import googleIcon from "../img/Google.svg";

function Login() {
  const [email, setEmail] = React.useState("");
  const [senha, setSenha] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("email " + email);
    console.log("senha " + senha);
  };

  return (
    <div className="container-autenticacao">
      <img
        className="container-autenticacao__login"
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
            <p
              aria-label="Recuperar senha esquecida"
              title="Recuperar senha esquecida - em desenvolvimento"
            >
              <a href="#" aria-disabled="true" className="disabled">
                Esqueci a senha
              </a>
            </p>
          </fieldset>

          <Botao>Login</Botao>
        </form>

        <div className="container-links">
          <Txt classe="container-links__titulo">ou entre com outras contas</Txt>
          <ul>
            <RedesSociais nome="Github" icon={githubIcon} />
            <RedesSociais nome="Google" icon={googleIcon} />
          </ul>

          <Txt classe="container-links__texto">Ainda não tem conta?</Txt>
          <Link link="cadastro.html">Crie seu cadastro!</Link>
        </div>
      </section>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Login />);

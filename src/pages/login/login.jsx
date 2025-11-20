import React from "react";
import ReactDOM from "react-dom/client";
import {
  Titulo,
  SubTitulo,
  CheckBox,
  Botao,
  Txt,
  RedesSociais,
  Link,
} from "../../shared/shared.jsx";

import { imagemLogin, githubIcon, googleIcon } from "../../img/index.js";
import { CamposDigitacao } from "../../shared/campos-autenticacao/campos-autenticacao.jsx";

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

          <CamposDigitacao
            email={email}
            setEmail={setEmail}
            senha={senha}
            setSenha={setSenha}
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

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

import { imagemCadastro, githubIcon, googleIcon } from "../../img/index.js";
import { CamposDigitacao } from "../../shared/campos-autenticacao/campos-autenticacao.jsx";

function Cadastro() {
  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [senha, setSenha] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("nome " + nome);
    console.log("email " + email);
    console.log("senha " + senha);
  };
  return (
    <div className="container-autenticacao">
      <img
        src={imagemCadastro}
        alt="Uma mulher de óculos trabalha em um laptop cercada por telas digitais verdes flutuantes que mostram pessoas. O ambiente é futurista e focado em tecnologia."
      />
      <section>
        <form onSubmit={handleSubmit}>
          <Titulo>Cadastro</Titulo>
          <SubTitulo>Olá! Preencha Seus Dados.</SubTitulo>
          <CamposDigitacao
            nome={nome}
            setNome={setNome}
            email={email}
            setEmail={setEmail}
            senha={senha}
            setSenha={setSenha}
          />
          <fieldset className="form__opcoes">
            <CheckBox />
          </fieldset>
          <Botao disabled="true" className="form__botao" type="submit">
            Cadastrar
          </Botao>
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

          <Txt classe="container-links__texto">Já tem conta ?</Txt>
          <Link link="login.html">Faça seu login!</Link>
        </div>
      </section>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("rootCadastro")).render(
  <Cadastro />
);

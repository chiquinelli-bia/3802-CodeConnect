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
import imagemCadastro from "../img/imagem-cadastro.png";
import githubIcon from "../img/Github.svg";
import googleIcon from "../img/Google.svg";

function Cadastro() {
  return (
    <div className="container-autenticacao">
      <img
        src={imagemCadastro}
        alt="Uma mulher de óculos trabalha em um laptop cercada por telas digitais verdes flutuantes que mostram pessoas. O ambiente é futurista e focado em tecnologia."
      />
      <section>
        <form>
          <Titulo>Cadastro</Titulo>
          <SubTitulo>Olá! Preencha Seus Dados.</SubTitulo>
          <CampoDigitacao
            label="Nome"
            tipo="text"
            placeholder="Nome Completo"
            value=""
            setValor=""
          />
          <CampoDigitacao
            label="E-mail ou usuário"
            tipo="email"
            placeholder="Digite o seu email ou usuário"
            value=""
            setValor=""
          />

          <CampoDigitacao
            label="Senha"
            tipo="password"
            placeholder="Digite a sua senha"
            value=""
            setValor=""
          />
          <fieldset className="form__opcoes">
            <CheckBox />
          </fieldset>
          <Botao>Cadastrar</Botao>
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

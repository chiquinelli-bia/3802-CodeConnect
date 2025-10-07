import React from "react";
import ReactDOM from "react-dom/client";
import { Titulo, SubTitulo, CampoDigitacao } from "./shared.jsx";
import imagemCadastro from "../img/imagem-cadastro.png";

function Cadastro() {
  return (
    <div className="container-login">
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
        </form>
      </section>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("rootCadastro")).render(
  <Cadastro />
);

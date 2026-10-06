import React from "react";
import { Link } from "react-router-dom";

import { CheckBox, Botao, RedesSociais } from "../../components/shared.jsx";
import Menu from "../../components/menu/menu.jsx";
import { imagemCadastro, githubIcon, googleIcon } from "../../img/index.js";
import { CamposAutenticacao } from "../../components/campos-autenticacao/campos-autenticacao.jsx";

import { useAuthContext } from "../../app/hooks/useAuthContext";
export function Cadastro() {
  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [senha, setSenha] = React.useState("");
  const [foto, setFoto] = React.useState(null);
  const [fotoPreview, setFotoPreview] = React.useState(null);

  const { signUp, loginWithGithub, loginWithGoogle } = useAuthContext();

  const handleFotoChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      setFoto(file);
      setFotoPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    await signUp(nome, email, senha, foto);
  };

  return (
    <>
      <Menu />
      <div className="container-autenticacao">
        <img
          src={imagemCadastro}
          alt="Uma mulher de óculos trabalha em um laptop..."
        />
        <section className="container-form">
          <form onSubmit={handleSubmit}>
            <h1 className="form__titulo">Olá! Preencha Seus Dados.</h1>

            <CamposAutenticacao
              nome={nome}
              setNome={setNome}
              email={email}
              setEmail={setEmail}
              senha={senha}
              setSenha={setSenha}
              fotoPreview={fotoPreview}
              handleFotoChange={handleFotoChange}
              camposOpcionais={{ nome: true, foto: true }}
            />

            <fieldset className="form__opcoes">
              <CheckBox />
            </fieldset>

            <Botao className="form__botao" type="submit">
              Cadastrar
            </Botao>
          </form>

          <div className="container-links">
            <p className="container-links__titulo">
              ou entre com outras contas
            </p>
            <ul>
              <RedesSociais
                nome="Github"
                onClick={loginWithGithub}
                icon={githubIcon}
              />
              <RedesSociais
                nome="Google"
                icon={googleIcon}
                onClick={loginWithGoogle}
              />
            </ul>
            <p className="container-links__texto">Já tem conta?</p>
            <Link to="/login" className="container-links__link">
              Faça seu login!
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

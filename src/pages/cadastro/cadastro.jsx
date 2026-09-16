import React from "react";
import ReactDOM from "react-dom/client";
import { CheckBox, Botao, RedesSociais, Link } from "../../shared/shared.jsx";
import Menu from "../../shared/menu/menu.jsx";
import { imagemCadastro, githubIcon, googleIcon } from "../../img/index.js";
import { CamposDigitacao } from "../../shared/campos-autenticacao/campos-autenticacao.jsx";
import { CreateUser } from "../../domain/useCases/createUser.js";
import { FirebaseUserRepository } from "../../infra/userFirebaseRepository.js";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const createUser = new CreateUser(new FirebaseUserRepository());

export function Cadastro() {
  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [senha, setSenha] = React.useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await createUser.execute({
        name: nome,
        email: email,
        password: senha,
      });

      toast.success("Usuário registrado com sucesso!");

      setNome("");
      setEmail("");
      setSenha("");
      navigate("/login");
    } catch (error) {
      toast.error("ops! houve um problema durante o registro.");
      console.error(error);
    }
  };

  return (
    <>
      <Menu></Menu>
      <div className="container-autenticacao">
        <img
          src={imagemCadastro}
          alt="Uma mulher de óculos trabalha em um laptop..."
        />
        <section className="container-form">
          <form onSubmit={handleSubmit}>
            <h1 className="form__titulo">Cadastro</h1>
            <h2 className="form__texto">Olá! Preencha Seus Dados.</h2>
            <CamposDigitacao
              nome={nome}
              setNome={setNome}
              email={email}
              setEmail={setEmail}
              senha={senha}
              setSenha={setSenha}
              camposOpcionais={{ nome: true }}
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

            <p className="container-links__texto">Já tem conta ?</p>
            <Link link="/login">Faça seu login!</Link>
          </div>
        </section>
      </div>
    </>
  );
}

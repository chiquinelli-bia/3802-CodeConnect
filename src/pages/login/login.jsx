import Menu from "../../shared/menu/menu.jsx";
import { CheckBox, Botao, RedesSociais, Link } from "../../shared/shared.jsx";

import { imagemLogin, githubIcon, googleIcon } from "../../img/index.js";
import { CamposDigitacao } from "../../shared/campos-autenticacao/campos-autenticacao.jsx";
import { useState } from "react";
import { useAuthContext } from "../../app/hooks/useAuthContext.js";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const { login } = useAuthContext();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await login(email, senha);

      setEmail("");
      setSenha("");
      toast.success("Boas vindas ao Code Connect!");
      navigate("/feed");
    } catch (error) {
      console.log("Falha ao efetuar login!", error);
      toast.error("Falha ao efetuar login, confirme seu e-mail e senha.");
    }
  };

  return (
    <>
      <Menu />
      <div className="container-autenticacao">
        <img
          className="container-autenticacao__login"
          src={imagemLogin}
          alt="uma mulher negra de cabelos crespos usando óculos e mexendo no computador, também há o logo da codeconnect"
        />

        <section className="container-form">
          <form onSubmit={handleSubmit}>
            <h1 className="form__titulo">Login</h1>
            <h2 className="form__texto">Boas Vindas! Faça seu Login.</h2>

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

            <Botao className="form__botao" type="submit">
              Login
            </Botao>
          </form>

          <div className="container-links">
            <p className="container-links__titulo">
              ou entre com outras contas
            </p>
            <ul>
              <RedesSociais nome="Github" icon={githubIcon} />
              <RedesSociais nome="Google" icon={googleIcon} />
            </ul>

            <p className="container-links__texto">Ainda não tem conta?</p>
            <Link link="/">Crie seu cadastro!</Link>
          </div>
        </section>
      </div>
    </>
  );
}

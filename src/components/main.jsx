import React from "react";
import ReactDOM from "react-dom/client";
function Titulo() {
  return <h1 className="form__titulo">Login</h1>;
}

function SubTitulo() {
  return <h2 className="form__texto">Boas Vindas! Faça seu Login.</h2>;
}
<<<<<<< HEAD
function CampoDigitacao({ label, tipo, placeholder }) {
  return (
    <div className="form__campo-digitacao">
      <label htmlFor="email">{label}</label>
      <input type={tipo} placeholder={placeholder} required id={tipo} />
    </div>
  );
}
function Botao() {
  return (
    <button className="form__botao" type="submit">
      Login
    </button>
  );
}
=======
>>>>>>> e3ee9fd1d27cdefc5f68b91101506dd06837a4b9
function Login() {
  return (
    <div className="container-login">
      <img
        src="../img/imagem-login.png"
        alt="uma mulher negra de cabelos crespos usando óculos e mexendo no computador, também há o logo da codeconnect"
      />
      <section>
<<<<<<< HEAD
        <form>
          <Titulo />
          <SubTitulo />
          <CampoDigitacao
            label="E-mail ou usuário"
            tipo="email"
            placeholder="Digite o seu email ou usuário"
          />
          <CampoDigitacao
            label="Senha"
            tipo="password"
            placeholder="Digite a sua senha"
          />

          <Botao />
        </form>
      </section>
    </div>
  );
}

=======
        <Titulo />
        <SubTitulo />
      </section>
    </div>
  );
}

>>>>>>> e3ee9fd1d27cdefc5f68b91101506dd06837a4b9
ReactDOM.createRoot(document.getElementById("root")).render(<Login />);

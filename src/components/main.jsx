import React from "react";
import ReactDOM from "react-dom/client";
function Titulo() {
  return <h1 className="form__titulo">Login</h1>;
}

function SubTitulo() {
  return <h2 className="form__texto">Boas Vindas! Faça seu Login.</h2>;
}
function Login() {
  return (
    <div className="container-login">
      <img
        src="../img/imagem-login.png"
        alt="uma mulher negra de cabelos crespos usando óculos e mexendo no computador, também há o logo da codeconnect"
      />
      <section>
        <Titulo />
        <SubTitulo />
      </section>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Login />);

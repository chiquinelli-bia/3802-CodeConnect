import React from "react";
import ReactDOM from "react-dom/client";
function Titulo() {
  return <h1 className="form__titulo">Login</h1>;
}

function SubTitulo() {
  return <h2 className="form__texto">Boas Vindas! Faça seu Login.</h2>;
}

ReactDOM.createRoot(document.getElementById("root")).render(<Titulo />);

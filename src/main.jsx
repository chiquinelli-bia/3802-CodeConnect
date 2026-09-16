import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./app.jsx";
import { ToastContainer } from "react-toastify";

import "./styles/autenticacao.css";
import { AuthProvider } from "./app/context/authContext.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ToastContainer />
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
);

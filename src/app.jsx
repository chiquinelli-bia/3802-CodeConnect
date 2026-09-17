import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Cadastro } from "./pages/cadastro/cadastro.jsx";
import { Login } from "./pages/login/login.jsx";
import { Feed } from "./pages/feed/Feed.jsx";
import { Publicar } from "./pages/publicar/Publicar.jsx";
import { ProtectedRoute } from "./components/protectedRoute";
import { useFocusResponsivo } from "./app/hooks/useFocusResponsivo.jsx";

export default function App() {
  useFocusResponsivo();
  return (
    <>
      <ToastContainer autoClose={3000} position="top-right" />
      <Routes>
        {/* Rotas Públicas */}
        <Route path="/" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />

        {/* Rotas Protegidas */}
        <Route
          path="/feed"
          element={
            <ProtectedRoute>
              <Feed />
            </ProtectedRoute>
          }
        />
        <Route
          path="/publicar"
          element={
            <ProtectedRoute>
              <Publicar />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

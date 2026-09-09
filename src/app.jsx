import { Routes, Route } from "react-router-dom";

import { Cadastro } from "./pages/cadastro/cadastro.jsx";
import { Login } from "./pages/login/login.jsx";
import { Feed } from "./pages/feed/Feed.jsx";
import { Publicar } from "./pages/publicar/Publicar.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Cadastro />} />
      <Route path="/login" element={<Login />} />
      <Route path="/feed" element={<Feed />} />
      <Route path="/publicar" element={<Publicar />} />
    </Routes>
  );
}

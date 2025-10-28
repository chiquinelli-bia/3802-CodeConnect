import React from "react";
import ReactDOM from "react-dom/client";
import Menu from "../../shared/menu/menu.jsx";
import Search from "./search/search.jsx";
import "./feed.css";
import Filtro from "./filtro/filtro.jsx";

function Feed() {
  return (
    <div className="container">
      <Menu />
      <div>
        <Search />
        <Filtro />
      </div>
    </div>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<Feed />);

import React from "react";
import ReactDOM from "react-dom/client";
import Menu from "../../shared/menu/menu.jsx";

function Feed() {
  return <Menu />;
}
ReactDOM.createRoot(document.getElementById("root")).render(<Feed />);

import { Link } from "react-router-dom";
import MenuItem from "./menuItem.jsx";
import "../../pages/publicar/styles.css";
import {
  logo,
  iconeLogin,
  iconeFeed,
  iconePublicar,
  iconeSobre,
} from "../../img/index.js";

export default function Menu() {
  const menuItens = [
    { to: "/", src: iconeLogin, label: "Autenticação" },
    {
      to: "/feed",
      src: iconeFeed,
      label: "Feed",
    },
    {
      to: "/publicar",
      src: iconePublicar,
      label: "Publicar",
    },
    {
      to: "#",
      src: iconeSobre,
      label: "Sobre nós",
      disabled: true,
      title: "Sobre Nós — em desenvolvimento",
    },
  ];

  return (
    <aside>
      <img src={logo} alt="logo do codeconnect" className="logo" />
      <nav>
        <ul className="lista-links">
          <li className="link-destaque">
            <Link to="/publicar">Publicar</Link>
          </li>
          {menuItens.map((item) => (
            <MenuItem key={item.label} {...item} />
          ))}
        </ul>
      </nav>
    </aside>
  );
}

import MenuList from "./menuList.jsx";
import "../../styles/styles.css";
import {
  logo,
  iconeLogin,
  iconeFeed,
  iconePerfil,
  iconeSobre,
} from "../../img/index.js";

export default function Menu() {
  const menuItens = [
    { href: "./login.html", src: iconeLogin, label: "Autenticação" },
    {
      href: "./feed.html",
      src: iconeFeed,
      label: "Feed",
    },
    {
      href: "#",
      src: iconePerfil,
      label: "Perfil",
      disabled: true,
      title: "Perfil — em desenvolvimento",
    },
    {
      href: "#",
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
        <li className="link-destaque">
          <a href="publicar.html">Publicar</a>
        </li>
        <MenuList items={menuItens}></MenuList>
      </nav>
    </aside>
  );
}

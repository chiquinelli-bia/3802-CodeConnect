import MenuList from "./menuList.jsx";
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
      href: "#",
      src: iconeFeed,
      label: "Feed",
      disabled: true,
      title: "Feed — em desenvolvimento",
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
          <a href="#">Publicar</a>
        </li>
        <MenuList items={menuItens}></MenuList>
      </nav>
    </aside>
  );
}

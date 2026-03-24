/** @jsxImportSource @emotion/react */
import { Link, useLocation } from "react-router-dom"; // 👈 useLocation 추가
import { MENU_ITEMS } from "../../constants/menu";
import logo_with_font from "../../../assets/logo_with_font.svg";
import * as s from "./styles";

export default function Header() {
  const location = useLocation();

  return (
    <header css={s.container}>
      <Link to="/" css={s.logo}>
        <img src={logo_with_font} alt="logo" />
      </Link>
      <nav css={s.nav}>
        {MENU_ITEMS.map((menu) => {
          const isActive = location.pathname === menu.path;

          return (
            <Link 
              key={menu.id} 
              to={menu.path} 
              css={s.navLink(isActive)}
            >
              {menu.name}
            </Link>
          )
        })}
      </nav>
    </header>
  )
}
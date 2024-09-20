import { useState } from "react";
import "./header.css";
import { CircleChevronUp, CircleX } from "lucide-react";
import I18n from "../change-language";
import HeaderItem, { headerItems } from "./item";

export default function Header() {
  const [toggleMenu, showToggleMenu] = useState(false);

  function showMenu() {
    showToggleMenu(!toggleMenu);
  }

  function closeMenu() {
    showToggleMenu(false);
  }

  return (
    <header className="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">
          Felipe André
        </a>
        <div className={toggleMenu ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            {headerItems.map((item, index) => (
              <HeaderItem key={index} {...item} />
            ))}
          </ul>
          <I18n />

          <CircleX size={18} onClick={closeMenu} className="nav__close" />
        </div>
        <div className="nav__toggle" onClick={showMenu}>
          <CircleChevronUp size={18} />
        </div>
      </nav>
    </header>
  );
}

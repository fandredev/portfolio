import { useState } from "react";

import "./header.css";
import { CircleChevronUp, CircleX } from "lucide-react";

import useNameContext from "hooks/use-name-context";

import I18n from "../change-language";
import HeaderItem, { headerItems } from "./item";

export default function Header() {
  const [toggleMenu, showToggleMenu] = useState(false);
  const { name } = useNameContext();

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
          {name}
        </a>
        <div
          role="menu"
          className={toggleMenu ? "nav__menu show-menu" : "nav__menu"}
        >
          <ul className="nav__list grid">
            {headerItems.map((item, index) => (
              <HeaderItem key={index} {...item} />
            ))}
          </ul>
          <I18n />

          <CircleX
            size={18}
            onClick={closeMenu}
            className="nav__close"
            role="button"
            data-testid="close-menu"
          />
        </div>
        <div className="nav__toggle" onClick={showMenu} data-testid="show-menu">
          <CircleChevronUp size={18} />
        </div>
      </nav>
    </header>
  );
}

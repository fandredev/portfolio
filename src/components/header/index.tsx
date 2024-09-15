import { useState } from 'react';
import './header.css';

interface HeaderItemProps {
  href: string;
  icon: string;
  text: string;
}

const headerItems: HeaderItemProps[] = [
  {
    href: '#home',
    icon: 'uil uil-estate',
    text: 'Inicio',
  },
  {
    href: '#about',
    icon: 'uil uil-user',
    text: 'Sobre',
  },
  {
    href: '#skills',
    icon: 'uil uil-file-alt',
    text: 'Skills',
  },
  {
    href: '#services',
    icon: 'uil uil-briefcase-alt',
    text: 'Serviços',
  },
  {
    href: 'portfolio',
    icon: 'uil uil-scenery',
    text: 'Portfolio',
  },
  {
    href: '#contact',
    icon: 'uil uil-message',
    text: 'Contate-me',
  },
];

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
        <div className={toggleMenu ? 'nav__menu show-menu' : 'nav__menu'}>
          <ul className="nav__list grid">
            {headerItems.map((item, index) => (
              <HeaderItem key={index} {...item} />
            ))}
          </ul>

          <i className="uil uil-times nav__close" onClick={closeMenu}></i>
        </div>
        <div className="nav__toggle" onClick={showMenu}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
}

function HeaderItem({ href, icon, text }: HeaderItemProps) {
  return (
    <li className="nav__item">
      <a href={href} className="nav__link">
        <i
          className={`
          ${icon} nav__icon
          `}
        ></i>
        {text}
      </a>
    </li>
  );
}

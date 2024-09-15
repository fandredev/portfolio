import { ReactNode, useState } from 'react';
import './header.css';
import {
  BookOpenText,
  Briefcase,
  BriefcaseBusiness,
  CircleChevronUp,
  CircleX,
  Contact,
  House,
  User,
} from 'lucide-react';

interface HeaderItemProps {
  href: string;
  icon: ReactNode;
  text: string;
}

const headerItems: HeaderItemProps[] = [
  {
    href: '#home',
    icon: <House size={16} color={'#000'} />,
    text: 'Inicio',
  },
  {
    href: '#about',
    icon: <User size={16} color={'#000'} />,
    text: 'Sobre',
  },
  {
    href: '#skills',
    icon: <BookOpenText size={16} color={'#000'} />,
    text: 'Skills',
  },
  {
    href: '#services',
    icon: <BriefcaseBusiness size={16} color={'#000'} />,
    text: 'Serviços',
  },
  {
    href: '#qualification',
    icon: <Briefcase size={16} color={'#000'} />,
    text: 'Qualificações',
  },
  {
    href: '#contact',
    icon: <Contact size={16} color={'#000'} />,
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

          <CircleX size={18} onClick={closeMenu} className="nav__close" />
        </div>
        <div className="nav__toggle" onClick={showMenu}>
          <CircleChevronUp size={18} />
        </div>
      </nav>
    </header>
  );
}

function HeaderItem({ href, icon, text }: HeaderItemProps) {
  return (
    <li className="nav__item">
      <a href={href} className="nav__link">
        <div className="nav__icon">{icon}</div>
        {text}
      </a>
    </li>
  );
}

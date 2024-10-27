import { ReactNode } from "react";

import {
  BookOpenText,
  Briefcase,
  BriefcaseBusiness,
  Contact,
  House,
  User,
} from "lucide-react";
import Translator from "../../hooks/use-translator";
import { Link } from "react-router-dom";

interface HeaderItemProps {
  href: string;
  icon: ReactNode;
  text: ReactNode;
}

export const headerItems: HeaderItemProps[] = [
  {
    href: "#home",
    icon: <House size={16} color={"#000"} />,
    text: <Translator path="home.beginning" />,
  },
  {
    href: "#about",
    icon: <User size={16} color={"#000"} />,
    text: <Translator path="home.about" />,
  },
  {
    href: "#skills",
    icon: <BookOpenText size={16} color={"#000"} />,
    text: <Translator path="home.skills" />,
  },
  {
    href: "#portfolio",
    icon: <BriefcaseBusiness size={16} color={"#000"} />,
    text: "Pórtfolio",
  },
  {
    href: "#qualification",
    icon: <Briefcase size={16} color={"#000"} />,
    text: <Translator path="home.qualifications" />,
  },
  {
    href: "#contact",
    icon: <Contact size={16} color={"#000"} />,
    text: <Translator path="home.contacts" />,
  },
];

export default function HeaderItem({ href, icon, text }: HeaderItemProps) {
  return (
    <>
      <li className="nav__item">
        <a href={href} className="nav__link">
          <div className="nav__icon">{icon}</div>
          {text}
        </a>
      </li>
    </>
  );
}

import { ReactNode } from "react";

import {
  BookCheck,
  BookOpenText,
  Briefcase,
  BriefcaseBusiness,
  Contact,
  House,
  User,
} from "lucide-react";
import Translator from "../../hooks/use-translator";

interface HeaderItemProps {
  href: string;
  icon: ReactNode;
  text: ReactNode;

  openNewTab?: boolean;
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
  {
    href: "https://portfolio-backend-jko9.onrender.com/api/v1",
    icon: <Contact size={16} color={"#000"} />,
    text: <Translator path="home.API" />,
    openNewTab: true,
  },
  {
    href: "https://components-felipe-andre.vercel.app",
    icon: <BookCheck size={16} color={"#000"} />,
    text: <Translator path="home.ui" />,
    openNewTab: true,
  },
];

export default function HeaderItem({
  href,
  icon,
  text,
  openNewTab,
}: HeaderItemProps) {
  return (
    <>
      <li className="nav__item">
        <a
          href={href}
          className="nav__link"
          target={`${openNewTab ? "_blank" : "_self"}`}
        >
          <div className="nav__icon">{icon}</div>
          {text}
        </a>
      </li>
    </>
  );
}

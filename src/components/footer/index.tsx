import { Github, Linkedin } from "lucide-react";
import { useTranslation } from "react-i18next";

import "./footer.css";
import { FaWhatsapp, FaYoutube } from "react-icons/fa";
import useNameContext from "../../hooks/use-name-context";

const date = new Date().getFullYear();

export default function Footer() {
  const { t } = useTranslation();
  const { name } = useNameContext();

  return (
    <footer className="footer">
      <div className="footer__container ">
        <ul className="footer__list footer__social">
          <li>
            <a
              href="https://github.com/fandredev/"
              className="home__social-icon"
              aria-label={t("aria_labels.github_icon")}
              target="_blank"
            >
              <Github size={20} />
            </a>
          </li>
          <li>
            <a
              href="https://api.whatsapp.com/send?phone=11973813705&text=Olá%20Felipe%20André,%20gostaria%20de%20falar%20com%20você."
              className="home__social-icon"
              target="_blank"
              aria-label={t("aria_labels.whatsapp_icon")}
            >
              <FaWhatsapp size={20} className="contact__card-icon" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/devfandre/"
              className="home__social-icon"
              target="_blank"
              aria-label={t("aria_labels.linkedin_icon")}
            >
              <Linkedin size={20} strokeWidth={1.5} />
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/@thistate"
              className="home__social-icon"
              aria-label={t("aria_labels.youtube_icon")}
              target="_blank"
            >
              <FaYoutube size={20} strokeWidth={1.5} />
            </a>
          </li>
        </ul>
        <span className="footer__copy" data-testid="footer-text">
          &copy; {date} - {name}
        </span>
      </div>
    </footer>
  );
}

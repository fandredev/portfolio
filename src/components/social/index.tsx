import { Github, Linkedin } from "lucide-react";
import { useTranslation } from "react-i18next";
import { FaWhatsapp } from "react-icons/fa";

export default function Social() {
  const { t } = useTranslation();

  return (
    <div className="home__social">
      <a
        href="https://github.com/fandredev/"
        aria-label={t("aria_labels.github_icon")}
        target="_blank"
      >
        <Github size={20} />
      </a>
      <a
        href="https://api.whatsapp.com/send?phone=11973813705&text=Olá%20Felipe%20André,%20gostaria%20de%20falar%20com%20você."
        className="home__social-icon"
        aria-label={t("aria_labels.whatsapp_icon")}
        target="_blank"
      >
        <FaWhatsapp size={20} className="contact__card-icon" />
      </a>
      <a
        href="https://www.linkedin.com/in/devfandre/"
        className="home__social-icon"
        aria-label={t("aria_labels.linkedin_icon")}
        target="_blank"
      >
        <Linkedin size={20} strokeWidth={1.5} />
      </a>
    </div>
  );
}

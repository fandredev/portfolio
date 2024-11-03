import useNameContext from "hooks/use-name-context";
import Translator from "hooks/use-translator";
import { useTranslation } from "react-i18next";
import { FaWhatsapp } from "react-icons/fa";

import "./description-with-me.css";

export default function DescriptionWithMe() {
  const { name } = useNameContext();

  const { t } = useTranslation();
  return (
    <div className="home__data">
      <h1 className="home__title">{name}</h1>
      <h2 aria-label={t("aria_labels.whatsapp_icon")} className="home_subtitle">
        Full Stack Developer
      </h2>
      <p className="home__description">
        <Translator path="home.introduction_text" />
      </p>

      <a
        role="button"
        href="https://api.whatsapp.com/send?phone=11973813705&text=Olá%20Felipe%20André,%20gostaria%20de%20falar%20com%20você."
        target="_blank"
        className="button button--flex say-hello"
      >
        <Translator path="home.say_hello_whatsapp_button" />
        <FaWhatsapp />
      </a>
    </div>
  );
}

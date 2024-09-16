import { FaWhatsapp } from 'react-icons/fa';

import './description-with-me.css';
import Translator from '../../hooks/use-translator';

export default function DescriptionWithMe() {
  return (
    <div className="home__data">
      <h1 className="home__title">Felipe André</h1>
      <h3 className="home_subtitle">Full Stack Developer</h3>
      <p className="home__description">
        <Translator path="home.introduction_text" />
      </p>

      <a
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

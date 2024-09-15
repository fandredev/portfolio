import { FaWhatsapp } from 'react-icons/fa';

import './description-with-me.css';

export default function DescriptionWithMe() {
  return (
    <div className="home__data">
      <h1 className="home__title">Felipe André</h1>
      <h3 className="home_subtitle">Full Stack Developer</h3>
      <p className="home__description">
        Olá! Meu nome é Felipe André, sou um desenvolvedor Full Stack. Sou
        apaixonado por tecnologia e estou sempre em busca de novos desafios.
      </p>
      <a
        href="https://api.whatsapp.com/send?phone=551397813705&text=Olá%20Felipe%20André,%20gostaria%20de%20falar%20com%20você."
        target="_blank"
        className="button button--flex say-hello"
      >
        Diga oi
        <FaWhatsapp />
      </a>
    </div>
  );
}

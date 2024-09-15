import { ScrollText } from 'lucide-react';
import Me from '../../assets/me.jpeg';
import CV from '../../assets/curriculum-vitae.pdf';
import Informations from '../informations';

import './about.css';

export default function About() {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">Sobre mim</h2>
      <span className="section__subtitle">Uma breve introdução</span>

      <div className="about__container container grid">
        <img src={Me} alt="Felipe André" className="about__img" />
        <div className="about__data">
          <Informations />

          <p className="about__description">
            Meu nome é Felipe André e tenho 21 anos e moro na região oeste de
            São Paulo. Sou estudante de tecnologia desde os 17 anos e sou grato
            pelo progresso que venho aprendendo com a web e com esse mundo vasto
            de ser uma pessoa programadora. Atualmente estou trabalhando como
            Programador Pleno em uma startup de gestão de contratos e processos
            para advogados e hoje trabalho com as tecnologias de Django usando
            Python e React + Typescript.
          </p>

          <a download href={CV} className="button button--flex curriculum">
            Baixar currículo
            <ScrollText />
          </a>
        </div>
      </div>
    </section>
  );
}

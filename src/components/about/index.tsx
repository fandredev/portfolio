import { ScrollText } from "lucide-react";

import CV from "assets/curriculum-vitae.pdf";
import Me from "assets/me/me-about-image.webp";
import Translator from "hooks/use-translator";

import Informations from "../informations";

import "./about.css";

export default function About() {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">
        <Translator path="home.about_me_title" />
      </h2>
      <span className="section__subtitle">
        <Translator path="home.an_basic_introduction" />
      </span>

      <div className="about__container container grid">
        <img
          src={Me}
          alt="Felipe André"
          className="about__img"
          width={800}
          height={800}
          loading="lazy"
        />
        <div className="about__data">
          <Informations />

          <p className="about__description">
            <Translator path="home.description_text" />
          </p>

          <a download href={CV} className="button button--flex curriculum">
            <Translator path="home.download_curriculum" />
            <ScrollText />
          </a>
        </div>
      </div>
    </section>
  );
}

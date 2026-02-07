import "./home.css";
import { Link } from "react-router-dom";

import Translator from "hooks/use-translator";

import heroImage from "../../assets/me/me-home-image.webp";
import DescriptionWithMe from "../description-with-me";
import ScrollDown from "../scrolldown";
import Social from "../social";

export default function Home() {
  return (
    <section className="home section" id="home">
      <div className="languages-last-seven-days" role="banner">
        <Translator path="banner.see_last_seven_languages" />{" "}
        <Link className="link-languages-last-seven-days" to="/stats">
          <Translator path="banner.here" />
        </Link>
      </div>

      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />
          <div className="home__img">
            <img
              src={heroImage}
              alt="Felipe André - Full Stack Developer"
              fetchPriority="high"
              width="300"
              height="300"
            />
          </div>
          <DescriptionWithMe />
        </div>
        <ScrollDown />
      </div>
    </section>
  );
}

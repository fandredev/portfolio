import "./home.css";
import Translator from "hooks/use-translator";
import { Link } from "react-router-dom";

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
          <div className="home__img"></div>
          <DescriptionWithMe />
        </div>
        <ScrollDown />
      </div>
    </section>
  );
}

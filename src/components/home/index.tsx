import "./home.css";

import DescriptionWithMe from "../description-with-me";
import ScrollDown from "../scrolldown";
import Social from "../social";

export default function Home() {
  return (
    <section className="home section" id="home" role="banner">
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

import './home.css';

import Social from '../social';
import ScrollDown from '../scrolldown';
import DescriptionWithMe from '../description-with-me';

export default function Home() {
  return (
    <section className="home section" id="home">
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

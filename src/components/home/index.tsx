import './home.css';

import Social from '../social';
import Informations from '../informations';
import ScrollDown from '../scrolldown';

export default function Home() {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />
          <div className="home__img"></div>
          <Informations />
        </div>
        <ScrollDown />
      </div>
    </section>
  );
}

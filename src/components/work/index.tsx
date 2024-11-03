import "./work.css";
import Translator from "hooks/use-translator";

import Works from "./works";

export default function Work() {
  return (
    <section className="work section" id="portfolio">
      <h2 className="section__title">Portfólio</h2>
      <span className="section__subtitle">
        <Translator path="portfolio.my_projects_personally" />
      </span>

      <Works />
    </section>
  );
}

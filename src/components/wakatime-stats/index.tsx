import "./stats.css";

import { CircleArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

import Translator from "hooks/use-translator";
import Stats from "pages/stats";


export default function WakatimeStats() {
  return (
    <>
      <div className="container-stats">
        <Link to="/" className="container-back-porfolio-page">
          <CircleArrowLeft />
          <span>
            {" "}
            <Translator path="stats.back_button" />
          </span>
        </Link>
        <h2 className="section__title">
          {" "}
          <Translator path="stats.languages" />
        </h2>
        <span className="section__subtitle">
          <Translator path="stats.my_seven_last_languages_more_used" />
        </span>
        <main>
          <Stats />
        </main>
      </div>
    </>
  );
}

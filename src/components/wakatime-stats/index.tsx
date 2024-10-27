import "./stats.css";

import { CircleArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

import Stats from "../../pages/stats";

export default function WakatimeStats() {
  return (
    <>
      <div className="container-stats">
        <Link to="/" className="container-back-porfolio-page">
          <CircleArrowLeft />
          <span>Voltar</span>
        </Link>
        <h2 className="section__title">Linguagens</h2>
        <span className="section__subtitle">
          Minhas linguagens de programação mais usadas nos últimos 7 dias
        </span>
        <main>
          <Stats />
        </main>
      </div>
    </>
  );
}

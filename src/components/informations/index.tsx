export default function Informations() {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="bx bx-award about__icon"></i>
        <h3 className="about__title">
          <span className="about__subtitle">4 anos como desenvolvedor</span>
        </h3>
      </div>

      <div className="about__box">
        <i className="bx bx-briefcase-alt about__icon"></i>
        <h3 className="about__title">
          <span className="about__subtitle">+16 projetos concluídos</span>
        </h3>
      </div>

      <div className="about__box">
        <i className="bx bx-support about__icon"></i>
        <h3 className="about__title">
          <span className="about__subtitle">Online e presencial</span>
        </h3>
      </div>
    </div>
  );
}

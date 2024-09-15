import Backend from './Backend';
import Frontend from './Frontend';
import './skills.css';

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My nível técnico em programação</span>
      <div className="skills__container container grid">
        <Frontend />
        <Backend />
      </div>
    </section>
  );
}

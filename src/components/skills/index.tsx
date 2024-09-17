import { ReactNode } from 'react';
import Backend from './Backend';
import Frontend from './Frontend';
import './skills.css';
import Tests from './Tests';
import Tools from './Tools';
import Translator from '../../hooks/use-translator';

export interface SkillsProps<T> {
  name: T;
  level: string | ReactNode;
}

export default function Skills() {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">
        <Translator path="home.skills_subtitle" />
      </span>
      <div className="skills__container container grid">
        <Frontend />
        <Backend />
        <Tests />
        <Tools />
      </div>
    </section>
  );
}

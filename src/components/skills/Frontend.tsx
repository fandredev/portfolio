import { ReactNode } from 'react';
import { BadgeCheck } from 'lucide-react';
import { SkillsProps } from '.';
import Translator from '../../hooks/use-translator';

type FrontendNameSkills =
  | 'HTML'
  | 'CSS'
  | 'Sass'
  | 'Typescript'
  | 'Angular 9'
  | 'Bootstrap'
  | 'Git'
  | 'React'
  | 'Redux';

interface FrontendSkills extends SkillsProps<FrontendNameSkills> {
  name: FrontendNameSkills;
  level: ReactNode;
}

const tools: FrontendSkills[] = [
  { name: 'HTML', level: <Translator path="tools.four_years_of_use" /> },
  { name: 'CSS', level: <Translator path="tools.four_years_of_use" /> },
  { name: 'Sass', level: <Translator path="tools.two_years_of_use" /> },
  { name: 'Bootstrap', level: <Translator path="tools.two_years_of_use" /> },
  { name: 'Typescript', level: <Translator path="tools.two_years_of_use" /> },
  { name: 'Angular 9', level: <Translator path="tools.two_years_of_use" /> },
  { name: 'React', level: <Translator path="tools.two_years_of_use" /> },
  { name: 'Redux', level: <Translator path="tools.one_year_of_use" /> },
];

export default function Frontend() {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Front-end developer</h3>
      <div className="skills__box">
        <div className="skills__group">
          {tools.map(({ name, level }) => (
            <div className="skills__data" key={name}>
              <BadgeCheck size={18} color="#000" />

              <div>
                <h3 className="skills__name">{name}</h3>
                <span className="skills__level">{level}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import { BadgeCheck } from 'lucide-react';
import { SkillsProps } from '.';

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
  level: string;
}

const tools: FrontendSkills[] = [
  { name: 'HTML', level: '4 anos de uso' },
  { name: 'CSS', level: '4 anos de uso' },
  { name: 'Sass', level: '3 anos de uso' },
  { name: 'Bootstrap', level: '3 anos de uso' },
  { name: 'Typescript', level: '2 anos de uso' },
  { name: 'Angular 9', level: '3 anos de uso' },
  { name: 'React', level: '3 anos de uso' },
  { name: 'Redux', level: '1 ano de uso' },
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

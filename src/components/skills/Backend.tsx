import { BadgeCheck } from 'lucide-react';
import { SkillsProps } from '.';
import Translator from '../../hooks/use-translator';
import { ReactNode } from 'react';

type BackendNameSkills = 'Python' | 'Django' | 'Postgres' | 'Vercel';

interface BackendSkills extends SkillsProps<BackendNameSkills> {
  name: BackendNameSkills;
  level: ReactNode;
}

const tools: BackendSkills[] = [
  { name: 'Python', level: <Translator path="tools.three_years_of_use" /> },
  { name: 'Django', level: <Translator path="tools.three_years_of_use" /> },
  { name: 'Postgres', level: <Translator path="tools.two_years_of_use" /> },
  { name: 'Vercel', level: <Translator path="tools.seven_months_of_use" /> },
];

export default function Backend() {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Back-end developer</h3>
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

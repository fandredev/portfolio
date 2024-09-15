import { BadgeCheck } from 'lucide-react';
import { SkillsProps } from '.';

type BackendNameSkills = 'Python' | 'Django' | 'Postgres' | 'Vercel';

interface BackendSkills extends SkillsProps<BackendNameSkills> {
  name: BackendNameSkills;
  level: string;
}

const tools: BackendSkills[] = [
  { name: 'Python', level: '3 anos' },
  { name: 'Django', level: '3 anos' },
  { name: 'Postgres', level: '2 anos' },
  { name: 'Vercel', level: '7 meses' },
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

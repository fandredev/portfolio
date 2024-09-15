import { BookOpenText } from 'lucide-react';
import { SkillsProps } from '.';

type ToolsSkills = 'pytest' | 'unittest' | 'cypress' | 'jest' | 'vitest';

interface Tools extends SkillsProps<ToolsSkills> {
  name: ToolsSkills;
  level: string;
}

const tools: Tools[] = [
  { name: 'pytest', level: '2 anos de uso' },
  { name: 'unittest', level: '2 anos de uso' },
  { name: 'cypress', level: '1 ano de uso' },
  { name: 'jest', level: '2 anos de uso' },
  { name: 'vitest', level: '1 ano de uso' },
];

export default function Tests() {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Testes</h3>
      <div className="skills__box">
        <div className="skills__group">
          {tools.map(({ name, level }) => (
            <div className="skills__data" key={name}>
              <BookOpenText strokeWidth={1} size={18} />

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

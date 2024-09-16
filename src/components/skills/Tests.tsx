import { ReactNode } from 'react';
import { BookOpenText } from 'lucide-react';
import { SkillsProps } from '.';
import Translator from '../../hooks/use-translator';

type ToolsSkills = 'pytest' | 'unittest' | 'cypress' | 'jest' | 'vitest';

interface Tools extends SkillsProps<ToolsSkills> {
  name: ToolsSkills;
  level: ReactNode;
}

const tools: Tools[] = [
  { name: 'pytest', level: <Translator path="tools.two_years_of_use" /> },
  { name: 'unittest', level: <Translator path="tools.two_years_of_use" /> },
  { name: 'cypress', level: <Translator path="tools.one_year_of_use" /> },
  { name: 'jest', level: <Translator path="tools.two_years_of_use" /> },
  { name: 'vitest', level: <Translator path="tools.one_year_of_use" /> },
];

export default function Tests() {
  return (
    <div className="skills__content">
      <h3 className="skills__title">
        <Translator path="tests.title" />
      </h3>
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

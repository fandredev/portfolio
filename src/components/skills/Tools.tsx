type ToolsSkillsName =
  | 'npm & yarn'
  | 'postman'
  | 'pgAdmin4'
  | 'Docker'
  | 'vscode'
  | 'pipx'
  | 'git';

interface ToolsSkills {
  name: ToolsSkillsName;
}

const tools: ToolsSkills[] = [
  {
    name: 'npm & yarn',
  },
  {
    name: 'postman',
  },
  {
    name: 'pgAdmin4',
  },
  {
    name: 'Docker',
  },
  {
    name: 'vscode',
  },
  {
    name: 'pipx',
  },
  {
    name: 'git',
  },
];

export default function Tools() {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Ferramentas do dia a dia</h3>
      <div className="skills__box">
        <div className="skills__group">
          {tools.map(({ name }) => (
            <div className="skills__data" key={name}>
              <div>
                <h3 className="skills__name">• {name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

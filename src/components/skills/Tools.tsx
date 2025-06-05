import Translator from "hooks/use-translator";

type ToolsSkillsName =
  | "npm & yarn"
  | "postman"
  | "dbeaver"
  | "docker"
  | "vscode & jupyter"
  | "sklearn"
  | "git"
  | "pandas"
  | "numpy"
  | "vite";

interface ToolsSkills {
  name: ToolsSkillsName;
}

const tools: ToolsSkills[] = [
  {
    name: "npm & yarn",
  },
  {
    name: "postman",
  },
  {
    name: "dbeaver",
  },
  {
    name: "docker",
  },
  {
    name: "vscode & jupyter",
  },
  {
    name: "sklearn",
  },
  {
    name: "vite",
  },
  {
    name: "git",
  },
  {
    name: "numpy",
  },
  {
    name: "pandas",
  },
];

export default function Tools() {
  return (
    <div className="skills__content">
      <h3 className="skills__title">
        <Translator path="tools.tools_day_by_day" />
      </h3>
      <div className="skills__box">
        <div className="skills__group" role="list">
          {tools.map(({ name }) => (
            <div className="skills__data" key={name} role="listitem">
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

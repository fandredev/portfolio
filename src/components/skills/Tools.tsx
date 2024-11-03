import Translator from "hooks/use-translator";

type ToolsSkillsName =
  | "npm & yarn"
  | "postman"
  | "pgAdmin4"
  | "docker"
  | "vscode"
  | "pipx"
  | "git"
  | "eslint"
  | "black"
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
    name: "pgAdmin4",
  },
  {
    name: "docker",
  },
  {
    name: "vscode",
  },
  {
    name: "pipx",
  },
  {
    name: "vite",
  },
  {
    name: "git",
  },
  {
    name: "eslint",
  },
  {
    name: "black",
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

import { BookOpenText } from "lucide-react";
import { toolsTest } from "./data/tests-data";

import Translator from "../../hooks/use-translator";

export default function Tests() {
  return (
    <div className="skills__content">
      <h3 className="skills__title">
        <Translator path="tests.title" />
      </h3>
      <div className="skills__box">
        <div className="skills__group" role="list">
          {toolsTest.map(({ name, level }) => (
            <div className="skills__data" key={name} role="listitem">
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

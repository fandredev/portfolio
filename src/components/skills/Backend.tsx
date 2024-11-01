import { BadgeCheck } from "lucide-react";

import { toolsBackend } from "./data/back-end-data";

export default function Backend() {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Back-end developer</h3>
      <div className="skills__box">
        <div className="skills__group" role="list">
          {toolsBackend.map(({ name, level }) => (
            <div className="skills__data" key={name} role="listitem">
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

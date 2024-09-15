type BackendNameSkills = 'Python' | 'Django' | 'Postgresql' | 'Vercel';

interface BackendSkills {
  name: BackendNameSkills;
  level: string;
}

const languagesAndTools: BackendSkills[] = [
  { name: 'Python', level: 'Avançado' },
  { name: 'Django', level: 'Intermediário' },
  { name: 'Postgresql', level: 'Intermediário' },
  { name: 'Vercel', level: 'Intermediário' },
];

export default function Backend() {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Back-end developer</h3>
      <div className="skills__box">
        <div className="skills__group">
          {languagesAndTools.map((skill) => (
            <div className="skills__data" key={skill.name}>
              <i className="bx bx-badge-check"></i>

              <div>
                <h3 className="skills__name">{skill.name}</h3>
                <span className="skills__level">{skill.level}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

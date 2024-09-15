type FrontendNameSkills =
  | 'HTML'
  | 'CSS'
  | 'Typescript'
  | 'Bootstrap'
  | 'Git'
  | 'React';

interface FrontendSkills {
  name: FrontendNameSkills;
  level: string;
}

const languagesAndTools: FrontendSkills[] = [
  { name: 'HTML', level: 'Avançado' },
  { name: 'CSS', level: 'Intermediário' },
  { name: 'Typescript', level: 'Intermediário' },
  { name: 'Bootstrap', level: 'Intermediário' },
  { name: 'Git', level: 'Intermediário' },
  { name: 'React', level: 'Intermediário' },
];

export default function Frontend() {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Front-end developer</h3>
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

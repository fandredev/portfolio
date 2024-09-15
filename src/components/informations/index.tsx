interface InformationBoxProps {
  icon: string;
  title: string;
}

const informations: InformationBoxProps[] = [
  {
    icon: 'bx bx-award',
    title: '4 anos como desenvolvedor',
  },
  {
    icon: 'bx bx-briefcase-alt',
    title: '+16 projetos concluídos',
  },
  {
    icon: 'bx bx-support',
    title: 'Online e presencial',
  },
];

export default function Informations() {
  return (
    <div className="about__info grid">
      {informations.map((info) => (
        <InformationBox key={info.title} {...info} />
      ))}
    </div>
  );
}

function InformationBox({ icon, title }: InformationBoxProps) {
  return (
    <div className="about__box">
      <i
        className={`
        ${icon} about__icon
        `}
      ></i>
      <h3 className="about__title">
        <span className="about__subtitle">{title}</span>
      </h3>
    </div>
  );
}

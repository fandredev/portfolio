import { Award, BriefcaseBusiness, Headset } from 'lucide-react';
import { ReactNode } from 'react';

interface InformationBoxProps {
  icon: ReactNode;
  title: string;
}

const informations: InformationBoxProps[] = [
  {
    icon: <Award size={18} color="#000" />,
    title: '4 anos como desenvolvedor',
  },
  {
    icon: <BriefcaseBusiness size={18} color="#000" />,
    title: '+16 projetos concluídos',
  },
  {
    icon: <Headset size={18} color="#000" />,
    title: 'Remoto e presencial',
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
      {icon}
      <h3 className="about__title">
        <span className="about__subtitle">{title}</span>
      </h3>
    </div>
  );
}

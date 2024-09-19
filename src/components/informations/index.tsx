import { ReactNode } from "react";
import { Award, BriefcaseBusiness, Headset } from "lucide-react";
import Translator from "../../hooks/use-translator";

interface InformationBoxProps {
  icon: ReactNode;
  text: ReactNode;
}

const informations: InformationBoxProps[] = [
  {
    icon: <Award size={18} color="#000" />,
    text: <Translator path="home.years_as_developer" />,
  },
  {
    icon: <BriefcaseBusiness size={18} color="#000" />,
    text: <Translator path="home.quantity_projects_completed" />,
  },
  {
    icon: <Headset size={18} color="#000" />,
    text: <Translator path="home.how_i_work" />,
  },
];

export default function Informations() {
  return (
    <div className="about__info grid">
      {informations.map((info, index) => (
        <InformationBox key={index} {...info} index={index} />
      ))}
    </div>
  );
}

function InformationBox({
  icon,
  text,
  index,
}: InformationBoxProps & { index: number }) {
  return (
    <div className="about__box" data-testid={`information-item-card-${index}`}>
      {icon}
      <h3 className="about__title">
        <span className="about__subtitle">{text}</span>
      </h3>
    </div>
  );
}

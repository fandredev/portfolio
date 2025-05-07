import { Award, BriefcaseBusiness, Headset } from "lucide-react";

import Translator from "hooks/use-translator";

import InformationBox, { InformationBoxProps } from "./box";

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

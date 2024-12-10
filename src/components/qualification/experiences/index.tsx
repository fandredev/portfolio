import { ReactNode } from "react";

import Translator from "hooks/use-translator";

import QualificationExperiencesItem from "./experience-item";

type QualificationExperienceCompanyName =
  | "Luby"
  | "4you2 idiomas"
  | "Zapsign"
  | "Nan Systems"
  | "NTConsult";

export interface QualificationExperiencesProps {
  company: QualificationExperienceCompanyName;
  charger: ReactNode;
  time: string;
}

export const qualificationExperiences: QualificationExperiencesProps[] = [
  {
    company: "Luby",
    charger: <Translator path="experiences.junior_developer" />,
    time: "Ago 2019 - Jul 2020",
  },
  {
    company: "4you2 idiomas",
    charger: <Translator path="experiences.junior_developer" />,
    time: "Set 2020 - Dez 2020",
  },
  {
    company: "Zapsign",
    charger: <Translator path="experiences.pleno_full_stack_developer" />,
    time: "Dez 2020 - Jan 2024",
  },
  {
    company: "Nan Systems",
    charger: <Translator path="experiences.pleno_full_stack_developer" />,
    time: `Fev 2024 - Dez 2024`,
  },
  {
    company: "NTConsult",
    charger: <Translator path="experiences.pleno_full_stack_developer" />,
    time: `Dez 2024 - atual`,
  },
];

const qualificationExperiencesReverse = [...qualificationExperiences].reverse();

export default function QualificationExperience() {
  return (
    <div className="qualification__content" role="list">
      {qualificationExperiencesReverse.map((experience, index) => (
        <QualificationExperiencesItem key={index} {...experience} />
      ))}
    </div>
  );
}

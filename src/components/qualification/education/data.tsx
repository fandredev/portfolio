import { ReactNode } from "react";

import Translator from "../../../hooks/use-translator";

export interface QualificationEducationProps {
  course: ReactNode;
  locality: string;
  time: string;
}

export const qualificationEducations: QualificationEducationProps[] = [
  {
    course: (
      <Translator path="education.assistente_de_desenvolvimento_de_aplicativos_computacionais" />
    ),
    locality: "Senac Lapa Tito - SP",
    time: "2019 - 2020",
  },
  {
    course: (
      <Translator path="education.assistente_de_operacao_de_redes_de_computadores" />
    ),
    locality: "Senac Lapa Tito - SP",
    time: "2018 - 2019",
  },
];

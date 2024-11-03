import { ReactNode } from "react";

import Translator from "hooks/use-translator";

import { SkillsProps } from "..";

type BackendNameSkills = "Python" | "Django" | "Postgres" | "NestJS" | "NodeJS";

interface BackendSkills extends SkillsProps<BackendNameSkills> {
  name: BackendNameSkills;
  level: ReactNode;
}

export const toolsBackend: BackendSkills[] = [
  { name: "Python", level: <Translator path="tools.three_years_of_use" /> },
  { name: "Django", level: <Translator path="tools.three_years_of_use" /> },
  { name: "Postgres", level: <Translator path="tools.two_years_of_use" /> },
  { name: "NestJS", level: <Translator path="tools.three_months_of_use" /> },
  { name: "NodeJS", level: <Translator path="tools.two_years_of_use" /> },
];

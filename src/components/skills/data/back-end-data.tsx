import { ReactNode } from "react";
import { SkillsProps } from "..";
import Translator from "../../../hooks/use-translator";

type BackendNameSkills = "Python" | "Django" | "Postgres" | "Vercel";

interface BackendSkills extends SkillsProps<BackendNameSkills> {
  name: BackendNameSkills;
  level: ReactNode;
}

export const toolsBackend: BackendSkills[] = [
  { name: "Python", level: <Translator path="tools.three_years_of_use" /> },
  { name: "Django", level: <Translator path="tools.three_years_of_use" /> },
  { name: "Postgres", level: <Translator path="tools.two_years_of_use" /> },
  { name: "Vercel", level: <Translator path="tools.seven_months_of_use" /> },
];

import { ReactNode } from "react";
import { SkillsProps } from "..";
import Translator from "../../../hooks/use-translator";

type FrontendNameSkills =
  | "HTML"
  | "CSS"
  | "Sass"
  | "Typescript"
  | "Angular 9"
  | "Bootstrap"
  | "Git"
  | "React"
  | "Redux";

export interface FrontendSkills extends SkillsProps<FrontendNameSkills> {
  name: FrontendNameSkills;
  level: ReactNode;
}
export const toolsFrontend: FrontendSkills[] = [
  { name: "HTML", level: <Translator path="tools.five_years_of_use" /> },
  { name: "CSS", level: <Translator path="tools.five_years_of_use" /> },
  { name: "Sass", level: <Translator path="tools.four_years_of_use" /> },
  { name: "Bootstrap", level: <Translator path="tools.four_years_of_use" /> },
  { name: "Typescript", level: <Translator path="tools.four_years_of_use" /> },
  { name: "Angular 9", level: <Translator path="tools.three_years_of_use" /> },
  { name: "React", level: <Translator path="tools.four_years_of_use" /> },
  { name: "Redux", level: <Translator path="tools.three_years_of_use" /> },
];

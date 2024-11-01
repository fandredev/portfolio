import { ReactNode } from "react";

import { SkillsProps } from "..";
import Translator from "../../../hooks/use-translator";

type ToolsSkills = "pytest" | "unittest" | "cypress" | "jest" | "vitest";

export interface Tools extends SkillsProps<ToolsSkills> {
  name: ToolsSkills;
  level: ReactNode;
}
export const toolsTest: Tools[] = [
  { name: "pytest", level: <Translator path="tools.three_years_of_use" /> },
  { name: "unittest", level: <Translator path="tools.three_years_of_use" /> },
  { name: "cypress", level: <Translator path="tools.one_year_of_use" /> },
  { name: "jest", level: <Translator path="tools.three_years_of_use" /> },
  { name: "vitest", level: <Translator path="tools.one_year_of_use" /> },
];

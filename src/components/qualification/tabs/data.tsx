import { ReactNode } from "react";

import { BriefcaseBusiness, GraduationCap } from "lucide-react";
import Translator from "../../../hooks/use-translator";

export type TabsVariants = "education" | "experience";

export interface TabsProps {
  id: TabsVariants;
  icon: ReactNode;
  title: ReactNode;
}

export const tabs: TabsProps[] = [
  {
    id: "experience",
    icon: <BriefcaseBusiness />,
    title: <Translator path="tabs.experience" />,
  },
  {
    id: "education",
    icon: <GraduationCap />,
    title: <Translator path="tabs.education" />,
  },
];

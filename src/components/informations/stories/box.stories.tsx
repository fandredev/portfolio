import type { Meta, StoryObj } from "@storybook/react";
import { Award, BriefcaseBusiness, Headset } from "lucide-react";

import Translator from "../../../hooks/use-translator";
import InformationBox from "../box";

import "../../about/about.css";

const meta = {
  component: InformationBox,
  tags: ["autodocs"],
  title: "Components/Informations/InformationBox",
  parameters: {
    docs: {
      description: {
        component:
          "Esse componente é responsável por destacar um pouco mais as competências.",
      },
    },
  },
} satisfies Meta<typeof InformationBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const BoxTimerWithDeveloperComponent: Story = {
  args: {
    icon: <Award size={18} color="#000" />,
    index: 1,
    text: <Translator path="home.years_as_developer" />,
  },
};

export const BoxQuantityProjectsDevelopedComponent: Story = {
  args: {
    icon: <BriefcaseBusiness size={18} color="#000" />,
    index: 2,
    text: <Translator path="home.quantity_projects_completed" />,
  },
};
export const HowIWorkComponent: Story = {
  args: {
    icon: <Headset size={18} color="#000" />,
    index: 3,
    text: <Translator path="home.how_i_work" />,
  },
};

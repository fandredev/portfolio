import type { Meta, StoryObj } from "@storybook/react";

import "../../qualification.css";
import { qualificationEducations } from "../data/qualification-data";
import QualificationEducationItem from "../qualification";

const meta = {
  component: QualificationEducationItem,
  tags: ["autodocs"],
  title: "Components/Qualification/EducationItem",
  parameters: {
    docs: {
      description: {
        component:
          "Esse componente é responsável por mostrar UM dos cursos técnicos que fiz na área de programação.",
      },
    },
  },
  argTypes: {
    course: {
      description: "Paramêtro que mostrará qual curso foi realizado.",
    },
    locality: {
      description:
        "Paramêtro que mostrará qual instituição o curso foi realizado.",
    },
    time: {
      description:
        "Paramêtro que mostrará em quanto tempo o curso foi realizado.",
    },
  },
} satisfies Meta<typeof QualificationEducationItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DeveloperAssistentComponent: Story = {
  args: qualificationEducations[0],
};
export const ComputerNetworkAssistentComponent: Story = {
  args: qualificationEducations[1],
};

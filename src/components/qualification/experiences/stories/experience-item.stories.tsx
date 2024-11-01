import type { Meta, StoryObj } from "@storybook/react";

import { qualificationExperiences } from "..";
import QualificationExperiencesItem from "../experience-item";

const meta = {
  component: QualificationExperiencesItem,
  tags: ["autodocs"],
  title: "Components/Qualification/ExperienceItem",
  parameters: {
    docs: {
      description: {
        component:
          "Esse componente é responsável por mostrar UM dos cursos técnicos que fiz na área de programação.",
      },
    },
  },
  argTypes: {
    company: {
      description:
        "Paramêtro que mostrará qual empresa eu já prestei serviço e trabalhei.",
    },
    charger: {
      description:
        "Paramêtro que mostrará qual cargo de desenvolvimento de software foi atribuído em período de trabalho.",
    },
    time: {
      description:
        "Paramêtro que mostrará em quanto tempo atuei para aquela empresa.",
    },
  },
} satisfies Meta<typeof QualificationExperiencesItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const FirstCompanyExperienceItemComponent: Story = {
  args: qualificationExperiences[0],
};

export const SecondCompanyExperienceItemComponent: Story = {
  args: qualificationExperiences[1],
};

export const ThirdCompanyExperienceItemComponent: Story = {
  args: qualificationExperiences[2],
};

export const FourCompanyExperienceItemComponent: Story = {
  args: qualificationExperiences[3],
};

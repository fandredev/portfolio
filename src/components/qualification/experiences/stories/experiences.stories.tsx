import type { Meta, StoryObj } from "@storybook/react";

import QualificationExperience from "..";

const meta = {
  component: QualificationExperience,
  tags: ["autodocs"],
  title: "Components/Qualification/ExperiencesList",
  parameters: {
    docs: {
      description: {
        component:
          "Esse componente é responsável por mostrar a listagem de empresas nas quais já atuei em Desenvolvimento de Software.",
      },
    },
  },
} satisfies Meta<typeof QualificationExperience>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ExperiencesList: Story = {};

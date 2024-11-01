import type { Meta, StoryObj } from "@storybook/react";

import Education from "..";

import "../../qualification.css";

const meta = {
  component: Education,
  tags: ["autodocs"],
  title: "Components/Qualification/EducationList",
  parameters: {
    docs: {
      description: {
        component:
          "Esse componente é responsável por mostrar meus cursos técnicos que fiz na área de programação.",
      },
    },
  },
} satisfies Meta<typeof Education>;

export default meta;

type Story = StoryObj<typeof meta>;

export const EducationComponent: Story = {};

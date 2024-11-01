import type { Meta, StoryObj } from "@storybook/react";

import Qualification from ".";

const meta = {
  component: Qualification,
  tags: ["autodocs"],
  title: "Components/Qualification/ListQualification",
  parameters: {
    docs: {
      description: {
        component:
          "Esse componente é responsável por mostrar abas para navegação entre qualificação e experiência.",
      },
    },
  },
} satisfies Meta<typeof Qualification>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ListQualificationComponent: Story = {};

import type { Meta, StoryObj } from "@storybook/react";

import Skills from "..";

const meta = {
  component: Skills,
  tags: ["autodocs"],
  title: "Components/Skills/ListSkills",
  parameters: {
    docs: {
      description: {
        component:
          "Esse componente é responsável por mostrar a listagem de algumas das minhas skills como Desenvolvedor.",
      },
    },
  },
} satisfies Meta<typeof Skills>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SkillsComponent: Story = {};

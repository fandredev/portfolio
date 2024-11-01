import type { Meta, StoryObj } from "@storybook/react";
import Tests from "../Tests";

const meta = {
  component: Tests,
  tags: ["autodocs"],
  title: "Components/Skills/Tests",
  parameters: {
    docs: {
      description: {
        component:
          "Esse componente é responsável por mostrar a listagem de algumas das minhas skills de teste como Desenvolvedor.",
      },
    },
  },
} satisfies Meta<typeof Tests>;

export default meta;

type Story = StoryObj<typeof meta>;

export const TestsComponent: Story = {};

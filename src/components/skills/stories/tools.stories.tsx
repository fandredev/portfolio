import type { Meta, StoryObj } from "@storybook/react-vite";

import Tools from "../Tools";

const meta = {
  component: Tools,
  tags: ["autodocs"],
  title: "Components/Skills/Tools",
  parameters: {
    docs: {
      description: {
        component:
          "Esse componente é responsável por mostrar a listagem de algumas das minhas ferramentas no dia a dia como Desenvolvedor.",
      },
    },
  },
} satisfies Meta<typeof Tools>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ToolsComponent: Story = {};

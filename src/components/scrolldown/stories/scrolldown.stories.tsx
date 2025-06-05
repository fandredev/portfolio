import type { Meta, StoryObj } from "@storybook/react-vite";

import ScrollDown from "..";

const meta = {
  component: ScrollDown,
  tags: ["autodocs"],
  title: "Components/ScrollDown",
  parameters: {
    docs: {
      description: {
        component:
          "Esse componente é responsável por mostrar um ícone para o usuário descer a página para informações gerais sobre o Felipe André",
      },
    },
  },
} satisfies Meta<typeof ScrollDown>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ScrollDownComponent: Story = {};

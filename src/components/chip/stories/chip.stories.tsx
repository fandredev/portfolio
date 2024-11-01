import type { Meta, StoryObj } from "@storybook/react";

import "../chip.css";
import Chip from "..";

const meta = {
  component: Chip,
  tags: ["autodocs"],
  title: "Components/Chip",
  args: {
    label: "NestJS",
  },
  argTypes: {
    label: {
      description: "Paramêtro para adicionar uma soft skill no chip.",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "Esse componente é responsável por mostrar pequenos itens de linguagens e ferramentas que uso em alguns projetos pessoais.",
      },
    },
  },
} satisfies Meta<typeof Chip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ChipComponent: Story = {};

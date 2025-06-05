import type { Meta, StoryObj } from "@storybook/react-vite";

import "../scroll-up.css";
import ScrollUp from "..";

const meta = {
  component: ScrollUp,
  tags: ["autodocs"],
  title: "Components/ScrollUp",
  parameters: {
    docs: {
      description: {
        component:
          "Esse componente é responsável por mostrar um ícone para você rolar para o topo da página quando você scrolla o portfólio por um tempo.",
      },
    },
  },
} satisfies Meta<typeof ScrollUp>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ScrollUpComponent: Story = {};

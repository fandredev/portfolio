import type { Meta, StoryObj } from "@storybook/react-vite";

import "../../about/about.css";
import Informations from "..";

const meta = {
  component: Informations,
  tags: ["autodocs"],
  title: "Components/Informations/Informations",
  parameters: {
    docs: {
      description: {
        component:
          "Esse componente é responsável por listar todos os itens de competências.",
      },
    },
  },
} satisfies Meta<typeof Informations>;

export default meta;

type Story = StoryObj<typeof meta>;

export const InformationsComponent: Story = {};

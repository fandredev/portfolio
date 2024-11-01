import type { Meta, StoryObj } from "@storybook/react";

import "../about.css";
import About from "..";

const meta = {
  component: About,
  tags: ["autodocs"],
  title: "Components/About",
  parameters: {
    docs: {
      description: {
        component:
          "Esse componente é responsável por mostrar um pouco mais de detalhes sobre mim de maneira pessoal e profissional.",
      },
    },
  },
} satisfies Meta<typeof About>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AboutComponent: Story = {};

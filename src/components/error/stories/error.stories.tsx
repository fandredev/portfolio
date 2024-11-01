import type { Meta, StoryObj } from "@storybook/react";

import "../error.css";
import ErrorAPI from "..";

const meta = {
  component: ErrorAPI,
  tags: ["autodocs"],
  title: "Components/ErrorAPI",
  parameters: {
    docs: {
      description: {
        component:
          "Esse componente é responsável por mostrar um error com uma mensagem quando a API não responde os dados do servidor.",
      },
    },
  },
} satisfies Meta<typeof ErrorAPI>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ErrorComponent: Story = {};

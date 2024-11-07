import type { Meta, StoryObj } from "@storybook/react";

import "../error.css";
import Error from "..";

const meta = {
  component: Error,
  tags: ["autodocs"],
  title: "Components/Error",
  parameters: {
    docs: {
      description: {
        component:
          "Esse componente é responsável por mostrar um error com uma mensagem quando algum erro 404 no sistema acontece.",
      },
    },
  },
} satisfies Meta<typeof Error>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ErrorComponent: Story = {};

import type { Meta, StoryObj } from "@storybook/react";
import Frontend from "../Frontend";

const meta = {
  component: Frontend,
  tags: ["autodocs"],
  title: "Components/Skills/Frontend",
  parameters: {
    docs: {
      description: {
        component:
          "Esse componente é responsável por mostrar algumas das minhas skills no front-end.",
      },
    },
  },
} satisfies Meta<typeof Frontend>;

export default meta;

type Story = StoryObj<typeof meta>;

export const FrontComponent: Story = {};

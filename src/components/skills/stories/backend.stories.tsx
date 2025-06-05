import type { Meta, StoryObj } from "@storybook/react-vite";

import Backend from "../Backend";

const meta = {
  component: Backend,
  tags: ["autodocs"],
  title: "Components/Skills/Backend",
  parameters: {
    docs: {
      description: {
        component:
          "Esse componente é responsável por mostrar algumas das minhas skills no back-end.",
      },
    },
  },
} satisfies Meta<typeof Backend>;

export default meta;

type Story = StoryObj<typeof meta>;

export const BackendComponent: Story = {};

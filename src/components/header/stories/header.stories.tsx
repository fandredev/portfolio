import type { Meta, StoryObj } from "@storybook/react";
import Header from "../";

const meta = {
  component: Header,
  tags: ["autodocs"],
  title: "Components/Header/Header",
  parameters: {
    docs: {
      description: {
        component:
          "Esse componente é responsável por mostrar itens no header para você navegar pelo site e até mesmo trocar a linguagem do site",
      },
    },
  },
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const HeaderComponent: Story = {};

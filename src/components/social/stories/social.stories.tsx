import type { Meta, StoryObj } from "@storybook/react";

import Footer from "..";
import Social from "..";

const meta = {
  component: Social,
  tags: ["autodocs"],
  title: "Components/Social",
  parameters: {
    docs: {
      description: {
        component:
          "Esse componente é responsável por mostrar minhas redes sociais.",
      },
    },
  },
} satisfies Meta<typeof Footer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SocialsComponent: Story = {};

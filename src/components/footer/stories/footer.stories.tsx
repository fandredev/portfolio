import type { Meta, StoryObj } from "@storybook/react";
import Footer from "..";

import "../footer.css";

const meta = {
  component: Footer,
  tags: ["autodocs"],
  title: "Components/Footer",
  parameters: {
    docs: {
      description: {
        component:
          "Esse componente é responsável por mostrar minhas redes sociais, meu nome e o ano atual.",
      },
    },
  },
} satisfies Meta<typeof Footer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultFooter: Story = {};

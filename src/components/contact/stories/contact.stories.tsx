import type { Meta, StoryObj } from "@storybook/react";

import "../contact.css";
import Contact from "..";

const meta = {
  component: Contact,
  tags: ["autodocs"],
  title: "Components/Contact/ContactForm",
  parameters: {
    docs: {
      description: {
        component:
          "Esse componente é responsável por mostrar a seção de Contato.",
      },
    },
  },
} satisfies Meta<typeof Contact>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ContactForm: Story = {};

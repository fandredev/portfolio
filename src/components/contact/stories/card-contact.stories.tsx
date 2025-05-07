import type { Meta, StoryObj } from "@storybook/react";
import { ArrowRight, Linkedin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import Translator from "hooks/use-translator";

import CardContact from "../card-contact";

import "../contact.css";

const meta = {
  component: CardContact,
  tags: ["autodocs"],
  title: "Components/Contact/CardContact",
  parameters: {
    docs: {
      description: {
        component:
          "Esse componente é responsável por mostrar um item especifico na seção de redes sociais em contatos.",
      },
    },
  },
} satisfies Meta<typeof CardContact>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CardWhatsappComponent: Story = {
  args: {
    children: (
      <a
        href="https://api.whatsapp.com/send?phone=5511973813705&text=Olá%20Felipe%20André,%20gostaria%20de%20falar%20com%20você."
        className="contact__button"
        target="_blank"
      >
        <Translator path="contact.send_message" /> <ArrowRight />
      </a>
    ),
    example_label: "55 (11) 97381-3705",
    icon: <FaWhatsapp className="contact__card-icon" />,
    title: "Whatsapp",
  },
};

export const CardLinkedinComponent: Story = {
  args: {
    children: (
      <a
        href="https://www.linkedin.com/in/devfandre/"
        className="contact__button"
        target="_blank"
      >
        <Translator path="contact.send_message" /> <ArrowRight />
      </a>
    ),
    example_label: "/devfandre",
    icon: <Linkedin strokeWidth={1.5} className="contact__card-icon" />,
    title: "Linkedin",
  },
};

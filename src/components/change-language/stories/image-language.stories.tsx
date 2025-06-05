/* eslint-disable import/order */
import type { Meta, StoryObj } from "@storybook/react-vite";

import I18n from "..";
import FlagBrazil from "../../../assets/flags/flag-brazil.webp";
import FlagEUA from "../../../assets/flags/flag-eua.webp";

import "../image-language.css";
import ImageLanguage from "../image-language";

const meta = {
  component: ImageLanguage,
  tags: ["autodocs"],
  title: "Components/Internacionalization/ImageLanguage",
  args: {
    isSelected: true,
    onChangeLanguage: () => {},
  },
  argTypes: {
    altText: {
      description:
        "Paramêtro que adicionar a imagem com um texto alternativo para acessibilidade de forma dinâmica.",
    },
    image: {
      description: "Paramêtro que adiciona uma pequena imagem para o ícone.",
      control: {
        disable: true,
      },
    },
    isSelected: {
      description:
        "Paramêtro que adiciona uma classe para saber qual linguagem está ativa no momento.",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "Esse componente é responsável por mostrar uma linguagem nas quais você pode alterar no sistema",
      },
    },
  },
} satisfies Meta<typeof I18n>;

export default meta;

type Story = StoryObj<typeof meta>;

export const BrazilianLanguageComponentSelected: Story = {
  args: {
    altText: "Brazil flag",
    image: FlagBrazil,
  },
};

export const BrazilianLanguageNoSelectedComponent: Story = {
  args: {
    ...BrazilianLanguageComponentSelected.args,
    isSelected: false,
  },
};

export const EnglishLanguageComponent: Story = {
  args: {
    altText: "English flag",
    image: FlagEUA,
  },
};

export const EnglishLanguageNoSelectedComponent: Story = {
  args: {
    ...BrazilianLanguageComponentSelected.args,
    isSelected: false,
  },
};

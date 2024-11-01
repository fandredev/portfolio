import type { Meta, StoryObj } from "@storybook/react";
import { House } from "lucide-react";
import HeaderItem from "../item";

import "../header.css";

const meta = {
  component: HeaderItem,
  tags: ["autodocs"],
  title: "Components/Header/ResponsiveHeaderItem",
  args: {
    href: "#",
    text: "Ínicio",
    icon: <House size={16} color={"#000"} />,
  },
  parameters: {
    docs: {
      description: {
        component:
          "Esse componente é responsável por mostrar itens no header NO RESPONSIVO para você navegar pelo site e até mesmo trocar a linguagem do site",
      },
    },
  },
} satisfies Meta<typeof HeaderItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultItem: Story = {
  argTypes: {
    href: {
      description: "Navega para alguma seção do meu portfólio.",
    },

    text: {
      description: "Label do item do header a ser exibido.",
    },
    icon: {
      description: "Ícone do item do header a ser exibido.",
    },
    openNewTab: {
      description:
        'Parâmetro para adicionar `target="_blank"` no link. (Opcional)',
    },
  },
};

export const OpenNewTab: Story = {
  args: {
    openNewTab: true,
  },

  argTypes: {
    href: {
      description: "Navega para alguma seção do meu portfólio.",
    },

    text: {
      description: "Label do item do header a ser exibido.",
    },

    icon: {
      description: "Ícone do item do header a ser exibido.",
    },

    openNewTab: {
      description:
        'Parâmetro para adicionar `target="_blank"` no link. (Opcional)',
    },
  },
};

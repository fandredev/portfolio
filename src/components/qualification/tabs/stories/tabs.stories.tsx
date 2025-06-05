import type { Meta, StoryObj } from "@storybook/react-vite";
import { BriefcaseBusiness, GraduationCap } from "lucide-react";

import Translator from "hooks/use-translator";

import Tab from "..";

import "../../qualification.css";

const meta = {
  component: Tab,
  tags: ["autodocs"],
  title: "Components/Qualification/Tab",
  parameters: {
    docs: {
      description: {
        component:
          "Esse componente é responsável por mostrar UM das abas de navegação para experiência/educação.",
      },
    },
  },
  argTypes: {
    handleToggleTab: {
      description: "Paramêtro responsável por mudar de uma aba para a outra.",
    },
    icon: {
      description: "Paramêtro responsável que altera o ícone de uma aba.",
    },
    isActiveTab: {
      description: "Paramêtro responsável que altera o CSS da aba ativa.",
    },
    title: {
      description: "Paramêtro responsável que altera o título da aba.",
    },
  },
} satisfies Meta<typeof Tab>;

export default meta;

type Story = StoryObj<typeof meta>;

export const TabExperienceEnableComponent: Story = {
  args: {
    handleToggleTab: () => {},
    icon: <BriefcaseBusiness />,
    isActiveTab: true,
    title: <Translator path="tabs.experience" />,
  },
};
export const TabExperienceDisableComponent: Story = {
  args: {
    ...TabExperienceEnableComponent.args,
    isActiveTab: false,
  },
};

export const TabEducationEnableComponent: Story = {
  args: {
    handleToggleTab: () => {},
    icon: <GraduationCap />,
    isActiveTab: true,
    title: <Translator path="tabs.education" />,
  },
};
export const TabEducationDisableComponent: Story = {
  args: {
    ...TabEducationEnableComponent.args,
    isActiveTab: false,
  },
};

import type { Meta, StoryObj } from "@storybook/react-vite";

import "../image-language.css";
import I18n from "..";

const meta = {
  component: I18n,
  tags: ["autodocs"],
  title: "Components/Internacionalization/I18n",
  parameters: {
    docs: {
      description: {
        component:
          "Esse componente é responsável por mostrar as linguagens nas quais você pode alterar no sistema",
      },
    },
  },
} satisfies Meta<typeof I18n>;

export default meta;

type Story = StoryObj<typeof meta>;

export const InternacionalizationComponent: Story = {};

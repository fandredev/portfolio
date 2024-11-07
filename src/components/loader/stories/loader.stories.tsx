import type { Meta, StoryObj } from "@storybook/react";
import Translator from "hooks/use-translator";

import "../loader.css";

import Loader from "..";

const API_URL = import.meta.env.STORYBOOK_API_URL_PORTFOLIO;

const meta = {
  component: Loader,
  tags: ["autodocs"],
  title: "Components/Loader",
  args: {
    children: (
      <p>
        <Translator path="stats.loading_stats_data" />
      </p>
    ),
  },
  argTypes: {
    children: {
      description:
        "Paramêtro para adicionar um texto no componente de loading.",
    },
  },
  parameters: {
    docs: {
      description: {
        component: `Esse componente é responsável por mostrar um spinner de loading e um texto quando eu busco minhas linguagens mais usadas nos últimos 7 dias na minha API. ${API_URL}`,
      },
    },
  },
} satisfies Meta<typeof Loader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LoaderComponent: Story = {};

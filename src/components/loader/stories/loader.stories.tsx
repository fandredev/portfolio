import type { Meta, StoryObj } from "@storybook/react";

import "../loader.css";
import Loader from "..";
import Translator from "../../../hooks/use-translator";

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
        component:
          "Esse componente é responsável por mostrar um spinner de loading e um texto quando eu busco minhas linguagens mais usadas nos últimos 7 dias na minha API. (https://portfolio-backend-jko9.onrender.com/api/v1)",
      },
    },
  },
} satisfies Meta<typeof Loader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LoaderComponent: Story = {};

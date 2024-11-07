import { ReactNode } from "react";

// eslint-disable-next-line import/order
import type { Meta, StoryObj } from "@storybook/react";

import "../stats.css";

import { BrowserRouter } from "react-router-dom";
import QueryProvider from "services/providers/QueryProvider";

import WakatimeStats from "../";

const WrapperQueryClientProvider = ({ children }: { children: ReactNode }) => (
  <QueryProvider>
    <BrowserRouter>{children}</BrowserRouter>
  </QueryProvider>
);

const API_URL = import.meta.env.STORYBOOK_API_URL_PORTFOLIO;

const meta = {
  component: WakatimeStats,
  tags: ["autodocs"],
  title: "Components/WakatimeStats",
  parameters: {
    docs: {
      description: {
        component: `Esse componente é responsável por as linguagens mais usadas pelo Felipe André nos últimos 7 dias. A API que construí é pública e gratuita e por essa questão, os dados podem demorar um pouco. ${API_URL}`,
      },
    },
  },
} satisfies Meta<typeof WakatimeStats>;

export default meta;

type Story = StoryObj<typeof meta>;

export const WakatimeStatsComponent: Story = {
  render: () => (
    <WrapperQueryClientProvider>
      <WakatimeStats />
    </WrapperQueryClientProvider>
  ),
};

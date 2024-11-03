import { ReactNode } from "react";

// eslint-disable-next-line import/order
import type { Meta, StoryObj } from "@storybook/react";

import "../home.css";
import { BrowserRouter } from "react-router-dom";

import Home from "../";

const BrowserRouterWrapper = ({ children }: { children: ReactNode }) => (
  <BrowserRouter>{children}</BrowserRouter>
);

const meta = {
  component: Home,
  tags: ["autodocs"],
  title: "Components/Home",
  parameters: {
    docs: {
      description: {
        component:
          "Esse componente é responsável por mostrar a parte principal do site.",
      },
    },
  },
} satisfies Meta<typeof Home>;

export default meta;

type Story = StoryObj<typeof meta>;

export const HomeComponent: Story = {
  render: () => (
    <BrowserRouterWrapper>
      <Home />
    </BrowserRouterWrapper>
  ),
};

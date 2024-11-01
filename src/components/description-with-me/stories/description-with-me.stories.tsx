import { ReactNode } from "react";

import type { Meta, StoryObj } from "@storybook/react";

import "../description-with-me.css";
import DescriptionWithMe from "..";

const Wrapper = ({ children }: { children: ReactNode }) => (
  <div
    style={{
      display: "flex",
      rowGap: "10px",
      flexFlow: "column wrap",
      padding: "20px",
    }}
  >
    {children}
  </div>
);

const meta = {
  component: DescriptionWithMe,
  tags: ["autodocs"],
  title: "Components/DescriptionWithMe",
  parameters: {
    docs: {
      description: {
        component:
          "Esse componente é responsável por mostrar uma pequena e breve introdução sobre mim.",
      },
    },
  },
} satisfies Meta<typeof DescriptionWithMe>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultDescriptionWithMe: Story = {
  render: () => (
    <Wrapper>
      <DescriptionWithMe />
    </Wrapper>
  ),
};

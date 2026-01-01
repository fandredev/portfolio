import type { Meta, StoryObj } from "@storybook/react-vite";

import Skeleton from "../skeleton";
import "../skeleton.css";

const meta = {
  component: Skeleton,
  tags: ["autodocs"],
  title: "Components/Skeleton",
  argTypes: {
    variant: {
      control: "select",
      options: ["text", "title", "circle", "rect"],
      description: "O formato visual do skeleton.",
    },
    width: {
      control: "text",
      description: "Largura personalizada do skeleton.",
    },
    height: {
      control: "text",
      description: "Altura personalizada do skeleton.",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "Componente utilizado para mostrar um estado de carregamento suave (skeleton screen) enquanto os dados reais estão sendo buscados.",
      },
    },
  },
} satisfies Meta<typeof Skeleton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: {
    variant: "text",
    width: "100%",
  },
};

export const Title: Story = {
  args: {
    variant: "title",
    width: "60%",
  },
};

export const Circle: Story = {
  args: {
    variant: "circle",
    width: "50px",
    height: "50px",
  },
};

export const Rect: Story = {
  args: {
    variant: "rect",
    width: "100%",
    height: "200px",
  },
};

export const ExampleList: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        width: "300px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <Skeleton variant="circle" width="40px" height="40px" />
        <Skeleton variant="title" width="150px" height="1.2rem" />
      </div>
      <Skeleton variant="text" />
      <Skeleton variant="text" />
      <Skeleton variant="text" width="80%" />
    </div>
  ),
};

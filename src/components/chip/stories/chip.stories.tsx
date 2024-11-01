import type { Meta, StoryObj } from "@storybook/react";

import "../chip.css";
import Chip from "..";

const meta = {
  component: Chip,
  tags: ["autodocs"],
  title: "Components/Chip/Chip",
  args: {
    label: "NestJS",
  },
  argTypes: {
    label: {
      description: "Paramêtro para adicionar uma soft skill no chip",
    },
  },
} satisfies Meta<typeof Chip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultChip: Story = {};

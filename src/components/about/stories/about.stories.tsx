import type { Meta, StoryObj } from "@storybook/react";

import "../about.css";
import About from "..";

const meta = {
  component: About,
  tags: ["autodocs"],
  title: "Components/About",
} satisfies Meta<typeof About>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultAbout: Story = {};

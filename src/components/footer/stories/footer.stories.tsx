import type { Meta, StoryObj } from "@storybook/react";
import Footer from "..";

import "../footer.css";

const meta = {
  component: Footer,
  tags: ["autodocs"],
  title: "Components/Footer/Footer",
} satisfies Meta<typeof Footer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultFooter: Story = {};

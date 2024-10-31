import type { Meta, StoryObj } from "@storybook/react";
import { withReactContext } from "storybook-react-context";
import Header from "../";
import NameContext from "../../../context/NameContext";

const meta = {
  component: Header,
  tags: ["autodocs"],
  title: "Components/Header/Header",
  decorators: [withReactContext],
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const HeaderComponent: Story = {
  parameters: {
    reactContext: {
      contexts: [
        {
          context: NameContext,
          contextValue: {
            name: "Felipe",
          },
        },
      ],
    },
  },
};

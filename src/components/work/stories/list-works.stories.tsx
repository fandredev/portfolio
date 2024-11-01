import type { Meta, StoryObj } from "@storybook/react";
import Work from "..";

const meta = {
  component: Work,
  tags: ["autodocs"],
  title: "Components/Work/ListWorks",
  parameters: {
    docs: {
      description: {
        component:
          "Esse componente é responsável por mostrar a listagem de alguns pequenos projetos pessoais que foram desenvolvidos usando Techs como Python, React, Angular, NestJS entre outros juntamente com o título da seção.",
      },
    },
  },
} satisfies Meta<typeof Work>;

export default meta;

type Story = StoryObj<typeof meta>;

export const WorkComponent: Story = {};

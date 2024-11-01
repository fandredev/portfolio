import type { Meta, StoryObj } from "@storybook/react";

import { projectsData } from "../work-data";
import WorkItems from "../work-items";

import "../work.css";

const meta = {
  component: WorkItems,
  tags: ["autodocs"],
  title: "Components/Work/WorkItems",
  args: {
    item: projectsData[0],
  },
  argTypes: {
    item: {
      description:
        "Parâmetro para adicionar um item de projetos dentro da listagem",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "Esse componente é responsável por mostrar a listagem de alguns pequenos projetos pessoais que foram desenvolvidos usando Techs como Python, React, Angular, NestJS entre outros.",
      },
    },
  },
} satisfies Meta<typeof WorkItems>;

export default meta;

type Story = StoryObj<typeof meta>;

export const WorkItemsComponent: Story = {};

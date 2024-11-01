import type { Meta, StoryObj } from "@storybook/react";

import { projectsData } from "../work-data";
import Works from "../works";
import "../work.css";

const meta = {
  component: Works,
  tags: ["autodocs"],
  title: "Components/Work/Works",
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
} satisfies Meta<typeof Works>;

export default meta;

type Story = StoryObj<typeof meta>;

export const WorksComponent: Story = {};

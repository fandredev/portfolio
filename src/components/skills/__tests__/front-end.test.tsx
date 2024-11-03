import { screen, render } from "@testing-library/react";
import i18n from "i18n";
import { I18nextProvider } from "react-i18next";
import { describe, test, expect, beforeEach } from "vitest";

import Frontend from "../Frontend";

describe(`${Frontend.name} component`, () => {
  beforeEach(() => {
    render(
      <I18nextProvider i18n={i18n}>
        <Frontend />
      </I18nextProvider>
    );
  });

  test("should render title 'Front-end developer' when component rendered", () => {
    const expectedTitle = "Front-end developer";
    const titleElement = screen.getByText(expectedTitle);
    const textContent = titleElement.textContent;

    expect(textContent).toBe(expectedTitle);
  });

  test("should render correct tools and level for tests when component rendered", () => {
    const tools: HTMLDivElement[] = screen.getAllByRole("listitem");
    const toolsFrontend = [
      { name: "HTML", level: "5 anos de uso" },
      { name: "CSS", level: "5 anos de uso" },
      { name: "Sass", level: "4 anos de uso" },
      { name: "Bootstrap", level: "4 anos de uso" },
      { name: "Typescript", level: "4 anos de uso" },
      { name: "Angular 9", level: "3 anos de uso" },
      { name: "React", level: "4 anos de uso" },
      { name: "Redux", level: "3 anos de uso" },
    ];

    for (let i = 0; i < tools.length; i++) {
      const tool = tools[i];
      const textContentSkills =
        tool.querySelector(".skills__name")?.textContent;

      const levelContentSkills =
        tool.querySelector(".skills__level")?.textContent;

      expect(textContentSkills).toBe(toolsFrontend[i].name);
      expect(levelContentSkills).toBe(toolsFrontend[i].level);
    }
  });
});

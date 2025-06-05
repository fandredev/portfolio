import { screen, render } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import { describe, test, expect, beforeEach } from "vitest";

import i18n from "services/i18n";

import Backend from "../Backend";

describe(`${Backend.name} component`, () => {
  beforeEach(() => {
    render(
      <I18nextProvider i18n={i18n}>
        <Backend />
      </I18nextProvider>
    );
  });

  test("should render title 'Back-end developer' when component rendered", () => {
    const expectedTitle = "Back-end developer";
    const titleElement = screen.getByText(expectedTitle);
    const textContent = titleElement.textContent;

    expect(textContent).toBe(expectedTitle);
  });

  test("should render correct tools and level for tests when component rendered", () => {
    const tools: HTMLDivElement[] = screen.getAllByRole("listitem");
    const toolsBackend = [
      { name: "Python", level: "4 anos de uso" },
      { name: "Django", level: "3 anos de uso" },
      { name: "Postgres", level: "2 anos de uso" },
      { name: "NestJS", level: "1 ano de uso" },
      { name: "NodeJS", level: "3 anos de uso" },
    ];

    for (let i = 0; i < tools.length; i++) {
      const tool = tools[i];
      const textContentSkills =
        tool.querySelector(".skills__name")?.textContent;

      const levelContentSkills =
        tool.querySelector(".skills__level")?.textContent;

      expect(textContentSkills).toBe(toolsBackend[i].name);
      expect(levelContentSkills).toBe(toolsBackend[i].level);
    }
  });
});

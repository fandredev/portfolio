import { screen, render } from "@testing-library/react";
import i18n from "i18n";
import { I18nextProvider } from "react-i18next";
import { describe, test, expect, beforeEach } from "vitest";

import Tests from "../Tests";

describe(`${Tests.name} component`, () => {
  beforeEach(() => {
    render(
      <I18nextProvider i18n={i18n}>
        <Tests />
      </I18nextProvider>
    );
  });

  test("should render title 'Testes' when component rendered", () => {
    const expectedTests = "Testes";
    const titleElement = screen.getByText(expectedTests);
    const textContent = titleElement.textContent;

    expect(textContent).toBe(expectedTests);
  });

  test("should render correct tools and level for tests when component rendered", () => {
    const tools: HTMLDivElement[] = screen.getAllByRole("listitem");
    const toolsData = [
      { name: "pytest", level: "3 anos de uso" },
      { name: "unittest", level: "3 anos de uso" },
      { name: "cypress", level: "1 ano de uso" },
      { name: "jest", level: "3 anos de uso" },
      { name: "vitest", level: "1 ano de uso" },
    ];

    for (let i = 0; i < tools.length; i++) {
      const tool = tools[i];
      const textContentSkills =
        tool.querySelector(".skills__name")?.textContent;

      const levelContentSkills =
        tool.querySelector(".skills__level")?.textContent;

      expect(textContentSkills).toBe(toolsData[i].name);
      expect(levelContentSkills).toBe(toolsData[i].level);
    }
  });
});

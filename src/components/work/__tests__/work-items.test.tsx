import { screen, render } from "@testing-library/react";
import i18n from "services/i18n";
import { I18nextProvider } from "react-i18next";
import { describe, test, expect, beforeEach } from "vitest";

import Work from "..";

describe(`${Work.name} component`, () => {
  beforeEach(() => {
    render(
      <I18nextProvider i18n={i18n}>
        <Work />
      </I18nextProvider>
    );
  });

  test("should render component with correct title 'Portfólio' when component rendered", () => {
    const expectedTitle = "Portfólio";
    const titleElement = screen.getByText(expectedTitle);

    const textContent = titleElement.textContent;

    expect(textContent).toBe(expectedTitle);
  });

  test("should render component with correct subtitle 'Alguns dos meus projetos pessoais. Sempre confira meu GitHub para mais projetos.' when component rendered", () => {
    const expectedSubtitle =
      "Alguns dos meus projetos pessoais. Sempre confira meu GitHub para mais projetos.";
    const titleElement = screen.getByText(expectedSubtitle);

    const textContent = titleElement.textContent;

    expect(textContent).toBe(expectedSubtitle);
  });
});

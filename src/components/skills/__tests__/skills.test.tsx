import { screen, render } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import i18n from "services/i18n";
import { describe, test, expect, beforeEach } from "vitest";

import ListSkills from "..";

describe(`${ListSkills.name} component`, () => {
  beforeEach(() => {
    render(
      <I18nextProvider i18n={i18n}>
        <ListSkills />
      </I18nextProvider>
    );
  });

  test("should render title 'Skills' when component rendered", () => {
    const expectedTitle = "Skills";
    const titleElement = screen.getByText(expectedTitle);
    const textContent = titleElement.textContent;

    expect(textContent).toBe(expectedTitle);
  });
});

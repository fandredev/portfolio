import { render, screen } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import { describe, it, expect } from "vitest";
import I18n from ".";
import i18n from "../../i18n";

describe(`${I18n.name}: `, () => {
  it("should render two buttons of languages when component loads", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <I18n />
      </I18nextProvider>
    );
    const buttonElement = screen.getAllByRole("button");

    expect(buttonElement).toHaveLength(2);
  });

  it("should select flag Brazil when components loads", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <I18n />
      </I18nextProvider>
    );
    const [buttonBrazil, buttonEnglish]: HTMLButtonElement[] =
      screen.getAllByRole("button");

    const classListButtonBrazil = buttonBrazil.classList;
    const classListButtonEnglish = buttonEnglish.classList;

    expect(classListButtonBrazil).toContain("selected");
    expect(classListButtonEnglish).not.toContain("selected");
  });
});

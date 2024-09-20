import { fireEvent, render, screen } from "@testing-library/react";

import { I18nextProvider } from "react-i18next";
import { vi, describe, expect, it } from "vitest";

import ImageLanguage from "./image-language";
import FlagBrazil from "../../assets/flags/flag-brazil.webp";

import i18n from "../../i18n";

const altImageDefault = "Bandeira do Brasil";
const mockOnChangeLanguage = vi.fn();

describe(`${ImageLanguage.name}: `, () => {
  it("should render correct className in button to change language when button is selected", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <ImageLanguage
          altText={altImageDefault}
          image={FlagBrazil}
          isSelected
          onChangeLanguage={() => {}}
        />
      </I18nextProvider>
    );
    const buttonElement = screen.getByRole("button");
    const classList = buttonElement.classList;

    expect(classList).toContain("selected");
  });

  it("should render correct className in button to change language when button is NOT selected", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <ImageLanguage
          altText={altImageDefault}
          image={FlagBrazil}
          isSelected={false}
          onChangeLanguage={() => {}}
        />
      </I18nextProvider>
    );

    const buttonElement = screen.getByRole("button");
    const classList = buttonElement.classList;

    expect(classList).not.toContain("selected");
  });

  it("should render flag Brazil by default when component loads", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <ImageLanguage
          altText={altImageDefault}
          image={FlagBrazil}
          isSelected
          onChangeLanguage={() => {}}
        />
      </I18nextProvider>
    );
    const imageElement = screen.getByRole("img");
    const getAttribute = imageElement.getAttribute("src");
    expect(getAttribute).toBe(FlagBrazil);
  });

  it("should render alt text when component loads", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <ImageLanguage
          altText={altImageDefault}
          image={FlagBrazil}
          isSelected
          onChangeLanguage={() => {}}
        />
      </I18nextProvider>
    );
    const imageElement = screen.getByRole("img");
    const getAttribute = imageElement.getAttribute("alt");
    expect(getAttribute).toBe(altImageDefault);
  });

  test("should call function to change language when button is pressed and #isSelected is TRUE", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <ImageLanguage
          altText={altImageDefault}
          image={FlagBrazil}
          isSelected
          onChangeLanguage={mockOnChangeLanguage}
        />
      </I18nextProvider>
    );
    const button = screen.getByRole("button");

    fireEvent.click(button);

    expect(mockOnChangeLanguage).toHaveBeenCalledWith("pt-BR");
  });

  test("should call function to change language when button is pressed and #isSelected is FALSE", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <ImageLanguage
          altText={altImageDefault}
          image={FlagBrazil}
          isSelected={false}
          onChangeLanguage={mockOnChangeLanguage}
        />
      </I18nextProvider>
    );
    const button = screen.getByRole("button");

    fireEvent.click(button);

    expect(mockOnChangeLanguage).toHaveBeenCalledWith("en-US");
  });
});

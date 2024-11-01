import { render, screen } from "@testing-library/react";

import { describe, it, expect, vi, beforeEach } from "vitest";
import I18n from "..";

import enUs from "../../../i18n/locales/en-us";
import ptBr from "../../../i18n/locales/pt-br";
import { LanguageTypes } from "../image-language";

type Translations = typeof ptBr.translations & typeof enUs.translations;

const mockTranslations: {
  ptBr: { translations: Translations };
  fr: { translations: Translations };
} = {
  ptBr: {
    translations: {
      ...ptBr.translations,
    },
  },
  fr: {
    translations: {
      ...enUs.translations,
    },
  },
};

vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    i18n: {
      changeLanguage: vi.fn(),
      language: LanguageTypes.ptBR,
    },
    t: (key: keyof Translations) =>
      mockTranslations.ptBr.translations[key] || key, // mock the translation function
  }),
}));

describe(`${I18n.name}: `, () => {
  beforeEach(() => {
    render(<I18n />);
  });

  it("should render two buttons of languages when component loads", () => {
    const buttonElement = screen.getAllByRole("button");

    expect(buttonElement).toHaveLength(2);
  });

  it("should select flag Brazil when components loads", () => {
    const [buttonBrazil, buttonEnglish]: HTMLButtonElement[] =
      screen.getAllByRole("button");

    const classListButtonBrazil = buttonBrazil.classList;
    const classListButtonEnglish = buttonEnglish.classList;

    expect(classListButtonBrazil).toContain("selected");
    expect(classListButtonEnglish).not.toContain("selected");
  });
});

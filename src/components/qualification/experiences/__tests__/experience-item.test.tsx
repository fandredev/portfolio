import { screen, render } from "@testing-library/react";
import i18n from "services/i18n";
import { I18nextProvider } from "react-i18next";
import { describe, test, expect, beforeEach } from "vitest";

import QualificationExperiencesItem from "../experience-item";

describe(`${QualificationExperiencesItem.name} component`, () => {
  const year = new Date().getFullYear();
  const lastYear = year - 1;

  beforeEach(() => {
    render(
      <I18nextProvider i18n={i18n}>
        <QualificationExperiencesItem
          charger="Desenvolvedor"
          company="Zapsign"
          time={`De ${lastYear} - Atual`}
        />
      </I18nextProvider>
    );
  });

  test("should render component with title charger 'Desenvolvedor' when component renders", () => {
    const expectedChargerTitle = "Desenvolvedor";
    const title = screen.getByText(expectedChargerTitle);
    const textContent = title.textContent;

    expect(textContent).toBe(expectedChargerTitle);
  });

  test("should render component with subtitle company 'Zapsign' when component renders", () => {
    const expectedSubtitleCompany = "Zapsign";
    const subtitle = screen.getByText(expectedSubtitleCompany);
    const textContent = subtitle.textContent;

    expect(textContent).toBe(expectedSubtitleCompany);
  });

  test(`should render component with time 'De ${lastYear} - Atual' when component renders`, () => {
    const expectedTime = `De ${lastYear} - Atual`;
    const time = screen.getByText(expectedTime);
    const textContent = time.textContent;

    expect(textContent).toBe(expectedTime);
  });
});

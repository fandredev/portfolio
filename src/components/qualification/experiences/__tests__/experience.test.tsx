import { screen, render } from "@testing-library/react";
import i18n from "services/i18n";
import { I18nextProvider } from "react-i18next";
import { describe, expect, beforeEach, it } from "vitest";

import QualificationExperience, { QualificationExperiencesProps } from "..";
import QualificationExperiencesItem from "../experience-item";

describe(`${QualificationExperience.name} component`, () => {
  beforeEach(() => {
    render(
      <I18nextProvider i18n={i18n}>
        <QualificationExperience />
      </I18nextProvider>
    );
  });

  it.skip(`should render component #${QualificationExperiencesItem} when component renders`, () => {
    const experienceItem = screen.getAllByRole("listitem");
    const qualificationExperiences: QualificationExperiencesProps[] = [
      {
        company: "Luby",
        charger: "Programador Júnior",
        time: "Ago 2019 - Jul 2020",
      },
      {
        company: "4you2 idiomas",
        charger: "Programador Júnior",
        time: "Set 2020 - Jan 2021",
      },
      {
        company: "Zapsign",
        charger: "Desenvolvedor Full-Stack Pleno",
        time: "Dez 2020 - Jan 2024",
      },
      {
        company: "Nan Systems",
        charger: "Desenvolvedor Full-Stack Pleno",
        time: `Fev 2024 - atual`,
      },
    ];

    for (let i = 0; i < experienceItem.length; i++) {
      const item = experienceItem[i];
      const charger = item.querySelector(".qualification__title")?.textContent;

      expect(charger).toBe(qualificationExperiences[i].charger);
    }
  });
});

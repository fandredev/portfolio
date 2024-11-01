import { screen, render } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import { describe, test, expect, beforeEach } from "vitest";

import i18n from "../../../../i18n";
import QualificationEducationItem from "../qualification";

describe(`${QualificationEducationItem.name} component`, () => {
  beforeEach(() => {
    render(
      <I18nextProvider i18n={i18n}>
        <QualificationEducationItem
          course="Desenvolvimento de apps"
          locality="Udemy"
          time="2020 - 2021"
        />
      </I18nextProvider>
    );
  });

  test("should render component with title course 'Desenvolvimento de apps' when component renders", () => {
    const expectedTitleCourse = "Desenvolvimento de apps";
    const title = screen.getByText(expectedTitleCourse);
    const textContent = title.textContent;

    expect(textContent).toBe(expectedTitleCourse);
  });

  test("should render component with subtitle locality 'Udemy' when component renders", () => {
    const expectedSubtitleLocality = "Udemy";
    const subtitle = screen.getByText(expectedSubtitleLocality);
    const textContent = subtitle.textContent;

    expect(textContent).toBe(expectedSubtitleLocality);
  });

  test("should render component with time '2020 - 2021' when component renders", () => {
    const expectedTime = "2020 - 2021";
    const time = screen.getByText(expectedTime);
    const textContent = time.textContent;

    expect(textContent).toBe(expectedTime);
  });
});

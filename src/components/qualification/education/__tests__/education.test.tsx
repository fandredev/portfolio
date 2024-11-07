import { screen, render } from "@testing-library/react";
import i18n from "services/i18n";
import { I18nextProvider } from "react-i18next";
import { describe, test, expect, beforeEach } from "vitest";

import Education from "..";
import QualificationEducationItem from "../qualification";

describe(`${Education.name} component`, () => {
  beforeEach(() => {
    render(
      <I18nextProvider i18n={i18n}>
        <Education />
      </I18nextProvider>
    );
  });

  test(`should render ${QualificationEducationItem.name} component when he rendered`, () => {
    const expectedTabs = 2;
    const educationItems = screen.getAllByTestId("qualification-data-test-id");
    expect(educationItems).toHaveLength(expectedTabs);
  });
});

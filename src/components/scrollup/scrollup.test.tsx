import { screen, render } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import { describe, test, expect, beforeEach } from "vitest";

import ScrollUp from ".";
import i18n from "../../i18n";

describe(`${ScrollUp.name} component`, () => {
  beforeEach(() => {
    render(
      <I18nextProvider i18n={i18n}>
        <ScrollUp />
      </I18nextProvider>
    );
  });

  test("should render component with href is the same page when component rendered", () => {
    const scrollUp = screen.getByRole("link");
    expect(scrollUp.getAttribute("href")).toBe("#");
  });
});

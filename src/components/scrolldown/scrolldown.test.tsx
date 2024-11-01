import { screen, render } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import { describe, test, expect, beforeEach } from "vitest";

import ScrollDown from ".";
import i18n from "../../i18n";

describe(`${ScrollDown.name} component`, () => {
  beforeEach(() => {
    render(
      <I18nextProvider i18n={i18n}>
        <ScrollDown />
      </I18nextProvider>
    );
  });

  test("should render component with href is the about section when component rendered", () => {
    const scrollDown = screen.getByRole("link");
    expect(scrollDown.getAttribute("href")).toBe("#about");
  });

  test("should render component with text", () => {
    const scrollDown = screen.getByRole("link");
    expect(scrollDown.textContent).toBe("Role para baixo");
  });
});

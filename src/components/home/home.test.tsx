import { render, screen } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";

import { describe, beforeEach } from "vitest";

import Home from ".";
import { NameProvider } from "../../context/NameContext";
import i18n from "../../i18n";

describe(`${Home.name} component`, () => {
  beforeEach(() => {
    render(
      <I18nextProvider i18n={i18n}>
        <NameProvider>
          <Home />
        </NameProvider>
      </I18nextProvider>
    );
  });

  test("should render component without errors", () => {
    const home = screen.getByRole("banner");

    const getAttributeId = home.getAttribute("id");
    expect(getAttributeId).toBe("home");
  });
});

import { screen, render } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import { describe, test, expect, beforeEach } from "vitest";

import i18n from "services/i18n";

import Tools from "../Tools";

describe(`${Tools.name} component`, () => {
  beforeEach(() => {
    render(
      <I18nextProvider i18n={i18n}>
        <Tools />
      </I18nextProvider>
    );
  });

  test("should render component with multiple tools when component rendered", () => {
    const tools = screen.getAllByRole("listitem");

    expect(tools).toHaveLength(10);
  });
});

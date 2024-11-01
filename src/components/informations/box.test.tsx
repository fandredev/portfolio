import { screen, render } from "@testing-library/react";
import { Award } from "lucide-react";
import { I18nextProvider } from "react-i18next";
import { describe, test, expect, beforeEach } from "vitest";

import InformationBox from "./box";
import i18n from "../../i18n";

describe(`${InformationBox.name} component`, () => {
  const index = 1;
  beforeEach(() => {
    render(
      <I18nextProvider i18n={i18n}>
        <InformationBox
          text="+ 5 anos como desenvolvedor"
          icon={<Award size={18} color="#000" />}
          index={index}
        />
      </I18nextProvider>
    );
  });

  test("should render component with correct text when component rendered", () => {
    const informationBox = screen.getByTestId(`information-item-card-${index}`);
    expect(informationBox.textContent).toBe("+ 5 anos como desenvolvedor");
  });

  test("should render component with correct icon when component rendered", () => {
    const icon = screen
      .getByTestId(`information-item-card-${index}`)
      .querySelector("svg");

    expect(icon).not.toBeNull();
  });
});

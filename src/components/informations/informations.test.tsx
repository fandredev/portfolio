import { screen, render } from "@testing-library/react";
import i18n from "services/i18n";
import { I18nextProvider } from "react-i18next";

import Informations from ".";
import InformationBox from "./box";

describe(`${Informations.name} component`, () => {
  beforeEach(() => {
    render(
      <I18nextProvider i18n={i18n}>
        <Informations />
      </I18nextProvider>
    );
  });

  test(`should render three #${InformationBox.name} component no errors when component renders`, () => {
    const quantityCards = 3;

    for (let i = 0; i < quantityCards; i++) {
      const cards = screen.getAllByTestId(`information-item-card-${i}`);
      expect(cards.length).toBe(1);
    }
  });
});

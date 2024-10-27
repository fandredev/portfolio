import { screen, render } from "@testing-library/react";

import { I18nextProvider } from "react-i18next";
import Loader from ".";

import { NameProvider } from "../../context/NameContext";
import i18n from "../../i18n";

describe(`${Loader.name} component`, () => {
  beforeEach(() => {
    render(
      <I18nextProvider i18n={i18n}>
        <NameProvider>
          <Loader>Carregue dados aqui</Loader>
        </NameProvider>
      </I18nextProvider>
    );
  });

  test("should render a children props inside the loader component", () => {
    const loader = screen.getByRole("alert");
    const textContent = loader.textContent;

    expect(textContent).toBe("Carregue dados aqui");
  });
});

import { screen, render } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";

import DescriptionWithMe from ".";
import { NameProvider } from "../../context/NameContext";
import i18n from "../../i18n";

describe(`${DescriptionWithMe.name} component`, () => {
  beforeEach(() => {
    render(
      <I18nextProvider i18n={i18n}>
        <NameProvider>
          <DescriptionWithMe />
        </NameProvider>
      </I18nextProvider>
    );
  });

  test(`should render title with 'Felipe André' when component rendered`, () => {
    const name = "Felipe André";
    const title = screen.getByText(name);
    const textContent = title.textContent;

    expect(textContent).toBe(name);
  });

  test(`should render subtitle with 'Full Stack Developer' when component rendered`, () => {
    const charge = "Full Stack Developer";
    const subtitle = screen.getByText(charge);
    const textContent = subtitle.textContent;

    expect(textContent).toBe(charge);
  });

  test(`should render correct href to whatsapp link when component rendered`, () => {
    const button = screen.getByRole("button");
    const anchorHref =
      "https://api.whatsapp.com/send?phone=11973813705&text=Olá%20Felipe%20André,%20gostaria%20de%20falar%20com%20você.";

    const getAttribute = button.getAttribute("href");

    expect(getAttribute).toBe(anchorHref);
  });
});

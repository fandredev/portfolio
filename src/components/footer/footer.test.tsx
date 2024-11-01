import { screen, render } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";

import Footer from ".";
import { NameProvider } from "../../context/NameContext";
import i18n from "../../i18n";

describe(`${Footer.name} component`, () => {
  beforeEach(() => {
    render(
      <I18nextProvider i18n={i18n}>
        <NameProvider>
          <Footer />
        </NameProvider>
      </I18nextProvider>
    );
  });

  test("should render three items for my three social links when component rendered", () => {
    const socialLinks = screen.getAllByRole("link");
    expect(socialLinks).toHaveLength(5);
  });

  test("should render the date for the current year and my name when component rendered", () => {
    const date = new Date().getFullYear();

    const expectedText = `${date} - Felipe André`;
    const footerCopy = screen.getByTestId("footer-text");

    expect(footerCopy).not.toBeNull();
    expect(footerCopy.textContent).toContain(expectedText);
  });
});

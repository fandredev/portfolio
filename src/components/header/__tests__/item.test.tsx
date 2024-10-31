import { screen, render } from "@testing-library/react";

import { I18nextProvider } from "react-i18next";
import HeaderItem, { headerItems } from "../item";

import i18n from "../../../i18n";

describe(`${HeaderItem.name} component`, () => {
  const { href, icon, text } = headerItems[0];

  beforeEach(() => {
    render(
      <I18nextProvider i18n={i18n}>
        <HeaderItem href={href} icon={icon} text={text} />
      </I18nextProvider>
    );
  });

  test("should render header item correct anchor link", () => {
    const anchor = screen.getByRole("link");
    const hrefAttribute = anchor.getAttribute("href");

    expect(hrefAttribute).toBe(href);
  });

  test("should render header item correct anchor text", () => {
    const anchor = screen.getByRole("link");
    const textContent = anchor.textContent;

    expect(textContent).toBe("Ínicio");
  });
});

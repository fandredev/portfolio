import { screen, render, fireEvent } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";

import { NameProvider } from "context/NameContext";
import i18n from "services/i18n";

import Header from "..";

describe(`${Header.name} component`, () => {
  beforeEach(() => {
    render(
      <I18nextProvider i18n={i18n}>
        <NameProvider>
          <Header />
        </NameProvider>
      </I18nextProvider>
    );
  });

  test("should render my name in header when component is rendered", () => {
    const expectedName = "Felipe André";
    const name = screen.getByRole("link", { name: expectedName });
    const nameText = name.textContent;

    expect(nameText).toBe(expectedName);
  });

  test("should open menu when user click in circle chevron to open menu", () => {
    const openMenu = screen.getByTestId("show-menu");
    const menu = screen.getByRole("menu");

    expect(menu.className).toBe("nav__menu");

    fireEvent.click(openMenu);

    expect(menu.className).toBe("nav__menu show-menu");
  });

  test("should close menu when user click in icon x to close", () => {
    const openMenu = screen.getByTestId("show-menu");
    const closeMenu = screen.getByTestId("close-menu");
    const menu = screen.getByRole("menu");

    expect(menu.className).toBe("nav__menu");

    fireEvent.click(openMenu);

    expect(menu.className).toBe("nav__menu show-menu");

    fireEvent.click(closeMenu);

    expect(menu.className).toBe("nav__menu");
  });
});

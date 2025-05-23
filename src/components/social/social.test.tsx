import { screen, render } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import { describe, test, expect, beforeEach } from "vitest";

import i18n from "services/i18n";

import Social from ".";

describe(`${Social.name} component`, () => {
  beforeEach(() => {
    render(
      <I18nextProvider i18n={i18n}>
        <Social />
      </I18nextProvider>
    );
  });

  test("should render three items for my three social links when component rendered", () => {
    const socialLinks = screen.getAllByRole("link");
    expect(socialLinks).toHaveLength(5);
  });

  test("should render correct href for my three social links when component rendered", () => {
    const socialLinks = screen.getAllByRole("link");
    const hrefs = socialLinks.map((socialLink) =>
      socialLink.getAttribute("href")
    );
    const githubLink = "https://github.com/fandredev/";
    const whatsappLink = "https://api.whatsapp.com/send?phone=5511973813705";
    const linkedinLink = "https://www.linkedin.com/in/devfandre/";
    const youtubeLink = "https://www.youtube.com/@thistate";

    const [github, whatsapp, linkedin] = hrefs;

    expect(github).toBe(githubLink);
    expect(whatsapp?.startsWith(whatsappLink)).toBeTruthy();
    expect(linkedin).toBe(linkedinLink);
    expect(youtubeLink).toBe(youtubeLink);
  });
});

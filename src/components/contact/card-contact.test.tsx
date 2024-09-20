import { screen, render } from "@testing-library/react";
import { ArrowRight } from "lucide-react";
import { I18nextProvider } from "react-i18next";

import { FaWhatsapp } from "react-icons/fa";

import { describe, test, expect, beforeEach } from "vitest";

import CardContact from "./card-contact";

import i18n from "../../i18n";

describe(`${CardContact.name} component`, () => {
  beforeEach(() => {
    render(
      <I18nextProvider i18n={i18n}>
        <CardContact
          example_label="55 (11) 97381-3705"
          icon={<FaWhatsapp className="contact__card-icon" />}
          title="Whatsapp"
          children={
            <a
              href="https://api.whatsapp.com/send?phone=11973813705&text=Olá%20Felipe%20André,%20gostaria%20de%20falar%20com%20você."
              className="contact__button"
              target="_blank"
            >
              Enviar mensagem <ArrowRight />
            </a>
          }
        />
      </I18nextProvider>
    );
  });

  test("should render component with correct title when component rendered", () => {
    const expectedSocialMedia = "Whatsapp";
    const cardElement = screen.getByText(expectedSocialMedia);

    const textContent = cardElement.textContent?.trim();

    expect(textContent).toBe(expectedSocialMedia);
  });

  test("should render component with correct example label when component rendered", () => {
    const expectedPhone = "55 (11) 97381-3705";
    const cardElement = screen.getByText(expectedPhone);
    const textContent = cardElement.textContent?.trim();

    expect(textContent).toBe(expectedPhone);
  });
});

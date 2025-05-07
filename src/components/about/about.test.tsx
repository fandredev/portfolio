import { screen, render } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";

import i18n from "services/i18n";

import About from ".";

describe(`${About.name} component`, () => {
  beforeEach(() => {
    render(
      <I18nextProvider i18n={i18n}>
        <About />
      </I18nextProvider>
    );
  });

  test("should render correct title when component loads", () => {
    const expectedTitle = "Sobre mim";

    const getElementTitle = screen.getByText(expectedTitle);

    expect(getElementTitle.textContent).toBe(expectedTitle);
  });

  test('should render image with alt "Felipe André" when component loads', () => {
    const expectedAlt = "Felipe André";

    const getElementImg = screen.getByAltText(expectedAlt);
    const attributeAltForImage = getElementImg.getAttribute("alt");

    expect(attributeAltForImage).toBe(expectedAlt);
  });

  test("should render three mini cards with informations about me", () => {
    const expectedQuantityOfMiniCards = 3;

    for (let i = 0; i < expectedQuantityOfMiniCards; i++) {
      const getMiniCard = screen.getByTestId(`information-item-card-${i}`);

      expect(getMiniCard).not.toBeNull();
    }
  });

  test("should verify my curriculum render the download link correctly", () => {
    const curriculumPath = "/src/assets/curriculum-vitae.pdf";

    const getCurriculum: HTMLAnchorElement = screen.getByRole("link", {
      name: "Baixar currículo",
    });

    const hrefAttribute = getCurriculum.getAttribute("href");

    expect(hrefAttribute).toBe(curriculumPath);
  });
});

import { screen, render } from "@testing-library/react";

import { I18nextProvider } from "react-i18next";
import { describe, test, expect, beforeEach } from "vitest";
import i18n from "../../../i18n";
import { projectsData } from "../work-data";
import WorkItems from "../work-items";

describe(`${WorkItems.name} component`, () => {
  beforeEach(() => {
    render(
      <I18nextProvider i18n={i18n}>
        <WorkItems item={projectsData[0]} />
      </I18nextProvider>
    );
  });

  test("should render component with correct image from the project when components receive the project data", () => {
    const { title, image } = projectsData[0];
    const imageElement: HTMLImageElement = screen.getByAltText(
      projectsData[0].title
    );

    const getAttributeAlt = imageElement.getAttribute("alt");
    const getSrcAttribute = imageElement.getAttribute("src");

    expect(getAttributeAlt).toBe(title);
    expect(getSrcAttribute).toBe(image);
  });

  test("should render component with correct title from the project when components receive the project data", () => {
    const { title } = projectsData[0];
    const titleElement = screen.getByText(title);
    const textContent = titleElement.textContent;

    expect(textContent).toBe(title);
  });

  test("should render component with correct anchor link to project components receive the project data", () => {
    const { hrefProject } = projectsData[0];

    const anchorElement = screen.getByRole("button");
    const hrefTextContent = anchorElement.getAttribute("href");

    expect(hrefTextContent).toBe(hrefProject);
  });
});
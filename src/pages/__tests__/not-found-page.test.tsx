import { act } from "react";

import { render, screen } from "@testing-library/react";
import NotFound from "pages/not-found";
import { MemoryRouter } from "react-router-dom";
import { describe, test, beforeEach } from "vitest";

describe(`${NotFound.name}`, () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );
  });
  test("renders correctly when components loads", () => {
    const notFoundPageContainer = screen.getByTestId("not-found-page");

    expect(notFoundPageContainer).toBeDefined();
  });

  test("renders the ghost image with title page when user enters in not found page", () => {
    const ghostImage = screen.getByAltText(
      "Um fantasma assombrando você por ter entrado em uma página não encontrada."
    );

    expect(ghostImage).toBeDefined();
  });

  test("renders the title of the page when user enters in not found page", () => {
    const title = screen.getByText("Página não encontrada");

    expect(title).toBeDefined();
  });

  test("renders the description of the page when user enters in not found page", () => {
    const description = screen.getByText(
      "Whoops! Esta página deve ser um fantasma - ela não existe e você precisa correr daqui!"
    );

    expect(description).toBeDefined();
  });

  test("renders the back button to go back to home page", () => {
    const backButton = screen.getByText("Encontrar abrigo");
    const expectedUrlToNavigate = "/";

    expect(backButton).toBeDefined();

    act(() => backButton.click());

    expect(window.location.pathname).toBe(expectedUrlToNavigate);
  });
});

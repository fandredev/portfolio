// import "@testing-library/jest-dom";
import { cleanup } from "@testing-library/react";
import i18n from "services/i18n";
import { afterEach } from "vitest";

afterEach(() => {
  cleanup();
});

beforeAll(() => {
  i18n.changeLanguage("pt-BR");
});

// import "@testing-library/jest-dom";
import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

import i18n from "services/i18n";

afterEach(() => {
  cleanup();
});

beforeAll(() => {
  i18n.changeLanguage("pt-BR");
});

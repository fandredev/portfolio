import { screen, render } from "@testing-library/react";
import { describe, test, expect, beforeEach } from "vitest";

import Chip from ".";

describe(`${Chip.name} component`, () => {
  beforeEach(() => {
    render(<Chip label="react" />);
  });

  test("should should render the correct label", () => {
    const chip = screen.getByRole("alert");
    const textContent = chip.textContent;

    expect(textContent).toBe("react");
  });
});

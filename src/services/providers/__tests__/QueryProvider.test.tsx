import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import QueryProvider from "../QueryProvider";

describe("QueryProvider", () => {
  test("should render children correctly", () => {
    render(
      <QueryProvider>
        <div data-testid="test-child">Child Content</div>
      </QueryProvider>
    );

    expect(screen.getByTestId("test-child")).toBeDefined();
    expect(screen.getByText("Child Content")).toBeDefined();
  });
});

import { render } from "@testing-library/react";
import NameContext from "context/NameContext";
import { describe, expect, test } from "vitest";

import useNameContext from "../use-name-context";

const UseTestContextComponent = () => {
  const context = useNameContext();
  return <p>{context.name}</p>;
};

describe(`${useNameContext.name}:`, () => {
  test("should return correct context when Provider is present", () => {
    const mockContext = { name: "Felipe", setName: () => {} };

    const { getByText } = render(
      <NameContext.Provider value={mockContext}>
        <UseTestContextComponent />
      </NameContext.Provider>
    );

    expect(getByText("Felipe")).toBeDefined();
  });

  test("should return an error when context not exist", () => {
    // Verifica se o erro é lançado ao renderizar sem Provider
    expect(() => render(<UseTestContextComponent />)).toThrow(
      "Name Context not exist"
    );
  });
});

import { render } from "@testing-library/react";

import NameContext from "../../context/NameContext";
import useNameContext from "../use-name-context";

const UseTestContextComponent = () => {
  const context = useNameContext();
  return <p>{context.name}</p>;
};

describe(`${useNameContext.name}:`, () => {
  it("should return correct context when Provider is present", () => {
    const mockContext = { name: "Felipe", setName: () => {} };

    const { getByText } = render(
      <NameContext.Provider value={mockContext}>
        <UseTestContextComponent />
      </NameContext.Provider>
    );

    expect(getByText("Felipe")).toBeDefined();
  });

  it("should return an error when context not exist", () => {
    // Verifica se o erro é lançado ao renderizar sem Provider
    expect(() => render(<UseTestContextComponent />)).toThrow(
      "Name Context not exist"
    );
  });
});

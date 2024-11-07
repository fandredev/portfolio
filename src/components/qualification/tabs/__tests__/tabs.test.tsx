import { render, screen } from "@testing-library/react";
import i18n from "services/i18n";
import { BriefcaseBusiness } from "lucide-react";
import { I18nextProvider } from "react-i18next";

import Tab from "..";

describe(`${Tab.name} component`, () => {
  beforeEach(() => {
    render(
      <I18nextProvider i18n={i18n}>
        <Tab
          title="Educação"
          icon={<BriefcaseBusiness />}
          isActiveTab
          handleToggleTab={() => {}}
        />
      </I18nextProvider>
    );
  });

  test("should render component with title and icon when component rendered", () => {
    const title = screen.getByText("Educação");
    const textContent = title.textContent;

    expect(textContent).toBe("Educação");
  });

  test("should correct class 'qualification__active' when tab is active", () => {
    const tab = screen.getByRole("button");

    const classList = tab.classList;

    expect(classList.contains("qualification__active")).toBe(true);
  });
});

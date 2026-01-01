import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, test, vi, beforeEach } from "vitest";

import Stats from "pages/stats";
import { useWakatimeStats } from "hooks/use-wakatime-stats";

vi.mock("hooks/use-wakatime-stats");
vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

vi.mock("recharts", () => ({
  ResponsiveContainer: ({ children }: any) => <div>{children}</div>,
  BarChart: ({ children }: any) => (
    <div data-testid="bar-chart">{children}</div>
  ),
  Bar: () => <div>Bar</div>,
  XAxis: () => <div>XAxis</div>,
  YAxis: () => <div>YAxis</div>,
  CartesianGrid: () => <div>CartesianGrid</div>,
  Tooltip: () => <div>Tooltip</div>,
  PieChart: ({ children }: any) => (
    <div data-testid="pie-chart">{children}</div>
  ),
  Pie: ({ children }: any) => <div data-testid="pie">{children}</div>,
  Cell: () => <div>Cell</div>,
  Legend: () => <div>Legend</div>,
}));

describe("Stats Page", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test("should render skeleton when loading", () => {
    (useWakatimeStats as any).mockReturnValue({
      chartData: [],
      isLoading: true,
      isError: false,
      isFetched: false,
    });

    const { container } = render(
      <MemoryRouter>
        <Stats />
      </MemoryRouter>
    );

    const skeletons = container.querySelectorAll(".skeleton");
    expect(skeletons.length).toBeGreaterThan(0);
  });

  test("should render error component when there is an error", () => {
    (useWakatimeStats as any).mockReturnValue({
      chartData: [],
      isLoading: false,
      isError: true,
      isFetched: true,
    });

    render(
      <MemoryRouter>
        <Stats />
      </MemoryRouter>
    );

    expect(screen.getByTestId("error-component")).toBeDefined();
  });

  test("should render charts when data is loaded", () => {
    (useWakatimeStats as any).mockReturnValue({
      chartData: [{ name: "TypeScript", percent: 100 }],
      isLoading: false,
      isError: false,
      isFetched: true,
    });

    render(
      <MemoryRouter>
        <Stats />
      </MemoryRouter>
    );

    expect(screen.getByText("stats.bar_chart_title")).toBeDefined();
    expect(screen.getByText("stats.pie_chart_title")).toBeDefined();
    expect(screen.getByTestId("bar-chart")).toBeDefined();
    expect(screen.getByTestId("pie-chart")).toBeDefined();
  });
});

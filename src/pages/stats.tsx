import { useTranslation } from "react-i18next";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

import Skeleton from "components/loader/skeleton";

import Error from "components/error";
import { useWakatimeStats } from "hooks/use-wakatime-stats";

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#8884d8",
  "#82ca9d",
  "#ffc658",
];

export default function Stats() {
  const { chartData, isLoading, isError, isFetched } = useWakatimeStats();
  const { t } = useTranslation();

  if (isError) {
    return <Error />;
  }

  const isLoadingData = isLoading || !isFetched;

  return (
    <div className="stats-content">
      {isLoadingData ? (
        <div className="skeleton-container">
          <div className="skeleton-charts-group">
            <Skeleton variant="title" width="60%" height="2rem" />
            <Skeleton variant="rect" width="100%" height="400px" />
          </div>
          <div className="skeleton-charts-group">
            <Skeleton variant="title" width="60%" height="2rem" />
            <Skeleton variant="rect" width="100%" height="400px" />
          </div>
        </div>
      ) : (
        <>
          <div className="chart-wrapper">
            <h3 className="chart-title">{t("stats.bar_chart_title")}</h3>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart
                data={chartData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip
                  formatter={(value: number) => [
                    `${Math.round(value)}%`,
                    t("stats.percentage"),
                  ]}
                />
                <Bar dataKey="percent" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="chart-wrapper">
            <h3 className="chart-title">{t("stats.pie_chart_title")}</h3>
            <ResponsiveContainer width="100%" height={400}>
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) =>
                    `${name} ${(percent * 1).toFixed(0)}%`
                  }
                  outerRadius={120}
                  fill="#8884d8"
                  dataKey="percent"
                >
                  {chartData?.map((_, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </>
      )}
    </div>
  );
}

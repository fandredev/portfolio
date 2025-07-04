import { useTranslation } from "react-i18next";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import Error from "components/error";
import Loader from "components/loader";
import Translator from "hooks/use-translator";
import { useWakatimeStats } from "hooks/use-wakatime-stats";

export default function Stats() {
  const { chartData, isLoading, isError, isFetched } = useWakatimeStats();
  const { t } = useTranslation();

  if (isError) {
    return <Error />;
  }

  return (
    <>
      {!isLoading ? (
        <>
          {!isFetched && (
            <Loader>
              <p>
                <Translator path="stats.loading_stats_data" />
              </p>
            </Loader>
          )}

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
        </>
      ) : (
        <Loader>
          <p>
            <Translator path="home.loading" />
          </p>
        </Loader>
      )}
    </>
  );
}

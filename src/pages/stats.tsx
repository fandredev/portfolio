import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import ErrorAPI from "../components/error";
import Loader from "../components/loader";

import Translator from "../hooks/use-translator";
import { useWakatimeStats } from "../hooks/use-wakatime-stats";

export default function Stats() {
  const { chartData, isLoading, isError } = useWakatimeStats();

  if (isError) {
    return <ErrorAPI />;
  }

  return (
    <>
      {!isLoading ? (
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={chartData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="percent" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
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

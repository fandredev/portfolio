import { useQuery } from "@tanstack/react-query";
import { api } from "../services/axios";

const URL = import.meta.env.VITE_API_URL_PORTFOLIO;

interface Languages {
  name: string;
  total_seconds: number;
  percent: number;
  digital: string;
  decimal: string;
  text: string;
  hours: number;
  minutes: number;
}

interface WakatimeLanguages {
  languages: Languages[];
}

const searchMyLanguages = async () => {
  const response = await api.get<WakatimeLanguages>(
    `${URL}/wakatime/languages`
  );
  if (!response.data) {
    throw new Error("Erro ao pegar minhas linguagens mais usadas!");
  }

  return response.data;
};

const useWakatimeStats = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["wakatime"],
    queryFn: searchMyLanguages,
  });

  const chartData = data?.languages
    .map((item) => ({
      name: item.name,
      percent: item.percent,
    }))
    .slice(0, 7);

  return {
    data,
    chartData,
    isLoading,
    isError,
  };
};

export { useWakatimeStats };

import { useQuery } from "@tanstack/react-query";

const URL = import.meta.env.VITE_API_URL_PORTFOLIO;

interface WakatimeLanguages {
  languages: {
    name: string;
    total_seconds: number;
    percent: number;
    digital: string;
    decimal: string;
    text: string;
    hours: number;
    minutes: number;
  }[];
}

const searchMyLanguages = async () => {
  const response = await fetch(`${URL}/wakatime/languages`);
  if (!response.ok) {
    throw new Error("Erro ao pegar minhas linguagens mais usadas!");
  }

  const responseData: WakatimeLanguages = await response.json();

  return responseData["languages"];
};

const useWakatimeStats = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["wakatime"],
    queryFn: searchMyLanguages,
  });

  const chartData = data
    ?.map((item) => ({
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

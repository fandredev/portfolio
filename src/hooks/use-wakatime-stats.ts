import { useQuery } from "@tanstack/react-query";
import { api } from "services/axios";

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

const placeholderData: Languages[] = [
  {
    name: "Typescript",
    total_seconds: 5400,
    percent: 30,
    digital: "1:30",
    decimal: "1.5",
    text: "1 hr 30 mins",
    hours: 1,
    minutes: 30,
  },
  {
    name: "Python",
    total_seconds: 3600,
    percent: 20,
    digital: "1:00",
    decimal: "1.0",
    text: "1 hr",
    hours: 1,
    minutes: 0,
  },
  {
    name: "HTML",
    total_seconds: 1800,
    percent: 10,
    digital: "0:30",
    decimal: "0.5",
    text: "30 mins",
    hours: 0,
    minutes: 30,
  },
];

const searchMyLanguages = async () => {
  const response = await api.get<Languages[]>(`${URL}/wakatime/languages`);
  if (!response.data) {
    throw new Error("Erro ao pegar minhas linguagens mais usadas!");
  }

  return response.data;
};

const useWakatimeStats = () => {
  const { data, isLoading, isError, isFetched } = useQuery({
    queryKey: ["wakatime"],
    queryFn: searchMyLanguages,
    placeholderData,
    staleTime: 1000 * 60 * 5, // 5min
  });

  console.log(data, "Data");

  const chartData = data?.map((item) => ({
    name: item.name,
    percent: item.percent,
  }));

  return {
    data,
    chartData,
    isLoading,
    isError,
    isFetched,
  };
};

export { useWakatimeStats };

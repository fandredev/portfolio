import { useEffect, useState } from "react";

import axios from "axios";

const API_KEY = import.meta.env.VITE_WAKATIME_API_KEY;

const URL = `https://wakatime.com/api/v1/users/current/stats/last_7_days?api_key=${API_KEY}`;

interface WakatimeLanguages {
  name: string;
  total_seconds: number;
  percent: number;
  digital: string;
  decimal: string;
  text: string;
  hours: number;
  minutes: number;
}

interface WakatimeStatsReturn {
  languages: WakatimeLanguages[];
  loadingWaketime: boolean;
  errorWakatime: string;
}

export function useWakatimeStats(): WakatimeStatsReturn {
  const [languages, setLanguages] = useState<WakatimeLanguages[]>([]);
  const [loadingWaketime, setLoadingWaketime] = useState(true);
  const [errorWakatime, setErrorWakatime] = useState("");

  async function searchWakatimeStats() {
    try {
      const response = await axios.get(URL, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const languages: WakatimeLanguages[] = response.data.data.languages;
      setLanguages(languages);
    } catch (error) {
      console.error("Error fetching Wakatime data", error);
      setErrorWakatime("Error fetching Wakatime data");
    } finally {
      setLoadingWaketime(false);
    }
  }

  useEffect(() => {
    searchWakatimeStats();
  }, []);

  return {
    languages,
    loadingWaketime,
    errorWakatime,
  };
}

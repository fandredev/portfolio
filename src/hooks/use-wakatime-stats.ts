import { useEffect, useState } from "react";

import axios from "axios";

const URL = `http://localhost:3000/wakatime/stats`;

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
      const languages: WakatimeLanguages[] = response.data.languages;
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

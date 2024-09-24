import { useWakatimeStats } from "../../hooks/use-wakatime-stats";

export default function WakatimeStats() {
  const { languages } = useWakatimeStats();

  console.log(languages);

  return <div>WakatimeStats</div>;
}

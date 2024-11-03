import "./chip.css";

interface ChipProps {
  label: string;
}

export default function Chip({ label }: ChipProps) {
  return (
    <div className="chip" role="alert">
      {label}
    </div>
  );
}

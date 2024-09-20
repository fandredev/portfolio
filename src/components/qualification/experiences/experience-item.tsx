import { CalendarDays } from "lucide-react";
import { QualificationExperiencesProps } from ".";

export default function QualificationExperiencesItem({
  charger,
  company,
  time,
}: QualificationExperiencesProps) {
  return (
    <div className="qualification__data" role="listitem">
      <div>
        <h3 className="qualification__title">{charger}</h3>
        <span className="qualification__subtitle">{company}</span>
        <div className="qualification__calender">
          <CalendarDays size={14} />
          {time}
        </div>
      </div>
    </div>
  );
}

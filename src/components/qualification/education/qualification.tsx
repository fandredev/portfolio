import { CalendarDays } from "lucide-react";

import { QualificationEducationProps } from "./data";

export default function QualificationEducationItem({
  course,
  locality,
  time,
}: QualificationEducationProps) {
  return (
    <div
      className="qualification__data"
      data-testid="qualification-data-test-id"
    >
      <div>
        <h3 className="qualification__title">{course}</h3>
        <span className="qualification__subtitle">{locality}</span>
        <div className="qualification__calender">
          <div className="qualification__calender">
            <CalendarDays size={14} />
            {time}
          </div>
        </div>
      </div>
    </div>
  );
}

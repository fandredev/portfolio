import { qualificationEducations } from "./data/qualification-data";
import QualificationEducationItem from "./qualification";

export default function Education() {
  return (
    <div className="qualification__content qualification__content-active">
      {qualificationEducations.map((education, index) => (
        <QualificationEducationItem key={index} {...education} />
      ))}
    </div>
  );
}

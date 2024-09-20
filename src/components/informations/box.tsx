import { ReactNode } from "react";

export interface InformationBoxProps {
  icon: ReactNode;
  text: ReactNode;
}

export default function InformationBox({
  icon,
  text,
  index,
}: InformationBoxProps & { index: number }) {
  return (
    <div className="about__box" data-testid={`information-item-card-${index}`}>
      {icon}
      <h3 className="about__title">
        <span className="about__subtitle">{text}</span>
      </h3>
    </div>
  );
}

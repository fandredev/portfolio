import { ReactNode } from 'react';
import { CalendarDays } from 'lucide-react';
import Translator from '../../../hooks/use-translator';

interface QualificationEducationProps {
  course: ReactNode;
  locality: string;
  time: string;
}

const qualificationEducations: QualificationEducationProps[] = [
  {
    course: (
      <Translator path="education.assistente_de_desenvolvimento_de_aplicativos_computacionais" />
    ),
    locality: 'Senac Lapa Tito - SP',
    time: '2019 - 2020',
  },
  {
    course: (
      <Translator path="education.assistente_de_operacao_de_redes_de_computadores" />
    ),
    locality: 'Senac Lapa Tito - SP',
    time: '2018 - 2019',
  },
];

export default function Education() {
  return (
    <div className="qualification__content qualification__content-active">
      {qualificationEducations.map((education, index) => (
        <QualificationEducation key={index} {...education} />
      ))}
    </div>
  );
}

function QualificationEducation({
  course,
  locality,
  time,
}: QualificationEducationProps) {
  return (
    <div className="qualification__data">
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

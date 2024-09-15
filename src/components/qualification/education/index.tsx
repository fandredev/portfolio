interface QualificationEducationProps {
  course: string;
  locality: string;
  time: string;
}

const qualificationEducations: QualificationEducationProps[] = [
  {
    course: 'Assistente de desenvolvimento de aplicativos computacionais',
    locality: 'Senac Lapa Tito - SP',
    time: '2019 - 2020',
  },
  {
    course: 'Assistente de operação de redes de computadores',
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
          <i className="uil uil-calendar-alt">{time}</i>
        </div>
      </div>
    </div>
  );
}

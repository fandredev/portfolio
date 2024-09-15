import { CalendarDays } from 'lucide-react';

type QualificationExperienceCompanyName =
  | 'Luby'
  | '4you2 idiomas'
  | 'Zapsign'
  | 'Nan Systems';

interface QualificationExperiencesProps {
  company: QualificationExperienceCompanyName;
  charger: string;
  time: string;
}

const qualificationExperiences: QualificationExperiencesProps[] = [
  {
    company: 'Luby',
    charger: 'Programador Júnior',
    time: 'Ago 2019 - Jul 2020',
  },
  {
    company: '4you2 idiomas',
    charger: 'Programador Júnior',
    time: 'Set 2020 - Jan 2021',
  },
  {
    company: 'Zapsign',
    charger: 'Desenvolvedor Full-Stack Pleno',
    time: 'Dez 2020 - Jan 2024',
  },
  {
    company: 'Nan Systems',
    charger: 'Desenvolvedor Full-Stack Pleno',
    time: 'Fev 2024 - atual',
  },
];

const qualificationExperiencesReverse = [...qualificationExperiences].reverse();

export default function QualificationExperience() {
  return (
    <div className="qualification__content">
      {qualificationExperiencesReverse.map((experience, index) => (
        <QualificationExperiencesItem key={index} {...experience} />
      ))}
    </div>
  );
}

function QualificationExperiencesItem({
  charger,
  company,
  time,
}: QualificationExperiencesProps) {
  return (
    <div className="qualification__data">
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

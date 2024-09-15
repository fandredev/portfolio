import { useState } from 'react';
import './qualification.css';
import QualificationExperience from './experiences';
import Tab, { tabs } from './tabs';
import Education from './education';

export default function Qualification() {
  const [tabEducation, setTabEducation] = useState(true);

  function toggleTab() {
    setTabEducation(!tabEducation);
  }

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualificação</h2>
      <span className="section__subtitle">Minha jornada profissional</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          {tabs.map((tab) => (
            <Tab
              key={tab.id}
              {...tab}
              tabEducation={tabEducation}
              handleToggleTab={toggleTab}
            />
          ))}
        </div>
        <div className="qualification__sections">
          {tabEducation ? <Education /> : <QualificationExperience />}
        </div>
      </div>
    </section>
  );
}

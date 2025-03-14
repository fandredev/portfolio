import { useState } from "react";

import Translator from "hooks/use-translator";

import Education from "./education";
import QualificationExperience from "./experiences";
import "./qualification.css";
import Tab, { tabs, TabsVariants } from "./tabs";

function Qualification() {
  const [activeTab, setActiveTab] = useState<TabsVariants>("experience");

  function toggleTab(tab: TabsVariants) {
    setActiveTab(tab);
  }

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">
        <Translator path="qualification.title" />
      </h2>
      <span className="section__subtitle">
        <Translator path="qualification.subtitle" />
      </span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          {tabs.map((tab) => (
            <Tab
              key={tab.id}
              icon={tab.icon}
              title={tab.title}
              isActiveTab={activeTab === tab.id}
              handleToggleTab={() => toggleTab(tab.id)}
            />
          ))}
        </div>

        <div className="qualification__sections">
          {activeTab === "education" ? (
            <Education />
          ) : (
            <QualificationExperience />
          )}
        </div>
      </div>
    </section>
  );
}

export default Qualification;

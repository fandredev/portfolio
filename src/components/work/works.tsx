import { MouseEvent, useEffect, useState } from 'react';
import { projectsData, projectsTabs } from './work-data';
import WorkItems from './work-items';

type ItemWorkName = 'all' | 'frontend' | 'backend';

interface ItemWork {
  name: ItemWorkName;
}

export default function Works() {
  const [tab, setTab] = useState<ItemWork>({ name: 'all' });
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const [active, setActive] = useState(0);

  const handleClick = (e: MouseEvent<HTMLSpanElement>, index: number) => {
    const target = e.target as HTMLSpanElement;
    const nameTab = target.innerText.toLowerCase() as ItemWorkName;

    setTab({
      name: nameTab,
    });
    setActive(index);
  };

  useEffect(() => {
    if (tab.name === 'all') {
      setFilteredProjects(projectsData);
    } else {
      const filteredProjects = projectsData.filter(
        (project) => project.category === tab.name
      );
      setFilteredProjects(filteredProjects);
    }
  }, [tab]);

  return (
    <div>
      <div className="work__filters">
        {projectsTabs.map((tab, index) => (
          <span
            onClick={(e) => handleClick(e, index)}
            className={`work__item ${active === index ? 'active' : ''}`}
            key={tab.id}
          >
            {tab.name}
          </span>
        ))}
      </div>

      <div className="work__container container grid">
        {filteredProjects.map((project) => (
          <WorkItems key={project.id} item={project} />
        ))}
      </div>
    </div>
  );
}

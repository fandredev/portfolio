import { MouseEvent, useEffect, useReducer } from "react";
import {
  INITIAL_STATE,
  ItemWorkName,
  workReducer,
} from "./reducer/work-reducer";
import { projectsData, projectsTabs } from "./work-data";
import WorkItems from "./work-items";

export default function Works() {
  const [{ active, filteredProjects, tab }, dispatch] = useReducer(
    workReducer,
    INITIAL_STATE
  );

  const handleClick = (e: MouseEvent<HTMLSpanElement>, index: number) => {
    const target = e.target as HTMLSpanElement;
    const nameTab = target.innerText.toLowerCase() as ItemWorkName;

    dispatch({
      type: "CHANGE_TAB",
      payload: {
        name: nameTab,
        currentTabActive: index,
      },
    });
  };

  useEffect(() => {
    if (tab === "all") {
      dispatch({
        type: "SET_FILTERED_PROJECTS",
        payload: projectsData,
      });
    } else {
      const filteredProjects = projectsData.filter(
        (project) => project.category === tab
      );
      dispatch({
        type: "SET_FILTERED_PROJECTS",
        payload: filteredProjects,
      });
    }
  }, [tab]);

  return (
    <div>
      <div className="work__filters">
        {projectsTabs.map((tab, index) => (
          <span
            onClick={(e) => handleClick(e, index)}
            className={`work__item ${active === index ? "active" : ""}`}
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

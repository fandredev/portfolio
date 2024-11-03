import Translator from "hooks/use-translator";

import { Projects } from "./work-data";
import Chip from "../chip";

interface WorkItemsProps {
  item: Projects;
}

export default function WorkItems({ item }: WorkItemsProps) {
  return (
    <div className="work__card" key={item.id}>
      <img
        width={640}
        height={282}
        src={item.image}
        alt={item.title}
        className="work__img"
        loading="lazy"
      />
      <h3 className="work__title">{item.title}</h3>
      {item.techs && (
        <>
          {item.techs.map((tech) => (
            <Chip key={tech} label={tech} />
          ))}
        </>
      )}
      <div className="work__icons">
        <a
          role="button"
          href={item.hrefProject}
          target="_blank"
          className="work__button"
          aria-label="Project"
        >
          {item.hrefProject && <Translator path="portfolio.see_project" />}
        </a>
        <a
          role="button"
          href={item.hrefGithub}
          target="_blank"
          className="work__button"
          aria-label="Github"
        >
          {item.hrefGithub && <Translator path="portfolio.see_repository" />}
        </a>
      </div>
    </div>
  );
}

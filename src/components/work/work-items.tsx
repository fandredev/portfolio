import { ArrowRight } from "lucide-react";
import { Projects } from "./work-data";
import Translator from "../../hooks/use-translator";
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
      <a
        role="button"
        href={item.hrefProject}
        target="_blank"
        className="work__button"
      >
        {item.hasDeployed ? (
          <Translator path="portfolio.see_project" />
        ) : (
          <Translator path="portfolio.see_repository" />
        )}
        <ArrowRight className="work__button-icon" />
      </a>
    </div>
  );
}

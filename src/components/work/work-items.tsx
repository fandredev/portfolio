import { ArrowRight } from 'lucide-react';
import { Projects } from './work-data';

interface WorkItemsProps {
  item: Projects;
}

export default function WorkItems({ item }: WorkItemsProps) {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt={item.title} className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      <p>{item.description}</p>
      <a href={item.hrefProject} target="_blank" className="work__button">
        Demo <ArrowRight className="work__button-icon" />
      </a>
    </div>
  );
}

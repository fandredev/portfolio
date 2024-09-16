import { ReactNode } from 'react';
import { BriefcaseBusiness, GraduationCap } from 'lucide-react';
import Translator from '../../../hooks/use-translator';

export type TabsVariants = 'education' | 'experience';

interface TabsProps {
  id: TabsVariants;
  icon: ReactNode;
  title: ReactNode;
}

export const tabs: TabsProps[] = [
  {
    id: 'experience',
    icon: <BriefcaseBusiness />,
    title: <Translator path="tabs.experience" />,
  },
  {
    id: 'education',
    icon: <GraduationCap />,
    title: <Translator path="tabs.education" />,
  },
];

export default function Tab({
  icon,
  title,
  isActiveTab,
  handleToggleTab,
}: Pick<TabsProps, 'icon' | 'title'> & {
  isActiveTab: boolean;
  handleToggleTab: () => void;
}) {
  return (
    <div
      className={`qualification__button button--flex ${
        isActiveTab ? 'qualification__active' : ''
      }`}
      onClick={handleToggleTab}
    >
      <span className="qualification__icon">{icon}</span>
      {title}
    </div>
  );
}

import { BriefcaseBusiness, GraduationCap } from 'lucide-react';
import { ReactNode } from 'react';

export type TabsVariants = 'education' | 'experience';

interface TabsProps {
  id: TabsVariants;
  icon: ReactNode;
  title: string;
}

export const tabs: TabsProps[] = [
  {
    id: 'experience',
    icon: <BriefcaseBusiness />,
    title: 'Experiência',
  },
  {
    id: 'education',
    icon: <GraduationCap />,
    title: 'Educação',
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

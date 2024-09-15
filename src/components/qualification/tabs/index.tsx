interface TabsProps {
  id: string;
  icon: string;
  title: string;
}

export const tabs: TabsProps[] = [
  {
    id: 'education',
    icon: 'uil uil-graduation-cap',
    title: 'Educação',
  },
  {
    id: 'experience',
    icon: 'uil uil-briefcase-alt',
    title: 'Experiência',
  },
];

export default function Tab({
  icon,
  title,
  tabEducation,
  handleToggleTab,
}: Pick<TabsProps, 'icon' | 'title'> & {
  tabEducation: boolean;
  handleToggleTab: () => void;
}) {
  return (
    <div
      className={`qualification__button button--flex ${
        tabEducation ? 'qualification__active' : ''
      }`}
      onClick={() => handleToggleTab()}
    >
      <i
        className={`
        "${icon} qualification__icon"
        `}
      ></i>
      {title}
    </div>
  );
}

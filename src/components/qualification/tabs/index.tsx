import { TabsProps } from "./data";

export default function Tab({
  icon,
  title,
  isActiveTab,
  handleToggleTab,
}: Pick<TabsProps, "icon" | "title"> & {
  isActiveTab: boolean;
  handleToggleTab: () => void;
}) {
  return (
    <div
      className={`qualification__button button--flex ${
        isActiveTab ? "qualification__active" : ""
      }`}
      onClick={handleToggleTab}
      role="button"
    >
      <span className="qualification__icon">{icon}</span>
      {title}
    </div>
  );
}

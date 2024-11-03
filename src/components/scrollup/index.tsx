import { useScrollVisibility } from "hooks/use-scroll-visibility";
import { ArrowUp } from "lucide-react";
import { useTranslation } from "react-i18next";

import "./scroll-up.css";

export default function ScrollUp() {
  const { t } = useTranslation();
  useScrollVisibility();

  return (
    <a href="#" className="scrollup" aria-label={t("aria_labels.scroll_up")}>
      <ArrowUp strokeWidth={1} className="scrollup__icon" />
    </a>
  );
}

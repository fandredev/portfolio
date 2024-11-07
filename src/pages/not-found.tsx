import "./styles/not-found.css";

import ghostImage from "assets/not-found/ghost.svg";
import Footer from "components/footer";
import { NameProvider } from "context/NameContext";
import Translator from "hooks/use-translator";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="not-found-container" data-testid="not-found-page">
      <div className="not-found-content">
        <div className="not-found-container-ghost">
          <span>4</span>
          <img src={ghostImage} alt={t("alt_image.ghost")} />
          <span>4</span>
        </div>
        <div className="not-found-container-informations">
          <h1>
            <Translator path="not_found.title" />
          </h1>
          <p>
            <Translator path="not_found.description" />
          </p>
        </div>

        <div>
          <button className="button" onClick={() => navigate("/")}>
            <Translator path="not_found.find_shelter" />
          </button>
        </div>
      </div>

      <NameProvider>
        <Footer />
      </NameProvider>
    </div>
  );
}

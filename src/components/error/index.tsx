import NotFound from "assets/not-found.webp";
import Translator from "hooks/use-translator";
import "./error.css";

const API_URL = import.meta.env.VITE_API_URL_PORTFOLIO;

export default function Error() {
  return (
    <div className="container-error">
      <div className="error">
        <div>
          <img src={NotFound} alt="Not Found page" />
        </div>
        <div>
          <Translator path="error_api.bad_request" />
          <a href={`${API_URL}/api/v1`} target="_blank">
            {" "}
            Ver <abbr title="Application Programming Interface">API</abbr>
          </a>
        </div>
      </div>
    </div>
  );
}

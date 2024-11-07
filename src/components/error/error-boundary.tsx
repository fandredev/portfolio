import "./error-boundary.css";

import ErrorWarning from "assets/not-found/error-warning.png";
import Footer from "components/footer";
import { NameProvider } from "context/NameContext";
import Translator from "hooks/use-translator";

export default function ErrorBoundaryComponent() {
  return (
    <>
      <main className="container error-boundary-container">
        <div>
          <img src={ErrorWarning} alt="Algum erro aconteceu" width={190} />
        </div>
        <div>
          <Translator path="error_page.description" />
          <a
            href="https://api.whatsapp.com/send?phone=11973813705&text=Olá%20Felipe%20André,%20gostaria%20de%20falar%20com%20você..."
            className="button mt-1"
            target="_blank"
          >
            <Translator path="contact.send_message" />
          </a>
        </div>
      </main>
      <NameProvider>
        <Footer />
      </NameProvider>
    </>
  );
}

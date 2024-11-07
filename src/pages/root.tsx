import ErrorBoundaryComponent from "components/error/error-boundary";
import Footer from "components/footer";
import { NameProvider } from "context/NameContext";
import { ErrorBoundary } from "react-error-boundary";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { LogError } from "services/error-boundary/error-logs";

export default function RootComponent() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        draggable
        pauseOnHover
        theme="colored"
      />
      <NameProvider>
        <ErrorBoundary
          FallbackComponent={ErrorBoundaryComponent}
          onError={LogError}
        >
          <Outlet />
          <Footer />
        </ErrorBoundary>
      </NameProvider>
    </>
  );
}

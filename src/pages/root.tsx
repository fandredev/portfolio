import { NameProvider } from "context/NameContext";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

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
        <Outlet />
      </NameProvider>
    </>
  );
}

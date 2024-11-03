import "i18n";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";

import { StrictMode } from "react";

import QueryProvider from "providers/QueryProvider";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { routes } from "routes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryProvider>
      <RouterProvider router={routes} />
    </QueryProvider>
  </StrictMode>
);

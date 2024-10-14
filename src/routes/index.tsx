import { createBrowserRouter } from "react-router-dom";
import Portfolio from "../pages/portfolio";
// import Stats from "../pages/stats";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Portfolio />,
  },
  {
    path: "/stats",
    element: "",
  },
]);

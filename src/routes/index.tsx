import WakatimeStats from "components/wakatime-stats";
import NotFound from "pages/not-found";
import Portfolio from "pages/portfolio";
import RootComponent from "pages/root";
import { createBrowserRouter } from "react-router-dom";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootComponent />,
    children: [
      {
        path: "/",
        element: <Portfolio />,
      },
      {
        path: "/stats",
        element: <WakatimeStats />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

import { lazy, Suspense } from "react";

import { createBrowserRouter } from "react-router-dom";

import Loader from "components/loader";
import RootComponent from "pages/root";

const Portfolio = lazy(() => import("pages/portfolio"));
const WakatimeStats = lazy(() => import("components/wakatime-stats"));
const NotFound = lazy(() => import("pages/not-found"));

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootComponent />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Loader />}>
            <Portfolio />
          </Suspense>
        ),
      },
      {
        path: "/stats",
        element: (
          <Suspense fallback={<Loader />}>
            <WakatimeStats />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "*",
    element: (
      <Suspense fallback={<Loader />}>
        <NotFound />
      </Suspense>
    ),
  },
]);

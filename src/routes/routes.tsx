import AllWorks from "@/pages/all-works/all-works";
import LandingPage from "@/pages/landing";
import { createBrowserRouter } from "react-router";

export const AppRoutes = createBrowserRouter([
  {
    children: [
      { path: "/", element: <LandingPage /> },
      { path: "works", element: <AllWorks /> },
    ],
  },
]);

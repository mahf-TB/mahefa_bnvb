import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
const Home = lazy(() => import("../pages/Home"));
const NotFound = lazy(() => import("../pages/NotFound"));
const ProjectsPage = lazy(() => import("@/pages/ProjectsPage"));

const routeFallbackElement = <div className="min-h-[40vh] w-full" aria-hidden="true" />;
// import ContactPage from "@/pages/ContactPage";
// import Experience from "@/pages/Experience";
// import About from "@/pages/About";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: (
      <Suspense fallback={routeFallbackElement}>
        <NotFound />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={routeFallbackElement}>
            <Home />
          </Suspense>
        ),
      },
      // {
      //   path: "about",
      //   element: <About />,
      // },
      // {
      //   path: "experience",
      //   element: <Experience />,
      // },
      {
        path: "projects",
        element: (
          <Suspense fallback={routeFallbackElement}>
            <ProjectsPage />
          </Suspense>
        ),
      },
      // {
      //   path: "contact",
      //   element: <ContactPage />,
      // },
      {
        path: "*",
        element: (
          <Suspense fallback={routeFallbackElement}>
            <NotFound />
          </Suspense>
        ),
      },
    ],
  },
]);

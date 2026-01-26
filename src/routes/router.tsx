import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import RootLayout from "../layouts/RootLayout";
import ProjectsPage from "@/pages/ProjectsPage";
import ContactPage from "@/pages/ContactPage";
import Experience from "@/pages/Experience";
import About from "@/pages/About";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Experience from "./pages/Experience";
// import ProjectsPage from "./pages/ProjectsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
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
        element: <ProjectsPage />,
      },
      // {
      //   path: "contact",
      //   element: <ContactPage />,
      // },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

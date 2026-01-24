import { Analytics } from "@vercel/analytics/react";
import { StrictMode } from "react";
import { ThemeProvider } from "./context/theme-provider.tsx";
import "./index.css";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <App />
      <Analytics />
    </ThemeProvider>
  </StrictMode>,
);

import { TooltipProvider } from "./components/ui/tooltip.tsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router.tsx";

export function App() {
  return (
    <TooltipProvider delayDuration={0}>
      <RouterProvider router={router} />
    </TooltipProvider>
  );
}

export default App;

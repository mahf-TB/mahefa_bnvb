import { TooltipProvider } from "./components/ui/tooltip.tsx";
import { router } from "./router.tsx";
import { RouterProvider } from "react-router-dom";

export function App() {
  return (
    <TooltipProvider delayDuration={0}>
      <RouterProvider router={router} />
    </TooltipProvider>
  );
}

export default App;

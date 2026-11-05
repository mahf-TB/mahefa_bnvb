"use client";

import { TooltipProvider } from "../shared/components/ui/tooltip";
import { ThemeProvider } from "../shared/context/theme-provider";
import type { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-ui-theme">
      <TooltipProvider delayDuration={0}>{children}</TooltipProvider>
    </ThemeProvider>
  );
}

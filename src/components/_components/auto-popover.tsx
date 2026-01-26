import React, { useEffect, useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { cn } from "@/lib/utils";

type Props = {
  title?: string;
  description?: string;
  children?: React.ReactNode;
  className?:string;
};

const AutoPopover: React.FC<Props> = ({
  title = "Bonjour",
  description = "Ceci est une info-bulle automatique.",
  children,
  className
}) => {
  const [open, setOpen] = useState(true);


  useEffect(() => {
    const onScroll = () => setOpen(window.scrollY < 10);
    window.addEventListener("scroll", onScroll, { passive: true });

    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <Popover open={open}>
        <PopoverTrigger asChild>
          <button className="bg-none hover:bg-none focus:outline-0">{children}</button>
        </PopoverTrigger>
        <PopoverContent
          className={cn("bg-background max-w-70 py-3 shadow-none", className)}
          showArrow={true}
          side={"bottom"}
        >
          <div className="space-y-3">
            <div className="space-y-1">
              <p className="font-medium text-[13px]">{title}</p>
              <p className="text-muted-foreground text-xs">{description}</p>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
  //   return (
  //     <div className="fixed right-4 top-16 z-50">
  //       <div className="max-w-xs bg-white dark:bg-zinc-900 text-black dark:text-white p-4 rounded-lg shadow-lg border">
  //         <div className="flex items-start justify-between gap-4">
  //           <div className="min-w-0">
  //             <h3 className="font-semibold text-sm">{title}</h3>
  //             {children ? <div className="mt-2 text-xs leading-tight">{children}</div> : null}
  //           </div>
  //           <button
  //             onClick={() => setOpen(false)}
  //             aria-label="Fermer"
  //             className="text-sm opacity-70 hover:opacity-100"
  //           >
  //             ×
  //           </button>
  //         </div>
  //       </div>
  //     </div>
  //   );
};

export default AutoPopover;

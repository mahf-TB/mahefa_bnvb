import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverAnchor,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface TourStep {
  title: string;
  description: string;
}

const tourSteps: TourStep[] = [
  {
    description:
      "This is your new workspace. Here you'll find all your projects, recent activities, settings, and more.",
    title: "Heart",
  },
  {
    description:
      "Use the toolbar above to create new projects, invite team members, or access settings.",

    title: "Diamond",
  },
  {
    description:
      "Click the support icon in the top right corner to access our help center and documentation.",

    title: "Club",
  },
  {
    description:
      "Press ⌘K to open the command palette. Use arrow keys to navigate and Enter to select an action.",

    title: "Spade",
  },
];

interface CardProps {
  number: number;
  isActive: boolean;
}

function Card({ number, isActive }: CardProps) {
  const content = (
    <div className="flex size-10 items-center justify-center rounded-md bg-secondary font-medium text-muted-foreground text-sm">
      {number + 1}
    </div>
  );

  return isActive ? <PopoverAnchor>{content}</PopoverAnchor> : content;
}

export default function PopoverTour() {
  const [currentTip, setCurrentTip] = useState(0);

  const handleNavigation = () => {
    if (currentTip === tourSteps.length - 1) {
      setCurrentTip(0);
    } else {
      setCurrentTip(currentTip + 1);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <Popover
        onOpenChange={(open) => {
          if (open) setCurrentTip(0);
        }}
      >
        <div className="grid grid-cols-2 place-items-center gap-4">
          {tourSteps.map((step, index) => (
            <Card
              isActive={currentTip === index}
              key={step.title}
              number={index}
            />
          ))}
        </div>

        <PopoverTrigger asChild>
          <Button variant="outline">Start tour</Button>
        </PopoverTrigger>

        <PopoverContent
          className="max-w-70 py-3 shadow-none"
          showArrow={true}
          side={currentTip % 2 === 0 ? "left" : "right"}
        >
          <div className="space-y-3">
            <div className="space-y-1">
              <p className="font-medium text-[13px]">
                {tourSteps[currentTip].title}
              </p>
              <p className="text-muted-foreground text-xs">
                {tourSteps[currentTip].description}
              </p>
            </div>
            <div className="flex items-center justify-between gap-2">
              <span className="text-muted-foreground text-xs">
                {currentTip + 1}/{tourSteps.length}
              </span>
              <button
                className="font-medium text-xs hover:underline"
                onClick={handleNavigation}
                type="button"
              >
                {currentTip === tourSteps.length - 1 ? "Start over" : "Next"}
              </button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}

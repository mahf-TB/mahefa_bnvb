import { BLUR_FADE_DELAY } from "@/constant";
import { DATA } from "@/data/data";
import {
  Location,
  SquareArrowUpRight,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { HeaderSection } from "./_components/header-section";
import { BlurFade } from "./ui/blur-fade";

const Education = () => {
  return (
    <div className="flex min-h-0 flex-col gap-y-8 w-full">
      <div className="flex flex-col gap-y-4 items-start justify-center">
        <HeaderSection
          title="Mon parcours académique"
          description="Formation solide et continue pour rester à la pointe du
            développement."
        />
        <div className="flex flex-col gap-8 w-full">
          {DATA.education.map((education, index) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + index * 0.05}
            >
              <a
                href={education.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex sm:flex-row flex-col sm:items-center  sm:gap-3 gap-2 justify-between group"
              >
                <div className="flex items-center gap-x-3 flex-1 min-w-0">
                  {education.logoUrl ? (
                    <img
                      src={education.logoUrl}
                      alt={education.school}
                      className="size-10 md:size-14 bg-white p-1 border rounded-full shadow ring-2 ring-border overflow-hidden object-contain flex-none"
                    />
                  ) : (
                    <div className="size-10 md:size-14 p-1 border rounded-full shadow ring-2 ring-border bg-muted flex-none" />
                  )}
                  <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                    <div className="font-semibold leading-none flex items-center gap-2">
                      {education.school}
                      {education.href && (
                        <HugeiconsIcon
                          icon={SquareArrowUpRight}
                          name="external-link"
                          className="h-3.5 w-3.5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                          aria-hidden
                        />
                      )}
                    </div>
                    <div className="font-sans text-left text-sm text-muted-foreground">
                      {education.degree}
                    </div>
                    <div className="font-sans text-left text-sm text-muted-foreground">
                      <HugeiconsIcon
                        icon={Location}
                        name="location"
                        className="h-3.5 w-3.5 inline-block mr-1 text-muted-foreground"
                        aria-hidden
                      />
                      {education.location}
                    </div>
                  </div>
                </div>
                <div className="flex items-center ml-12 gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none">
                  {education.start === education.end ? (
                    <span>{education.start}</span>
                  ) : (
                    <span>
                      {education.start} - {education.end}
                    </span>
                  )}
                </div>
              </a>
            </BlurFade>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;

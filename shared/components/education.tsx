import { DATA } from "../data/data";
import {
    Location,
    SquareArrowUpRight,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { HeaderSection } from "./_components/header-section";
import { OptimizedImage } from "./ui/optimized-image";

const Education = () => {
  return (
    <div className="flex min-h-0 flex-col gap-y-8 w-full">
      <div className="flex flex-col gap-y-4 items-start justify-center">
        {/* <HeaderSection
          title="Mon parcours académique"
          description="Formation solide et continue pour rester à la pointe du
            développement."
        /> */}
        <HeaderSection
  title="My Academic Journey"
  description="A solid and continuous education to stay at the forefront of development."
/>
        <div className="flex w-full flex-col gap-8">
          {DATA.education.map((education, i) => (
            <Link
              key={i}
              href={education.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between gap-2 sm:flex-row sm:items-center sm:gap-3"
            >
              <div className="flex min-w-0 flex-1 items-center gap-x-3">
                {education.logoUrl ? (
                  <OptimizedImage
                    src={education.logoUrl}
                    alt={education.school}
                    className="size-10 flex-none overflow-hidden rounded-full border bg-white p-1 object-contain shadow ring-2 ring-border md:size-14"
                    wrapperClassName="size-10 md:size-14 rounded-full"
                  />
                ) : (
                  <div className="size-10 flex-none rounded-full border bg-muted p-1 shadow ring-2 ring-border md:size-14" />
                )}
                <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                  <div className="flex items-center gap-2 font-semibold leading-none">
                    {education.school}
                    {education.href && (
                      <HugeiconsIcon
                        icon={SquareArrowUpRight}
                        name="external-link"
                        className="h-3.5 w-3.5 -translate-x-2 text-muted-foreground opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
                        aria-hidden
                      />
                    )}
                  </div>
                  <div className="text-left font-sans text-sm text-muted-foreground">
                    {education.degree}
                  </div>
                  <div className="text-left font-sans text-sm text-muted-foreground">
                    <HugeiconsIcon
                      icon={Location}
                      name="location"
                      className="mr-1 inline-block h-3.5 w-3.5 text-muted-foreground"
                      aria-hidden
                    />
                    {education.location}
                  </div>
                </div>
              </div>
              <div className="ml-12 flex flex-none items-center gap-1 text-right text-xs tabular-nums text-muted-foreground">
                {education.start === education.end ? (
                  <span>{education.start}</span>
                ) : (
                  <span>{education.start} - {education.end}</span>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;

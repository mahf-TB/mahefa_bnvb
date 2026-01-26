import { DATA } from "@/data/data";
import { cn } from "@/lib/utils";
import AvatarUser from "./_components/avatar";
import { HeaderSection } from "./_components/header-section";
import { Badge } from "./ui/badge";
import { Timeline, TimelineConnectItem, TimelineItem } from "./ui/timeline";


const WorkExperience = () => {
  return (
    <div className="flex min-h-0 flex-col gap-y-8 w-full">
      <div className="flex flex-col gap-y-4 items-center justify-center">
        <HeaderSection
          title="Expériences professionnelles"
          description="Parcours professionnel à travers des missions en stage, freelance et en environnement institutionnel, avec un focus sur le développement d’applications, gestion de projets et la création de solutions à impact. "
          // slug="Experience"
        />
        <Timeline>
          {DATA.experiences.map((experience) => (
            <TimelineItem
              key={experience.title + experience.dates}
              className="w-full flex items-start justify-between gap-10"
            >
              <TimelineConnectItem className="flex items-start justify-center">
                {experience.image ? (
                  <AvatarUser
                    src={experience.image}
                    fallback="UX"
                    className="size-10 bg-white"
                    alt={experience.title}
                  />
                ) : (
                  <div className="size-10 bg-card z-10 shrink-0 overflow-hidden p-1 border rounded-full shadow ring-2 ring-border flex-none" />
                )}
              </TimelineConnectItem>
              <div className="flex flex-1 flex-col items-start justify-start gap-2 min-w-0 text-left">
                {experience.dates && (
                  <time className="text-xs text-muted-foreground">
                    {experience.dates}
                  </time>
                )}
                {experience.title && (
                  <a
                    href={experience.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h3
                      className={cn(
                        "font-semibold leading-none",
                        experience.link ? "hover:underline cursor-default" : "",
                      )}
                    >
                      {experience.title}
                    </h3>
                  </a>
                )}
                {experience.location && (
                  <p className="text-sm text-muted-foreground">
                    {experience.location}
                  </p>
                )}
                {experience.description && (
                  <p className="text-sm text-muted-foreground leading-relaxed wrap-break-word">
                    {experience.description}
                  </p>
                )}
                {experience.links && experience.links.length > 0 && (
                  <div className="mt-1 flex flex-row flex-wrap items-start gap-2">
                    {experience.links.map((link, idx) => (
                      <a
                        href={link.href}
                        key={idx}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Badge
                          variant={"outline"}
                          className="flex items-center gap-1.5 text-xs bg-primary text-primary-foreground"
                        >
                          {link.icon}
                          {link.title}
                        </Badge>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </div>
  );
};

export default WorkExperience;

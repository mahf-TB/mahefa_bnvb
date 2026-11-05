import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";
import Link from "next/link";
import { PROJECTS } from "../../../data/projects.data";

type Project = (typeof PROJECTS)[number];

const ProjectCard = ({ project }: { project: Project }) => {
  const reference = project.reference?.[0];
  const projectUrl = reference?.href.trim();

  return (
    <article className="group flex min-h-full flex-col gap-4 py-5 overflow-hidden rounded-[2rem]  text-card-foreground shadow-[0_18px_50px_rgba(0,0,0,0.22)] transition-[transform,border-color,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:border-foreground/20 hover:shadow-[0_24px_70px_rgba(0,0,0,0.3)] active:scale-[0.985] motion-reduce:transform-none motion-reduce:transition-none">
      <div className="relative aspect-16/10 overflow-hidden rounded-[1.45rem] border border-white/10 bg-linear-to-br from-primary/35 via-primary/20 to-muted shadow-inner">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-linear-to-b from-white/8 to-transparent" />
        <div className="absolute inset-x-5 top-14 -bottom-px overflow-hidden rounded-t-[1.2rem] border border-white/20 bg-background shadow-[0_20px_50px_rgba(0,0,0,0.35)] sm:inset-x-7 sm:top-16">
          {projectUrl ? (
            <Link
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title}`}
              className="absolute inset-0 block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
            >
              <Image
                src={project.images}
                alt={`Preview of ${project.title}`}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02] motion-reduce:transition-none"
              />
            </Link>
          ) : (
            <Image
              src={project.images}
              alt={`Preview of ${project.title}`}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover object-top"
            />
          )}
        </div>
      </div>
      <div className="flex  items-start justify-between gap-4 ">
        <div className="flex min-w-0 items-start gap-3">
          <div className="flex size-11 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border bg-background p-1.5 [&_svg]:max-h-full [&_svg]:max-w-full">
            {project.logo}
          </div>
          <div className="min-w-0 text-left">
            <h3 className="text-lg font-semibold leading-tight tracking-[-0.025em] sm:text-xl">
              {project.title}
            </h3>
            <p className="mt-2 text-xs font-medium text-muted-foreground">
              {project.subtitle} · {project.periode}
            </p>
          </div>
        </div>

        {projectUrl && (
          <Link
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title}`}
            className="flex size-11 shrink-0 items-center justify-center rounded-full border border-border bg-background text-foreground transition-[transform,background-color] duration-100 hover:bg-muted active:scale-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring motion-reduce:transition-none"
          >
            <HugeiconsIcon
              icon={ArrowUpRight01Icon}
              className="size-5"
              strokeWidth={2}
            />
          </Link>
        )}
      </div>

      <div className="flex flex- flex-col ">
        <p className="line-clamp-3 text-left text-sm leading-6 text-muted-foreground">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.stacks.slice(0, 4).map((stack) => (
            <span
              key={stack.title}
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-2.5 py-1 text-[0.7rem] font-medium text-muted-foreground"
            >
              <span className="[&_svg]:size-3.5">{stack.icon}</span>
              {stack.title}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export const ProjectGrid = ({ projects }: { projects: Project[] }) => {
  return (
    <div className="mt-5 grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:gap-10">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

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
    <article className="group flex min-h-full flex-col overflow-hidden rounded-3xl  text-card-foreground shadow-[0_18px_50px_rgba(0,0,0,0.22)] transition-[transform,border-color,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:border-foreground/20 hover:shadow-[0_24px_70px_rgba(0,0,0,0.3)] active:scale-[0.985] motion-reduce:transform-none motion-reduce:transition-none">
      <div className="">
        <div className="relative aspect-[16/10] overflow-hidden rounded-[1.15rem] border border-white/10 bg-background shadow-inner">
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
                className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.025] motion-reduce:transition-none"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/35 via-transparent to-black/5" />
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

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-start gap-3">
          <div className="flex size-11 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border bg-background p-1.5 [&_svg]:max-h-full [&_svg]:max-w-full">
            {project.logo}
          </div>
          <h3 className="text-left text-xl font-semibold leading-tight tracking-[-0.025em] sm:text-[1.35rem]">
            {project.title}
          </h3>
        </div>

        <p className="mt-4 line-clamp-3 text-left text-sm leading-6 text-muted-foreground">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
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

        {projectUrl && (
          <Link
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex min-h-10 items-center justify-center gap-2 self-start rounded-full bg-primary px-4 text-sm font-medium text-primary-foreground transition-transform duration-100 active:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card motion-reduce:transition-none"
          >
            View project
            <HugeiconsIcon icon={ArrowUpRight01Icon} className="size-4" strokeWidth={2} />
          </Link>
        )}
      </div>
    </article>
  );
};

export const ProjectGrid = ({ projects }: { projects: Project[] }) => {
  return (
    <div className="mt-5 grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:gap-6">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};


import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const ProjectChangelog = ({ projects }: { projects: any }) => {
  return (
    <div>
      {/* Timeline */}
      <div className="max-w-5xl mx-auto px-6 lg:px-10 pt-10">
        <div className="relative">
          {projects.slice().map((changelog: any) => {
            return (
              <div key={changelog.id} className="relative">
                <div className="flex flex-col md:flex-row gap-y-6">
                  {/* Analyste */}
                  <div className="md:w-48 shrink-0">
                    <div className="md:sticky md:top-10 pb-10">
                      <time className="text-sm font-medium text-muted-foreground block mb-3 mr-1">
                        {changelog.subtitle || "2023 - Present"}
                      </time>

                      {changelog.logo && (
                        <div className="inline-flex relative z-10  p-2 items-center justify-center w-14 h-14 text-foreground border border-border rounded-lg text-sm font-bold">
                          {changelog.logo}
                        </div>
                      )}
                    </div>
                  </div>
                  {/* Right side - Content */}
                  <div className="flex-1 md:pl-8 relative pb-10">
                    {/* Vertical timeline line */}
                    <div className="hidden md:block absolute top-2 left-0 w-px h-full bg-border">
                      <div className="hidden md:block absolute -translate-x-1/2 size-3 bg-primary rounded-full z-10" />
                    </div>
                    <div className="space-y-6">
                      {/* title and  */}
                      <div className="relative z-10 flex flex-col gap-2">
                        <h2 className="text-2xl text-left font-semibold tracking-tight ">
                          {changelog.title}
                        </h2>

                        {/* Stack List */}
                        {changelog.stacks && changelog.stacks.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {changelog.stacks.map((icon: any, i: number) => (
                              <Badge
                                key={i}
                                variant={"outline"}
                                className="flex items-center gap-1.5 text-xs bg-primary text-primary-foreground"
                              >
                                {icon.icon}
                                {icon.title}
                              </Badge>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Image des des projets */}
                      {changelog.images && !changelog.isScale ? (
                        <div className="prose dark:prose-invert max-w-none prose-headings:scroll-mt-8 prose-headings:font-semibold prose-a:no-underline prose-headings:tracking-tight prose-headings:text-balance prose-p:tracking-tight prose-p:text-balance">
                          <div className={cn("aspect-88/56 mask-b-from-75% mask-b-to-95% relative", changelog.isMobile && "aspect-88/96 h-125")} >
                            <img
                              src={changelog.images}
                              className="absolute inset-0 z-10"
                              alt="payments illustration dark"
                              width={2797}
                              height={1137}
                            />
                          </div>
                        </div>
                      ) : (
                        <div className="mask-b-from-75% mask-l-from-75% mask-b-to-95% mask-l-to-95% relative -mx-4 pr-3 pt-3 md:-mx-12">
                          <div className="perspective-midrange">
                            <div className="rotate-x-6 -skew-2">
                              <div className="aspect-88/46 relative">
                                <img
                                   src={changelog.images}
                                  className="absolute inset-0 z-10"
                                  alt="payments illustration dark"
                                  width={2797}
                                  height={1137}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {/* Reference Git ou Lien */}
                      {changelog.reference && changelog.reference.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {changelog.reference.map((icon: any, i: number) => (
                              <Badge
                                key={i}
                                variant={"secondary"}
                                onClick={() => window.open(icon.href, "_blank")}
                                className="flex items-center rounded-md gap-1.5 text-xs cursor-pointer "
                              >
                                {icon.icon}
                                {icon.title}
                              </Badge>
                            ))}
                          </div>
                        )}
                      <div className="relative space-y-3 mt-2">
                        {changelog.description && (
                          <p className="text-muted-foreground text-left">
                            {changelog.description}
                          </p>
                        )}
                        <div className="">
                          {changelog.list.length > 0 && (
                            <blockquote className="border-l-4 pl-4 ">
                              <ul className="list-disc pl-5 space-y-1 text-left">
                                {changelog.list.map((b: string, i: number) => (
                                  <li key={i}>{b}</li>
                                ))}
                              </ul>

                              <div className="mt-6 space-x-3"></div>
                            </blockquote>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectChangelog;

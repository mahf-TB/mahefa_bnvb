export const HeaderSection = ({
  title,
  description,
  slug,
}: {
  title?: string;
  description?: string;
  slug?: string;
}) => {
  return (
    <>
      {slug && (
        <div className="flex w-full items-center">
          <div className="h-px flex-1 bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
          <div className="z-10 rounded-xl border border-muted-foreground bg-primary px-4 py-1">
            <span className="text-sm font-medium text-background">
              <Shimmer>{slug}</Shimmer>
            </span>
          </div>
          <div className="h-px flex-1 bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
        </div>
      )}
      <div className="flex flex-col items-start justify-center gap-y-3">
        <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl">
          {title}
        </h2>
        <p className="text-left text-sm text-muted-foreground sm:text-base">
          {description}
        </p>
      </div>
    </>
  );
};
import { Shimmer } from "../ai-elements/shimmer";

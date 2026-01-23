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
        <div className="flex items-center w-full">
          <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
          <div className="border bg-primary z-10 rounded-xl px-4 py-1">
            <span className="text-background text-sm font-medium">{slug}</span>
          </div>
          <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
        </div>
      )}
      <div className="flex flex-col gap-y-3 items-start justify-center">
        <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl">
          {title}
        </h2>
        <p className="text-muted-foreground text-sm sm:text-base text-left">
          {description}
        </p>
      </div>
    </>
  );
};

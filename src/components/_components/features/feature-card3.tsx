import { cn } from "@/lib/utils";
import React from "react";
import { Card, CardContent } from "../../ui/card";

type Props = {
  title?: string;
  description?: string;
  logoSrc?: string | React.ReactNode;
  imageSrc?: string | string[];
  imageAlt?: string;
  bullets?: string[];
  className?: string;
};

const FeatureCard3: React.FC<Props> = ({
  title,
  description,
  imageSrc,
  imageAlt,

}) => {
  return (
    <Card className="bg-background group  shadow-zinc-950/5 sm:col-span-2 sm:rounded-none sm:rounded-bl-xl ">
      <CardContent className="grid h-full ">
        <div className="mx-auto w-full px-6 space-y-6">
          <div className="w-full space-y-2 text-center">
            <h2 className="text-balance  font-semibold md:text-lg lg:text-xl">
              {title}
            </h2>
            <p className="text-muted-foreground">{description}</p>
          </div>
          <div className="mx-auto max-w-md  mask-[radial-gradient(ellipse_100%_100%_at_50%_0%,#000_70%,transparent_100%)]">
            <div
              className={cn(
                "bg-background h-50 shadow-xl",
                false && " dark:bg-muted/50 p-1 rounded-xl border ",
              )}
            >
              <img
                src={
                  typeof imageSrc === "string"
                    ? imageSrc
                    : Array.isArray(imageSrc)
                      ? imageSrc[0]
                      : "/images/mobile-2.png"
                }
                className={cn(
                  "rounded-xl sm:h-50 h-60 object-cover object-top ",
                  false && "object-center  ",
                )}
                alt={imageAlt ?? "payments illustration dark"}
                width={929}
                height={1207}
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FeatureCard3;

{
  /* <div className="relative flex h-full flex-col justify-center space-y-6 py-6">
  <div className="relative flex w-[calc(50%+0.875rem)] items-center justify-end gap-2">
    <span className="block h-fit rounded border px-2 py-1 text-xs shadow-sm">
      Likeur
    </span>
    <div className="ring-background size-7 ring-4">
      <img
        className="size-full rounded-full"
        src="https://avatars.githubusercontent.com/u/102558960?v=4"
        alt=""
      />
    </div>
  </div>
  <div className="relative ml-[calc(50%-1rem)] flex items-center gap-2">
    <div className="ring-background size-8 ring-4">
      <img
        className="size-full rounded-full"
        src="https://avatars.githubusercontent.com/u/47919550?v=4"
        alt=""
      />
    </div>
    <span className="block h-fit rounded border px-2 py-1 text-xs shadow-sm">
      M. Irung
    </span>
  </div>
  <div className="relative flex w-[calc(50%+0.875rem)] items-center justify-end gap-2">
    <span className="block h-fit rounded border px-2 py-1 text-xs shadow-sm">
      B. Ng
    </span>
    <div className="ring-background size-7 ring-4">
      <img
        className="size-full rounded-full"
        src="https://avatars.githubusercontent.com/u/31113941?v=4"
        alt=""
      />
    </div>
  </div>
</div> */
}

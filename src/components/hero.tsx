import { DATA } from "@/data/data";
import { Download, Sparkles } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { BlurFade } from "./ui/blur-fade";
import { Button } from "./ui/button";
import { OptimizedImage } from "./ui/optimized-image";

export const Hero = () => {
  return (
    <div className="flex items-center justify-center  h-full">
      <div className="relative z-10 mx-auto max-w-4xl text-left ">
        <div className="h-55" />
        <BlurFade>
          <div className="z-50 inline-flex items-center gap-2 px-4 py-2 mr-auto rounded-full bg-white/10 backdrop-blur-sm text-white mb-6">
            <HugeiconsIcon icon={Sparkles} strokeWidth={2} />
            <span className="sm:text-sm text-xs font-normal sm:font-medium whitespace-nowrap">
              Turn your ideas into digital solutions
            </span>
          </div>
        </BlurFade>
        <BlurFade>
          <h1 className="z-50 text-3xl font-extrabold tracking-tight text-white sm:text-6xl">
            Build Modern &<br />
            <span className="relative pl-3 ">
              High-Performance Applications
            </span>
          </h1>
          <p className="z-50 mt-6 text-muted-foreground">{DATA.description}</p>
          <div className="z-50 mb-5">
            <div className="mt-10 flex flex-nowrap items-center justify-start gap-4">
              <a href={DATA.cvpdf} download>
                <Button
                  size="lg"
                  className="rounded-full sm:px-10 px-3 py-5 hover:bg-primary/80"
                >
                  <HugeiconsIcon icon={Download} strokeWidth={2} />
                  <span className="ml-2"> Download my CV</span>
                </Button>
              </a>
              <a href="#contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="sm:px-10 px-3 py-5 rounded-full border-white/20 text-white hover:bg-white/10"
                >
                  Contact me
                </Button>
              </a>
            </div>
          </div>
        </BlurFade>
        <div className="absolute top-1/3 sm:top-25 right-0 sm:-right-20 mx-auto max-w-md  mask-[radial-gradient(ellipse_100%_100%_at_50%_0%,#000_70%,transparent_100%)]">
          <div className="bg-transparent h-120 max-sm:w-50 shadow-xl">
            <OptimizedImage
              src={DATA.photo}
              className="rounded-xl h-full w-full object-contain object-top"
              alt={DATA.shortName ?? "payments illustration dark"}
              width={929}
              height={1207}
              loading="eager"
              fetchPriority="high"
              wrapperClassName="h-full w-full rounded-xl"
            />
          </div>
        </div>
      </div>
      {/* <h1>hello</h1> */}
    </div>
  );
};

import { DATA } from "../data/data";
import { Download, Sparkles } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="relative z-10 mx-auto max-w-4xl text-left">
        <div className="h-55" />
        <div className="z-50 mb-6 mr-auto inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-white backdrop-blur-sm">
          <HugeiconsIcon icon={Sparkles} strokeWidth={2} />
          <span className="whitespace-nowrap text-xs font-normal sm:text-sm sm:font-medium">
            Turn your ideas into digital solutions
          </span>
        </div>
        <h1 className="z-50 text-3xl font-extrabold tracking-tight text-white sm:text-6xl">
          Build Modern &amp;<br />
          <span className="relative pl-3">High-Performance Applications</span>
        </h1>
        <p className="z-50 mt-6 text-muted-foreground">{DATA.description}</p>
        <div className="z-50 mb-5">
          <div className="mt-10 flex flex-nowrap items-center justify-start gap-4">
            <Button asChild size="lg" className="rounded-full px-3 py-5 hover:bg-primary/80 sm:px-10">
              <Link href={DATA.cvpdf} download>
                <HugeiconsIcon icon={Download} strokeWidth={2} />
                <span className="ml-2">Download my CV</span>
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-white/20 px-3 py-5 text-white hover:bg-white/10 sm:px-10"
            >
              <Link href="#contact">Contact me</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

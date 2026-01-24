import { HugeiconsIcon } from "@hugeicons/react";
import { Sparkles, WorkIcon } from "@hugeicons/core-free-icons";
import { Button } from "./ui/button";
import { TopSkin } from "./_component/top-skin";
import { BlurFade } from "./ui/blur-fade";

export const Hero = () => {
  return (
    <div className="relative z-10 mx-auto max-w-4xl text-left">
      <div className="h-50"/>

      <div className="z-50 inline-flex items-center gap-2 px-4 py-2 mr-auto rounded-full bg-white/10 backdrop-blur-sm text-white mb-6">
        <HugeiconsIcon icon={Sparkles} strokeWidth={2} />
        <span className="sm:text-sm text-xs font-normal sm:font-medium whitespace-nowrap">
          Transformez vos idées en solutions numériques
        </span>
      </div>
      <BlurFade>

      <h1 className="z-50 text-3xl font-extrabold tracking-tight text-white sm:text-6xl">
        Créer des Applications
        <span className="relative pl-3 ">Modernes & Performantes</span>
      </h1>
      <p className="z-50 mt-6 text-muted-foreground">
        Je conçois des solutions logicielles sur mesure : applications web,
        mobiles et systèmes de gestion, en mettant l’accent sur la performance,
        la sécurité et l’expérience utilisateur.
      </p>
      <div className="z-50 mb-5">
        <div className="mt-10 flex flex-nowrap items-center justify-start gap-4">
          <Button size="lg" className="rounded-full sm:px-10 px-5 py-5">
            <HugeiconsIcon icon={WorkIcon} strokeWidth={2} />
            <span className="ml-2"> Voir mes projets</span>
          </Button>

          <a href="https://wa.me/261331718939">
            <Button
              size="lg"
              variant="outline"
              className="sm:px-10 px-5 py-5 rounded-full border-white/20 text-white hover:bg-white/10"
            >
              Me contacter
            </Button>
          </a>
        </div>
      </div>
      </BlurFade>


      
    </div>
  );
};

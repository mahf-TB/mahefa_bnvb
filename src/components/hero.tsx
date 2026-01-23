import Section from "./section";
import { HugeiconsIcon } from "@hugeicons/react";
import { Sparkles, WorkIcon } from "@hugeicons/core-free-icons";
import { Button } from "./ui/button";


export const Hero = () => {
  return (
    <Section className="relative h-[60vh] flex items-center justify-start gap-4 ">
      <div className="relative z-10 mx-auto max-w-4xl text-left mt-72">
        <div className="inline-flex items-center gap-2 px-4 py-2 mr-auto rounded-full bg-white/10 backdrop-blur-sm text-white mb-6">
          <HugeiconsIcon icon={Sparkles} strokeWidth={2} />
          <span className="sm:text-sm text-xs font-normal sm:font-medium whitespace-nowrap">
            Transformez vos idées en solutions numériques
          </span>
        </div>
        <h1 className="text-2xl font-extrabold tracking-tight text-white sm:text-6xl">
          Créer des Applications{" "}
          <span className="relative ">Modernes & Performantes</span>
        </h1>

        <p className="mt-6 text-muted-foreground">
          Je conçois des solutions logicielles sur mesure : applications web,
          mobiles et systèmes de gestion, en mettant l’accent sur la
          performance, la sécurité et l’expérience utilisateur.
        </p>

        <div className="mb-5">
          <div className="mt-10 flex flex-wrap items-center justify-start gap-4">

              <Button size="lg"  className="rounded-full px-10">
                <HugeiconsIcon icon={WorkIcon} strokeWidth={2} />
                <span className="ml-2"> Voir mes projets</span>
              </Button>

            <Button
              size="lg"
              variant="outline"
              className="px-10 rounded-full border-white/20 text-white hover:bg-white/10"
            >
              Me contacter
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};

{
  /* <div className="flex flex-col gap-2 max-md:w-full">
        <div className="flex items-center gap-4">
          <div className="min-w-20 h-20 md:ml-5 bg-green4 rounded-full overflow-hidden  ">
            <img
              src="/images/photo.jpg"
              alt="Profile"
              className="w-full h-full shadow-green4 rounded-t-full object-cover"
            />
          </div>
          <div className="text-left">
            <h2 className="font-PoppinsBlack text-4xl max-md:text-lg text-primary">
              I&apos;m Mahefa Bienvenu
            </h2>
            <span className="text-green4 max-md:text-sm font-black">
              🚀 Software Engineer | Building APIs & Scalable SaaS Projects ✅  💻
            </span>
          </div>
        </div>
        <span className="md:ml-5 max-md:mt-0 mt-5 text-sm text-muted-foreground">
          Passionné par le développement full-stack, j’ai plus de 2 ans
          d’expérience en création d’applications web et mobiles. Actuellement
          en Master 1 Génie Logiciel & Bases de Données (ENI Fianarantsoa,
          Madagascar), je combine rigueur et autonomie pour transformer des
          idées complexes en solutions innovantes et efficaces.
        </span>
      </div> */
}

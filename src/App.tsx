import { Hero } from "./components/hero";
import SectionWrapper from "./components/section-wrapper";

import Section from "./components/section";
import { Header } from "./components/header";
import WorkExperience from "./components/work-experience";

export function App() {
  return (
    <SectionWrapper>
      {/* header */}
      <Header />
      {/* Hero */}
      <Section>
        <Hero />
      </Section>

      <div className="h-50" />
      {/* Experience */}
      <Section>
        <WorkExperience />
      </Section>

      <div className="h-50" />
      {/* Skill */}
      <Section>
        <div className="flex flex-col gap-y-3 items-center justify-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Ce que je sais faire
          </h2>
          <p className="text-muted-foreground text-base/relaxed text-balance text-center">
            Un solide ensemble de compétences techniques pour développer tout
            type d’application.
          </p>
        </div>
      </Section>

      <div className="h-50" />
      {/* Projets */}
      <Section>
        <div className="flex flex-col gap-y-3 items-center justify-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Mes réalisations
          </h2>
          <p className="text-muted-foreground text-base/relaxed text-balance text-center">
            Des applications concrètes qui allient performance et expérience
            utilisateur. De la gestion de stock à des applications financières
            et assistants vocaux, chaque projet reflète ma capacité à résoudre
            des problèmes complexes avec du code propre et efficace.
          </p>
        </div>
      </Section>

      <div className="h-50" />
      {/* Education */}
      <Section>
        <div className="flex flex-col gap-y-3 items-center justify-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Mon parcours académique
          </h2>
          <p className="text-muted-foreground text-base/relaxed text-balance text-center">
            Formation solide et continue pour rester à la pointe du
            développement.
          </p>
        </div>
      </Section>
    </SectionWrapper>
  );
}

export default App;

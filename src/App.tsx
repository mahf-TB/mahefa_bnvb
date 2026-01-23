import { Hero } from "./components/hero";
import SectionWrapper from "./components/section-wrapper";
import Section from "./components/section";
import { Header } from "./components/header";
import WorkExperience from "./components/work-experience";
import Skills from "./components/skills";
import Education from "./components/education";
// import Projects from "./components/Projects";
// import { Feat } from "./components/feat";
import { lazy } from "react";
const Feat = lazy(() => import("./components/feat"));
export function App() {
  return (
    <SectionWrapper>
      {/* header */}
      <Header />
      {/* Hero */}
      <Section className="relative h-[80vh] flex items-center justify-start gap-4">
        <Hero />
      </Section>

      <div className="min-h-20" />
      <Section>
        <Feat />
      </Section>
      <div className="h-20" />
      {/* Experience */}
      <Section>
        <WorkExperience />
      </Section>

      <div className="h-20" />
      {/* Skill */}
      <Section>
        <Skills />
      </Section>

      {/* <div className="h-20" /> */}
      {/* Projets */}
      {/* <Section>
        <Projects />
      </Section> */}

      <div className="h-20" />
      {/* Education */}
      <Section>
        <Education />
      </Section>
      <div className="h-10" />
    </SectionWrapper>
  );
}

export default App;

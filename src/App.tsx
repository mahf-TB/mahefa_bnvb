import { Hero } from "./components/hero";
import SectionWrapper from "./components/section-wrapper";

import Section from "./components/section";
import { Header } from "./components/header";
import WorkExperience from "./components/work-experience";
import Skills from "./components/skills";
import Education from "./components/education";
import Projects from "./components/Projects";

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

      <div className="h-20" />
      {/* Skill */}
      <Section>
        <Skills />
      </Section>

      <div className="h-50" />
      {/* Projets */}
      <Section>
        <Projects />
      </Section>

      <div className="h-50" />
      {/* Education */}
      <Section>
        <Education />
      </Section>
      <div className="h-10" />
    </SectionWrapper>
  );
}

export default App;

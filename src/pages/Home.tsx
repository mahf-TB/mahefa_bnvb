import Contact from "@/components/contact";
import Education from "../components/education";
import Features from "../components/features";
import { Hero } from "../components/hero";
import Section from "../components/section";
import Skills from "../components/skills";
import WorkExperience from "../components/work-experience";


export default function Home() {
  return (
    <>
      {/* Hero */}
      <Section className="relative ">
        <Hero />
      </Section>

      <div className="min-h-20" />
      <Section>
        <Features />
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

      <div className="h-20" />
      {/* Education */}
      <Section>
        <Education />
      </Section>
      <div className="h-10" />
      <Section id="contact">
        <Contact />
      </Section>
    </>
  );
}

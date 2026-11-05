import { HeaderSection } from "../components/_components/header-section";
import { Button } from "../components/ui/button";
import { ArrowRight02Icon, Work } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import Section from "../components/section";
import { Hero } from "../components/hero";
import Features from "../components/features";
import HomeProjects from "../components/_components/projects/home-projects";
import WorkExperience from "../components/work-experience";
import Skills from "../components/skills";
import Education from "../components/education";
import Contact from "../components/contact";

export default function Home() {
  return (
    <>
      <Section className="relative">
        <Hero />
      </Section>

      <div className="h-20" />
      <Section>
        <Features />
        <div className="h-20" />
        <HeaderSection
          title={"My Work & Notable Projects"}
          description="Real-world applications combining performance, security, and user experience. From inventory management to financial platforms and voice assistants, each project showcases my ability to build efficient and maintainable solutions."
        />
        <HomeProjects />
        <div className="mt-10">
          <Button
            asChild
            size="lg"
            className="rounded-full px-3 py-5 hover:bg-primary/80 sm:px-10"
          >
            <Link href="/projects">
              <HugeiconsIcon icon={Work} strokeWidth={2} />
              <span className="mx-2 sm:mx-4">See All Projects</span>
              <HugeiconsIcon icon={ArrowRight02Icon} strokeWidth={2} />
            </Link>
          </Button>
        </div>
      </Section>

      <div className="h-20" />
      <Section>
        <WorkExperience />
      </Section>

      <div className="h-20" />
      <Section>
        <Skills />
      </Section>

      <div className="h-20" />
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

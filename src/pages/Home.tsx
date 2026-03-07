import { HeaderSection } from "@/components/_components/header-section";
import { Button } from "@/components/ui/button";
import { ArrowRight02Icon, Work } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { lazy, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import Section from "../components/section";

const Hero = lazy(() => import("@/components/hero").then((module) => ({ default: module.Hero })));
const Features = lazy(() => import("../components/features"));
const HomeProjects = lazy(() => import("@/components/_components/projects/home-projects"));
const WorkExperience = lazy(() => import("../components/work-experience"));
const Skills = lazy(() => import("../components/skills"));
const Education = lazy(() => import("../components/education"));
const Contact = lazy(() => import("@/components/contact"));

const SectionFallback = () => <div className="h-24" aria-hidden="true" />;

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      {/* Hero */}
      <Section className="relative ">
        <Suspense fallback={<SectionFallback />}>
          <Hero />
        </Suspense>
      </Section>

      <div className="h-20" />
      <Section>
        <Suspense fallback={<SectionFallback />}>
          <Features />
        </Suspense>
        <div className="h-20" />
        <HeaderSection
          title={"My Work & Notable Projects"}
          description="Real-world applications combining performance, security, and user experience. From inventory management to financial platforms and voice assistants, each project showcases my ability to build efficient and maintainable solutions."
        />
        {/* <ProjectDetails /> */}
        <Suspense fallback={<SectionFallback />}>
          <HomeProjects />
        </Suspense>
        <div className="mt-10">
          <Button
            size={"lg"}
            onClick={() => navigate("/projects")}
            className="rounded-full sm:px-10 px-3 py-5 hover:bg-primary/80"
          >
            <HugeiconsIcon icon={Work} strokeWidth={2} />
            <span className="sm:mx-4 mx-2"> See All Projects</span>
            <HugeiconsIcon icon={ArrowRight02Icon} strokeWidth={2} />
          </Button>
        </div>
      </Section>

      <div className="h-20" />
      {/* Experience */}
      <Section>
        <Suspense fallback={<SectionFallback />}>
          <WorkExperience />
        </Suspense>
      </Section>

      <div className="h-20" />
      {/* Skill */}
      <Section>
        <Suspense fallback={<SectionFallback />}>
          <Skills />
        </Suspense>
      </Section>

      <div className="h-20" />
      {/* Education */}
      <Section>
        <Suspense fallback={<SectionFallback />}>
          <Education />
        </Suspense>
      </Section>

      <div className="h-10" />
      <Section id="contact">
        <Suspense fallback={<SectionFallback />}>
          <Contact />
        </Suspense>
      </Section>
    </>
  );
}

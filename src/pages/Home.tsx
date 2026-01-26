import Contact from "@/components/contact";
import Education from "../components/education";
import Features from "../components/features";
import { Hero } from "../components/hero";
import Section from "../components/section";
import Skills from "../components/skills";
import WorkExperience from "../components/work-experience";
import { HeaderSection } from "@/components/_components/header-section";
import ProjectChangelog from "@/components/_components/projects/project-changlog";
import { PROJECTS } from "@/data/projects.data";
import { Button } from "@/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight02Icon, Work } from "@hugeicons/core-free-icons";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      {/* Hero */}
      <Section className="relative ">
        <Hero />
      </Section>

      <div className="h-20" />
      <Section>
        <Features />
        <div className="h-20" />
        {/* <HeaderSection
          title={"Mes projets marquants"} //|| "Compétences Techniques"
          description="  Des applications concrètes qui allient performance et expérience
                    utilisateur. De la gestion de stock à des applications financières
                    et assistants vocaux, chaque projet reflète ma capacité à résoudre
                    des problèmes complexes avec du code propre et efficace."
        /> */}
        <HeaderSection
          title={"My Work & Notable Projects"}
          description="Real-world applications combining performance, security, and user experience. From inventory management to financial platforms and voice assistants, each project showcases my ability to build efficient and maintainable solutions."
        />
        {/* <ProjectDetails /> */}
        <ProjectChangelog projects={PROJECTS.slice(0, 3)} />
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

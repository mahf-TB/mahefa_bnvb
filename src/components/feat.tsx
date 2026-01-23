import ProjectCard from "./_component/project-card";
import FeatureCard from "./_component/feature-card";
import { HeaderSection } from "./header-section";
import { BlurFade } from "./ui/blur-fade";
import { useEffect, useState } from "react";

 const Feat = () => {
  // const projects = DATA.projects;
  const [projects, setProjects] = useState<any[] | null>([]);

  useEffect(() => {
    let mounted = true;
    import("@/data/data").then((mod) => {
      if (mounted) setProjects(mod.DATA.projects);
    });
    return () => { mounted = false; };
  }, []);
  const figmas = projects?.find((p) => p.id === "saas-uxui-design");
  const intsales = projects?.find(
    (p) => p.id === "saas-b2b-gestion-commerciale",
  );


  return (
    <div className="flex min-h-0 flex-col gap-y-8 w-full">
      <div className="flex flex-col gap-y-4 items-start justify-center">
        <HeaderSection slug="Projets effectués" />
        <BlurFade>
          <div className="mx-auto grid gap-2 sm:grid-cols-5">
            <ProjectCard
              title={intsales?.title}
              description={intsales?.description}
              logoSrc={"/images/intsales.png"}
              imageSrc={"/images/ecommerce-login.png"}
              imageAlt={"payments illustration dark"}
              bullets={intsales?.list}
            />
            <FeatureCard
              logoSrc={figmas?.logo}
              text={figmas?.title}
              imageSrc={figmas?.images}
              imageAlt={figmas?.id}
              bullets={figmas?.list.slice(3, 5)}
            />
          </div>
        </BlurFade>
      </div>
    </div>
  );
};

export default Feat;
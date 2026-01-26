import { PROJECTS } from "@/data/projects.data";
import { HeaderSection } from "./_components/header-section";
import ProjectChangelog from "./_components/projects/project-changlog";


const Projects = () => {
  return (
    <div className="flex min-h-0 flex-col gap-y-8 w-full">
      <div className="flex flex-col gap-y-4 items-start justify-center">
        {/* <HeaderSection
          title={"Découvrez mes réalisations et projets récents"} //|| "Compétences Techniques"
          description="  Des applications concrètes qui allient performance et expérience
            utilisateur. De la gestion de stock à des applications financières
            et assistants vocaux, chaque projet reflète ma capacité à résoudre
            des problèmes complexes avec du code propre et efficace."
            slug="Projets réalisés"
        /> */}
        <HeaderSection
          title={"My Work & Notable Projects"}
          description="Real-world applications combining performance, security, and user experience. From inventory management to financial platforms and voice assistants, each project showcases my ability to build efficient and maintainable solutions."
        />
       {/* <ProjectDetails /> */}
       <ProjectChangelog projects={PROJECTS} />
      </div>
    </div>
  );
};

export default Projects;

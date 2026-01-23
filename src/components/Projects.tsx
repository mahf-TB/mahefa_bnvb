import { HeaderSection } from "./header-section";

const Projects = () => {
  return (
    <div className="flex min-h-0 flex-col gap-y-8 w-full">
      <div className="flex flex-col gap-y-4 items-start justify-center">
        <HeaderSection
          title={"Mes réalisations"} //|| "Compétences Techniques"
          description="  Des applications concrètes qui allient performance et expérience
            utilisateur. De la gestion de stock à des applications financières
            et assistants vocaux, chaque projet reflète ma capacité à résoudre
            des problèmes complexes avec du code propre et efficace."
        />
        Projects works!
      </div>
    </div>
  );
};

export default Projects;

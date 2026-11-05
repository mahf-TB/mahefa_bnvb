import { DATA } from "../data/data";
import { HeaderSection } from "./_components/header-section";
const Skills = () => {
  return (
    <div className="flex min-h-0 flex-col gap-y-8 w-full">
      <div className="flex flex-col gap-y-4 items-start justify-center">
        {/* <HeaderSection
          title={" Ce que je sais faire"} //|| "Compétences Techniques"
          description="Un solide ensemble de compétences techniques pour développer tout
            type d’application."
        /> */}
        <HeaderSection
  title="What I Can Do" // ou "Technical Skills"
  description="A solid set of technical skills to build any type of application."
/>
        <div className="flex flex-wrap gap-2">
          {DATA.skills.map((skill) => (
            <div
              key={skill.name}
              className="flex h-8 w-fit items-center gap-2 rounded-full border border-border bg-background px-4 ring-2 ring-border/20"
            >
              {skill.icon && (
                <skill.icon className="size-4 overflow-hidden rounded object-contain" />
              )}
              <span className="text-sm font-medium text-foreground">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

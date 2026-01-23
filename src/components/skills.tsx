import { DATA } from "@/data/data";
import { BlurFade } from "./ui/blur-fade";
import { HeaderSection } from "./header-section";
const BLUR_FADE_DELAY = 0.04;
const Skills = () => {
  return (
    <div className="flex min-h-0 flex-col gap-y-8 w-full">
      <div className="flex flex-col gap-y-4 items-start justify-center">
        <HeaderSection
          title={" Ce que je sais faire"} //|| "Compétences Techniques"
          description="Un solide ensemble de compétences techniques pour développer tout
            type d’application."
        />
        <div className="flex flex-wrap gap-2">
          {DATA.skills.map((skill, id) => (
            <BlurFade key={skill.name} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
              <div className="border bg-background border-border ring-2 ring-border/20 rounded-full h-8 w-fit px-4 flex items-center gap-2">
                {skill.icon && (
                  <skill.icon className="size-4 rounded overflow-hidden object-contain" />
                )}
                <span className="text-foreground text-sm font-medium">
                  {skill.name}
                </span>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

import { FEATURED } from "@/data/features.data";
import FeatureCard3 from "./_component/features/feature-card3";
import FeatureCard4 from "./_component/features/feature-card4";
import { HeaderSection } from "./header-section";
import { BlurFade } from "./ui/blur-fade";
import FeatureCard from "./_component/features/feature-card1";
import FeatureCard2 from "./_component/features/feature-card2";


const Features = () => {
  // const projects = DATA.projects;

  const figmas = FEATURED?.find((p) => p.type === "uiux");
  const intsales = FEATURED?.find((p) => p.type === "platform");
  const sell2door = FEATURED?.find((p) => p.type === "mobile");
  const Stack = FEATURED?.find((p) => p.type === "stack");
  return (
    <div className="flex min-h-0 flex-col gap-y-8 w-full">
      <div className="flex flex-col gap-y-4 items-start justify-center">
        <HeaderSection slug="🚀 Projets & Expertises Clés" />
        <BlurFade>
          <div className="mx-auto grid gap-2 sm:grid-cols-5">
            <FeatureCard
              title={intsales?.title}
              description={intsales?.description}
              logoSrc={intsales?.logo}
              imageSrc={intsales?.images[0]}
              imageAlt={intsales?.type}
              bullets={intsales?.features}
            />
            <FeatureCard2
              logoSrc={figmas?.logo}
              title={figmas?.title}
              imageSrc={figmas?.images}
              imageAlt={figmas?.type}
              bullets={figmas?.features}
            />
            <FeatureCard3
              title={sell2door?.title}
              description={sell2door?.description}
              logoSrc={sell2door?.logo}
              imageSrc={sell2door?.images}
              imageAlt={sell2door?.type}
              bullets={sell2door?.features}
            />
            <FeatureCard4
              title={Stack?.title}
              description={Stack?.description}
              subtitle={Stack?.subtitle}
              imageSrc={Stack?.images}
              imageAlt={Stack?.type}
            />
          </div>
        </BlurFade>
      </div>
    </div>
  );
};

export default Features;

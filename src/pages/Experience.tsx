import Section from "../components/section";
import WorkExperience from "../components/work-experience";

export default function Experience() {
  return (
    <>
      <Section className="pt-20">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Expérience Professionnelle</h1>
          <p className="text-muted-foreground">
            Mon parcours professionnel et mes expériences
          </p>
        </div>
        <WorkExperience />
      </Section>
      <div className="h-10" />
    </>
  );
}

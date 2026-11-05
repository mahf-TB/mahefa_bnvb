import Education from "../components/education";
import Section from "../components/section";
import Skills from "../components/skills";

export default function About() {
  return (
    <>
      <Section className="pt-20">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">À propos</h1>
          <p className="text-muted-foreground max-w-3xl">
            Développeur passionné avec une expertise en développement web full-stack. 
            Je crée des applications modernes et performantes en utilisant les dernières 
            technologies.
          </p>
        </div>
      </Section>

      <div className="h-20" />
      {/* Compétences */}
      <Section>
        <Skills />
      </Section>

      <div className="h-20" />
      {/* Formation */}
      <Section>
        <Education />
      </Section>
      <div className="h-10" />
    </>
  );
}

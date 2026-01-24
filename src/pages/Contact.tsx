import { Logo } from "@/components/logo";
import { GitHubIcons } from "../components/icons/GitHubIcons";
import { LinkedinIcon } from "../components/icons/LinkedinIcon";
import { MailIcon } from "../components/icons/MailIcon";
import Section from "../components/section";
import PopoverTour from "@/components/PopoverTour-comp-389";

export default function Contact() {
  return (
    <>
      <Section className="pt-20 min-h-[70vh]">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Contact</h1>
          <p className="text-muted-foreground">
            N'hésitez pas à me contacter pour discuter de vos projets
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-4xl">
          {/* Email */}
          <a
            href="mailto:contact@example.com"
            className="flex flex-col items-center p-6 rounded-lg border bg-card hover:bg-accent transition-colors"
          >
            <div className="mb-4 p-3 rounded-full bg-primary/10">
              <MailIcon className="w-8 h-8" />
            </div>
            <h3 className="font-semibold mb-2">Email</h3>
            <p className="text-sm text-muted-foreground text-center">
              contact@example.com
            </p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 rounded-lg border bg-card hover:bg-accent transition-colors"
          >
            <div className="mb-4 p-3 rounded-full bg-primary/10">
              <LinkedinIcon className="w-8 h-8" />
            </div>
            <h3 className="font-semibold mb-2">LinkedIn</h3>
            <p className="text-sm text-muted-foreground text-center">
              Connectez-vous sur LinkedIn
            </p>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 rounded-lg border bg-card hover:bg-accent transition-colors"
          >
            <div className="mb-4 p-3 rounded-full bg-primary/10">
              <GitHubIcons className="w-8 h-8" />
            </div>
            <h3 className="font-semibold mb-2">GitHub</h3>
            <p className="text-sm text-muted-foreground text-center">
              Voir mes projets sur GitHub
            </p>
          </a>
        </div>
        <PopoverTour />
      </Section>
      <Logo />
      <div className="h-10" />
    </>
  );
}

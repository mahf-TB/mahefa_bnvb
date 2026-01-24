import { Link } from "react-router-dom";
import Section from "../components/section";

export default function NotFound() {
  return (
    <Section className="flex min-h-full w-full flex-col items-center justify-center gap-4 py-28">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-4">Page non trouvée</h2>
      <p className="text-muted-foreground mb-8 text-center max-w-md">
        La page que vous recherchez n'existe pas ou a été déplacée.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
      >
        Retour à l'accueil
      </Link>
    </Section>
  );
}

import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="mt-12 flex flex-wrap items-end justify-center gap-6 border-t py-6 sm:justify-between">
      <span className="order-last block text-center text-sm text-muted-foreground md:order-first">
        © {new Date().getFullYear()} – Built with ❤️. Let’s create something together!
      </span>
      <nav className="order-first flex flex-wrap justify-center gap-6 text-sm md:order-last" aria-label="Footer navigation">
        <Link
          href="https://github.com/mahf-TB"
          target="_blank"
          rel="noopener noreferrer"
          className="transition hover:text-foreground"
        >
          GitHub
        </Link>
        <Link
          href="https://www.linkedin.com/in/mahefa-bienvenu-575188287/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition hover:text-foreground"
        >
          LinkedIn
        </Link>
        <Link
          href="mailto:mahefatsilavirintsoa@gmail.com"
          className="transition hover:text-foreground"
        >
          Email
        </Link>
      </nav>
    </footer>
  );
};

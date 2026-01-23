import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { DownloadIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useEffect, useState } from "react";
import { GitHubIcons } from "./icons/GitHubIcons";
import { LinkedinIcon } from "./icons/LinkedinIcon";
import { MailIcon } from "./icons/MailIcon";
import Section from "./section";
import AvatarUser from "./_component/avatar";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={cn(
        "z-999 text-white fixed p-2 left-0 top-0 right-0  transition-colors",
        scrolled
          ? "bg-foreground/95  backdrop-blur supports-backdrop-filter:bg-background/60 "
          : "bg-transparent",
      )}
    >
      <Section className="flex items-center ">
        <div className="flex items-center gap-2">
          <h1 className="text-lg  text-white flex items-center gap-2">
            {/* <LogoMB /> */}
            <AvatarUser alt="User Avatar" src="/images/me.jpg"  fallback="MB" className="size-10" />
            <div className="text-left ml-2 max-sm:hidden" >
              <span className="font-PoppinsBlack">Mahefa Bienvenu</span>
              <p className="text-xs text-b">🚀 Software Engineer | Building APIs & Scalable SaaS Projects ✅ 💻</p>
            </div>
          </h1>
        </div>
        <div className="flex-1"></div>
        <ul className="flex items-center gap-2">
          <a
            href="https://github.com/mahf-TB"
            target="_blank"
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0 ")}
          >
            <GitHubIcons
              size={16}
              className="text-white hover:text-green4 transition-colors"
            ></GitHubIcons>
          </a>

          <a
            href="https://www.linkedin.com/in/mahefa-bienvenu-575188287/"
            target="_blank"
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
          >
            <LinkedinIcon
              size={16}
              className="text-white hover:text-green4 transition-colors"
            ></LinkedinIcon>
          </a>
          <a
            href="mailto:mahefatsilavirintsoa@gmail.com"
            target="_blank"
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
          >
            <MailIcon
              size={16}
              className="text-white hover:text-green4 transition-colors"
            ></MailIcon>
          </a>
          <a
            href="/pdf/CV-ANDRIMAHEFA-Fullstack.pdf"
            download
            aria-label="Télécharger CV-ANDRIMAHEFA-Fullstack"
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
          >
            <HugeiconsIcon icon={DownloadIcon} strokeWidth={2} />
          </a>
        </ul>
      </Section>
    </header>
  );
};

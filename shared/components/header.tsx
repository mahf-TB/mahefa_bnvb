"use client";

import { buttonVariants } from "./ui/button";
import { DATA } from "../data/data";
import { cn } from "../lib/utils";
import { DownloadIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useEffect, useState } from "react";
import Link from "next/link";
import AvatarUser from "./_components/avatar";

import AutoPopover from "./_components/auto-popover";
import { GitHubIcons } from "./icons/GitHubIcons";
import { LinkedinIcon } from "./icons/LinkedinIcon";
import { MailIcon } from "./icons/MailIcon";
import Section from "./section";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  // const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-999 p-2 text-white transition-colors",
        scrolled
          ? "bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60"
          : "bg-transparent",
      )}
    >
      <Section className="flex items-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex items-center gap-2 text-lg text-white">
            <AutoPopover
              title={`Hello! I’m ${DATA.name}`}
              description={DATA.shortDescription}
              className="w-100"
            >
              <AvatarUser
                alt={DATA.name}
                src="/images/me.webp"
                fallback="MB"
                className="size-10"
              />
            </AutoPopover>
            <div className="ml-2 text-left max-sm:hidden">
              <span className="font-PoppinsBlack">{DATA.shortName}</span>
              <p className="text-xs">{DATA.role}</p>
            </div>
          </div>
        </Link>
        <nav className="ml-auto flex items-center gap-2" aria-label="Primary navigation">
          <Link
            href="https://github.com/mahf-TB"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "size-10 p-0",
            )}
          >
            <GitHubIcons size={18} className="text-white transition-colors" />
          </Link>

          <Link
            href="https://www.linkedin.com/in/mahefa-bienvenu-575188287/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "size-10 p-0",
            )}
          >
            <LinkedinIcon size={18} className="text-white transition-colors" />
          </Link>
          <Link
            href="mailto:mahefatsilavirintsoa@gmail.com"
            aria-label="Email"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "size-10 p-0",
            )}
          >
            <MailIcon size={18} className="text-white transition-colors" />
          </Link>
          <Link
            href={DATA.cvpdf}
            download
            aria-label="Télécharger CV-ANDRIMAHEFA-Fullstack"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "size-10 p-0",
            )}
          >
            <HugeiconsIcon icon={DownloadIcon} strokeWidth={2} />
          </Link>
        </nav>
      </Section>
    </header>
  );
};

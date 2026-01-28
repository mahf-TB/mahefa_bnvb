import { buttonVariants } from "@/components/ui/button";
import { DATA } from "@/data/data";
import { cn } from "@/lib/utils";
import { DownloadIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AvatarUser from "./_components/avatar";

import { GitHubIcons } from "./icons/GitHubIcons";
import { LinkedinIcon } from "./icons/LinkedinIcon";
import { MailIcon } from "./icons/MailIcon";
import Section from "./section";
import AutoPopover from "./_components/auto-popover";

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
        "z-999 text-white fixed p-2 left-0 top-0 right-0  transition-colors",
        scrolled
          ? "backdrop-blur bg-background/95 supports-backdrop-filter:bg-background/60 "
          : "bg-transparent",
      )}
    >
      <Section className="flex items-center mx-auto">
        <Link to={"/"} className="flex items-center gap-2">
          <div className="text-lg  text-white flex items-center gap-2">
            <AutoPopover
              title={"Hello! I’m " + DATA.name}
              description={DATA.shortDescription}
              className="w-100"
            >
              <AvatarUser
                alt="User Avatar"
                src="/images/me.jpg"
                fallback="MB"
                className="size-10"
              />
            </AutoPopover>
            <div className="text-left ml-2 max-sm:hidden">
              <span className="font-PoppinsBlack">{DATA.shortName}</span>
              <p className="text-xs text-b">{DATA.role}</p>
            </div>
          </div>
        </Link>
        <div className="flex-1"></div>
        <ul className="flex items-center gap-2">
          <a
            href="https://github.com/mahf-TB"
            target="_blank"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "size-10 p-0 ",
            )}
          >
            <GitHubIcons
              size={18}
              className="text-white hover:text-green4 transition-colors"
            ></GitHubIcons>
          </a>

          <a
            href="https://www.linkedin.com/in/mahefa-bienvenu-575188287/"
            target="_blank"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "size-10 p-0",
            )}
          >
            <LinkedinIcon
              size={18}
              className="text-white hover:text-green4 transition-colors"
            ></LinkedinIcon>
          </a>
          <a
            href="mailto:mahefatsilavirintsoa@gmail.com"
            target="_blank"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "size-10 p-0",
            )}
          >
            <MailIcon
              size={18}
              className="text-white hover:text-green4 transition-colors"
            ></MailIcon>
          </a>
          <a
            href={DATA.cvpdf}
            download
            aria-label="Télécharger CV-ANDRIMAHEFA-Fullstack"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "size-10 p-0",
            )}
          >
            <HugeiconsIcon icon={DownloadIcon} strokeWidth={2} />
          </a>
        </ul>
      </Section>
    </header>
  );
};

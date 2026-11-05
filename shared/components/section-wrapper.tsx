import { cn } from "../lib/utils";
import Image from "next/image";
import React from "react";
import { DotPattern } from "./ui/dot-pattern";

interface SectionWrapperProps {
  id?: string;
  className?: string;
  children?: React.ReactNode;
}

export function SectionWrapper({
  id,
  className = "",
  children,
}: SectionWrapperProps) {
  return (
    <section id={id} className={`relative ${className}`}>
      <div className="bg-primary absolute  bottom-0 top-0 left-0 right-0 z-1  opacity-50 mix-blend-color" />
      <Image
        src="/images/bg-login.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="h-full absolute inset-0 rounded-none aspect-video w-full object-cover brightness-60 grayscale"
      />
      <DotPattern
        className={cn(
          "z-0 mask-[linear-gradient(to_bottom,white,transparent)]",
          "h-135 pt-2",
        )}
      />
      <div className={"mx-auto max-w-4xl text-center "}>{children}</div>
    </section>
  );
}

export default SectionWrapper;

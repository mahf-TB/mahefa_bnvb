import React from "react";

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
    <section id={id} className={`relative bg-background ${className}`}>
      <div className="mx-auto w-full max-w-4xl text-center">{children}</div>
    </section>
  );
}

export default SectionWrapper;

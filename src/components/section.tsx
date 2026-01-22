import React from "react";

const Section = ({
  className = "",
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div className={`relative z-50 mx-auto max-w-4xl px-4 ${className}`}>
      {children}
    </div>
  );
};

export default Section;

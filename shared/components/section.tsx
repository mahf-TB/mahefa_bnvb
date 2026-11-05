import React from "react";

const Section = ({
  className = "",
  children,id
}: {
  className?: string;
  children?: React.ReactNode;
  id?: string;
}) => {
  return (
    <div id={id} className={`relative z-50  max-w-4xl px-4 ${className}`}>
      {children}
    </div>
  );
};

export default Section;

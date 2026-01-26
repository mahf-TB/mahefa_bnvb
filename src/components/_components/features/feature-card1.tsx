import { Card, CardHeader } from "@/components/ui/card";
import React from "react";

type Props = {
  title?: string;
  description?: string;
  logoSrc?: string | React.ReactNode;
  imageSrc?: string | string[];
  imageAlt?: string;
  bullets?: string[];
  className?: string;
};

const FeatureCard: React.FC<Props> = ({
  title,
  description,
  logoSrc,
  imageSrc,
  imageAlt,
  bullets = [],
  className = "",
}) => {
  return (
    <Card
      className={`bg-background group overflow-hidden shadow-zinc-950/5 sm:col-span-3 sm:rounded-none sm:rounded-tl-xl border-0 border-white/20 ${className}`}
    >
      <CardHeader>
        <div className="relative z-10 text-left">
          <div className=" flex items-center gap-2">
            {logoSrc && (
              <div className="relative bg-white flex aspect-square  min-w-12 h-12 overflow-hidden p-2 rounded-full border before:absolute before:-inset-2 before:rounded-full before:border dark:border-white/10 dark:before:border-white/5">
                {typeof logoSrc === "string" ? (
                  <img
                    src={logoSrc}
                    className="m-auto object-contain"
                    alt={`${title} logo`}
                  />
                ) : (
                  logoSrc
                )}
              </div>
            )}
            <div>
              <h2 className="font-medium text-xl transition">{title}</h2>
            </div>
          </div>

          <div className="relative space-y-3 mt-2">
            {description && (
              <p className="text-muted-foreground">{description}</p>
            )}
            <div className="">
              {bullets.length > 0 && (
                <blockquote className="border-l-4 pl-4">
                  <ul className="list-disc pl-5 space-y-1">
                    {bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>

                  <div className="mt-6 space-x-3"></div>
                </blockquote>
              )}
            </div>
          </div>
        </div>
      </CardHeader>

      <div className="mask-b-from-55% mask-b-to-95% relative h-fit pl-6 md:pl-24">
        <div className="bg-background overflow-hidden rounded-l-lg">
          {imageSrc && typeof imageSrc === "string" && (
            <img
              src={imageSrc}
              alt={imageAlt ?? title}
              className="object-cover object-top-left h-75"
              width={1207}
              height={929}
            />
          )}
        </div>
      </div>
    </Card>
  );
};

export default FeatureCard;

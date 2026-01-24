import React, { type ReactNode, useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

type Logo = {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
};

type Props = {
   title?: string;
  description?: string;
  logoSrc?: string | ReactNode;
  imageSrc?: string | string[];
  imageAlt?: string;
  /** interval en ms pour le diaporama automatique */
  bullets?: string[];
  logos?: Logo[];
  className?: string;
  imageInterval?: number;
};

const FeatureCard2: React.FC<Props> = ({
  title,
  description,
  logoSrc,
  imageSrc,
  imageInterval = 3000,
  imageAlt,
  bullets = [],
  logos = [],
  className = "",
}) => {
  const images: string[] = Array.isArray(imageSrc)
    ? imageSrc
    : imageSrc
      ? [imageSrc]
      : [];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % images.length);
    }, imageInterval);
    return () => clearInterval(id);
  }, [images.length, imageInterval]);
  return (
    <Card
      className={`${className} bg-background group overflow-hidden shadow-zinc-950/5 sm:col-span-2 sm:rounded-none sm:rounded-tr-xl`}
    >
      <div className="p-3 text-left ">
        {title && (
          <p className=" text-balance text-left text-lg font-semibold sm:text-2xl">
            {logoSrc && (
              <div className="relative size-8 mr-2 inline-block  align-baseline">
                {typeof logoSrc === "string" ? (
                  <img
                    src={logoSrc}
                    className="m-auto  object-contain"
                    alt={"logo"}
                  />
                ) : (
                  logoSrc
                )}
              </div>
            )}
            <span>

            {title}
            </span>
          </p>
        )}
        {/*  */}
        {bullets.length > 0 && (
          <ul className="mt-4 list-disc pl-6 space-y-1">
            {bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        )}
        {/*  */}
        {logos.length > 0 && (
          <div className="mt-6 grid grid-cols-3 gap-2">
            {logos.map((l, i) => (
              <div key={i} className="flex items-center justify-center p-2">
                <img
                  src={l.src}
                  alt={l.alt ?? "logo"}
                  width={l.width ?? 32}
                  height={l.height ?? 32}
                />
              </div>
            ))}
          </div>
        )}
      </div>

      <CardContent className="mt-auto h-fit">
        <div className="mask-radial-at-right mask-radial-from-55% mask-radial-[95%_75%] relative max-sm:mb-6">
          <div className="aspect-76/59 overflow-hidden rounded-r-lg border">
            {images.length > 0 && (
              <div className="relative w-full h-full">
                {images.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={imageAlt ?? `illustration ${i + 1}`}
                    width={1207}
                    height={929}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                      i === current
                        ? "opacity-100"
                        : "opacity-0 pointer-events-none"
                    }`}
                    aria-hidden={i === current ? "false" : "true"}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FeatureCard2;

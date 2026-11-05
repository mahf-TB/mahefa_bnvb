"use client";

import { cn } from "../../lib/utils";
import Image, { type ImageProps } from "next/image";
import { useState } from "react";

type OptimizedImageProps = ImageProps & {
  wrapperClassName?: string;
  fallbackClassName?: string;
};

export function OptimizedImage({
  className,
  wrapperClassName,
  fallbackClassName,
  src,
  alt,
  width,
  height,
  fill,
  sizes,
  loading = "lazy",
  onLoad,
  onError,
  ...props
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const shouldFill = fill ?? (width == null || height == null);

  return (
    <span className={cn("relative block overflow-hidden", wrapperClassName)}>
      {!isLoaded && !hasError && (
        <div
          className={cn(
            "absolute inset-0 animate-pulse bg-muted/50",
            fallbackClassName,
          )}
          aria-hidden="true"
        />
      )}

      <Image
        {...props}
        src={src}
        alt={alt}
        fill={shouldFill}
        width={shouldFill ? undefined : width}
        height={shouldFill ? undefined : height}
        sizes={sizes ?? (shouldFill ? "100vw" : undefined)}
        className={cn(
          className,
          !isLoaded && !hasError && "opacity-0",
          "transition-opacity duration-300",
        )}
        loading={loading}
        onLoad={(event) => {
          setIsLoaded(true);
          onLoad?.(event);
        }}
        onError={(event) => {
          setHasError(true);
          onError?.(event);
        }}
      />
    </span>
  );
}

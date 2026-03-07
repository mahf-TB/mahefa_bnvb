import { cn } from "@/lib/utils";
import { type ImgHTMLAttributes, useState } from "react";

type OptimizedImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  wrapperClassName?: string;
  fallbackClassName?: string;
};

export function OptimizedImage({
  className,
  wrapperClassName,
  fallbackClassName,
  loading = "lazy",
  decoding = "async",
  fetchPriority,
  onLoad,
  onError,
  ...props
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div className={cn("relative overflow-hidden", wrapperClassName)}>
      {!isLoaded && !hasError && (
        <div
          className={cn(
            "absolute inset-0 animate-pulse bg-muted/50",
            fallbackClassName,
          )}
          aria-hidden="true"
        />
      )}

      <img
        {...props}
        className={cn(
          className,
          !isLoaded && !hasError && "opacity-0",
          "transition-opacity duration-300",
        )}
        loading={loading}
        decoding={decoding}
        fetchPriority={fetchPriority}
        onLoad={(event) => {
          setIsLoaded(true);
          onLoad?.(event);
        }}
        onError={(event) => {
          setHasError(true);
          onError?.(event);
        }}
      />
    </div>
  );
}

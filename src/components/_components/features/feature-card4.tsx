import { cn } from "@/lib/utils";
import React from "react";
import Nestjs from "../../icons/Nestjs";
import { Postgresql } from "../../icons/postgresql";
import { ReactDark } from "../../icons/reactDark";
import { Card, CardContent, CardHeader } from "../../ui/card";
import { Figma } from "@/components/icons/Figma";
import { Shadcn } from "@/components/icons/shadcn";
import { Python } from "@/components/icons/python";


type Props = {
  title?: string;
  description?: string;
  subtitle?: string;
  logoSrc?: string | React.ReactNode;
  imageSrc?: string | string[];
  imageAlt?: string;
  bullets?: string[];
  className?: string;
};

const FeatureCard4: React.FC<Props> = ({
  title,
  description,
  subtitle,
  className = "",
}) => {
  return (
    <Card
      className={cn(
        "bg-background group relative shadow-zinc-950/5 sm:col-span-3 sm:rounded-none sm:rounded-br-xl",
        className,
      )}
    >
      <CardHeader className="p-6 ">
        <h1 className="text-2xl">{title}</h1>
        <p className="font-medium text-primary-foreground">{subtitle}</p>
        <p className="text-muted-foreground mt-2 max-w-sm text-sm">
          {description}
        </p>
      </CardHeader>
      <CardContent className="relative h-full px-6 pb-6 md:px-12 space-y-5">
        <div className="grid grid-cols-4 gap-2 md:grid-cols-6">
          <div className="rounded-(--radius)  flex aspect-square items-center justify-center border border-dashed p-4">
            <Figma className="size-8" />
          </div>
          <div className="rounded-(--radius) bg-muted/50 flex aspect-square items-center justify-center border p-4">
            <ReactDark className="size-8" />
          </div>
          <div className="rounded-(--radius)  flex aspect-square items-center justify-center border border-dashed p-4">
            <Shadcn className="size-8" />
          </div>
          <div className="rounded-(--radius) bg-muted/50 flex aspect-square items-center justify-center border p-4">
            <Nestjs className="size-8" />
          </div>
          <div className="rounded-(--radius)  flex aspect-square items-center justify-center border border-dashed p-4">
            <Python className="size-8" />
          </div>
          <div className="rounded-(--radius) bg-muted/50 flex aspect-square items-center justify-center border p-4">
            <Postgresql className="size-8" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FeatureCard4;

import React from "react";
import { cn } from "@/lib/utils";
import { LogoIcon } from "../logo";
import { ReactDark } from "../icons/reactDark";
import Nestjs from "../icons/Nestjs";
import { Postgresql } from "../icons/postgresql";
import { Docker } from "../icons/Docker";
import { Typescript } from "../icons/typescript";
import { Tailwindcss } from "../icons/Tailwindcss";

export const TopSkin = () => {
  return (
    <div className="aspect-16/10 group relative mx-auto flex max-w-88 items-center justify-between sm:max-w-sm">
      <div
        role="presentation"
        className="bg-linear-to-b border-foreground/5 absolute inset-0 z-10 aspect-square animate-spin items-center justify-center rounded-full border-t from-lime-500/15 to-transparent to-25% opacity-0 duration-[3.5s] group-hover:opacity-100 dark:from-white/5"
      ></div>
      <div
        role="presentation"
        className="bg-linear-to-b border-foreground/5 absolute inset-16 z-10 aspect-square scale-90 animate-spin items-center justify-center rounded-full border-t from-blue-500/15 to-transparent to-25% opacity-0 duration-[3.5s] group-hover:opacity-100"
      ></div>
      <div className="bg-linear-to-b from-muted-foreground/15 absolute inset-0 flex aspect-square items-center justify-center rounded-full border-t to-transparent to-25%">
        <IntegrationCard className="-translate-x-1/6 absolute left-0 top-1/4 -translate-y-1/4">
          <ReactDark />
        </IntegrationCard>
        <IntegrationCard className="absolute top-0 -translate-y-1/2">
          <Nestjs />
        </IntegrationCard>
        <IntegrationCard className="translate-x-1/6 absolute right-0 top-1/4 -translate-y-1/4">
          <Postgresql />
        </IntegrationCard>
      </div>
      <div className="bg-linear-to-b from-muted-foreground/15 absolute inset-16 flex aspect-square scale-90 items-center justify-center rounded-full border-t to-transparent to-25%">
        <IntegrationCard className="absolute top-0 -translate-y-1/2">
          <Typescript />
        </IntegrationCard>
        <IntegrationCard className="absolute left-0 top-1/4 -translate-x-1/4 -translate-y-1/4">
          <Tailwindcss />
        </IntegrationCard>
        <IntegrationCard className="absolute right-0 top-1/4 -translate-y-1/4 translate-x-1/4">
          <Docker />
        </IntegrationCard>
      </div>
      <div className="absolute inset-x-0 bottom-0 mx-auto my-2 flex w-fit justify-center gap-2">
        <div className="bg-muted relative z-5 rounded-full border p-1">
          <IntegrationCard
            className="shadow-black-950/10 dark:bg-background size-16 border-black/20 shadow-xl dark:border-white/25 dark:shadow-white/15"
            isCenter={true}
          >
            <LogoIcon className="text-blue-500" />
          </IntegrationCard>
        </div>
      </div>
    </div>
  );
};



const IntegrationCard = ({ children, className, isCenter = false }: { children: React.ReactNode; className?: string; position?: 'left-top' | 'left-middle' | 'left-bottom' | 'right-top' | 'right-middle' | 'right-bottom'; isCenter?: boolean }) => {
    return (
        <div className={cn('relative z-30 flex size-12 rounded-full border bg-white shadow-sm shadow-black/5 dark:bg-white/5 dark:backdrop-blur-md', className)}>
            <div className={cn('m-auto size-fit *:size-5', isCenter && '*:size-8')}>{children}</div>
        </div>
    )
}
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

type SectionShellProps = {
  id: string;
  index: string;
  title: string;
  eyebrow?: string;
  children: ReactNode;
  className?: string;
};

export function SectionShell({ id, index, title, eyebrow, children, className }: SectionShellProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={cn("scroll-mt-28 py-20 sm:py-28", className)}
    >
      <Reveal>
        <div className="mb-10 flex items-center gap-4 sm:mb-14">
          <span className="font-mono text-sm text-primary">{index}</span>
          <h2 id={`${id}-heading`} className="text-2xl font-semibold sm:text-3xl">
            {title}
          </h2>
          <span aria-hidden className="h-px flex-1 bg-border" />
        </div>
        {eyebrow ? <p className="mb-8 max-w-2xl text-muted-foreground">{eyebrow}</p> : null}
      </Reveal>
      {children}
    </section>
  );
}
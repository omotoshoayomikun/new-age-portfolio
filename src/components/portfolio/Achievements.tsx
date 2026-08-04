import { Award } from "lucide-react";
import { achievements } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { SectionShell } from "./SectionShell";

export function Achievements() {
  return (
    <SectionShell id="achievements" index="05" title="Achievements">
      <ul className="grid gap-4 sm:grid-cols-2">
        {achievements.map((item, i) => (
          <Reveal as="li" key={item.title} delay={i * 0.06}>
            <div className="card-lift group h-full rounded-xl border border-border bg-surface/40 p-5">
              <div className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary transition-transform duration-500 group-hover:-rotate-6">
                  <Award className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <h3 className="text-base font-semibold leading-snug">{item.title}</h3>
                  <p className="mt-1 font-mono text-[11px] text-primary">{item.meta}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </ul>
    </SectionShell>
  );
}
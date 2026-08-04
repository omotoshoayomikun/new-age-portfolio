import { motion, useReducedMotion } from "motion/react";
import { skillGroups } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { SectionShell } from "./SectionShell";

export function Skills() {
  const reduced = useReducedMotion();

  return (
    <SectionShell
      id="skills"
      index="04"
      title="Skills"
      eyebrow="Where I spend my time, roughly in order of depth."
    >
      <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal as="li" key={group.category} delay={i * 0.05}>
            <div className="card-lift h-full rounded-xl border border-border bg-surface/40 p-5">
              <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-primary">
                {group.category}
              </h3>
              <ul className="mt-5 space-y-4">
                {group.items.map((skill) => (
                  <li key={skill.name}>
                    <div className="flex items-baseline justify-between gap-3">
                      <span className="min-w-0 truncate text-sm">{skill.name}</span>
                      <span className="shrink-0 font-mono text-[11px] text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div
                      role="progressbar"
                      aria-label={`${skill.name} proficiency`}
                      aria-valuenow={skill.level}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      className="mt-2 h-1 w-full overflow-hidden rounded-full bg-secondary"
                    >
                      <motion.span
                        className="block h-full rounded-full bg-primary"
                        initial={reduced ? { width: `${skill.level}%` } : { width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </ul>
    </SectionShell>
  );
}
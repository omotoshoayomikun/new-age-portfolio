import { experience } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { SectionShell } from "./SectionShell";

export function Experience() {
  return (
    <SectionShell id="experience" index="02" title="Experience">
      <ol className="relative space-y-3 border-l border-border pl-6 sm:pl-8">
        {experience.map((role, i) => (
          <Reveal as="li" key={role.company} delay={i * 0.07} className="relative">
            <span
              aria-hidden
              className="absolute -left-[31px] top-6 h-2.5 w-2.5 rounded-full border border-primary bg-background sm:-left-[39px]"
            />
            <article className="card-lift rounded-xl border border-transparent p-5 hover:bg-surface/60">
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-3 sm:flex sm:justify-between">
                <h3 className="min-w-0 text-lg font-semibold">
                  {role.role}{" "}
                  <span className="text-primary">
                    @ {role.company}
                  </span>
                </h3>
                <p className="shrink-0 font-mono text-xs text-muted-foreground">{role.period}</p>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {role.description}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {role.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full bg-secondary px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </ol>
    </SectionShell>
  );
}
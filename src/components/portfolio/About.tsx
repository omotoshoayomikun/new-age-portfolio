import { favouriteTech, profile } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { SectionShell } from "./SectionShell";
import Image from "next/image";

export function About() {
  return (
    <SectionShell id="about" index="01" title="About">
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
          <Reveal>
            <p>
              I&apos;m {profile.firstName} — a full stack developer who started out rebuilding a
              broken school website with a borrowed laptop and never really stopped. Nine years
              later, the appeal is the same: taking something tangled and making it feel obvious.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <p>
              Today I work across the stack on products where reliability matters — analytics
              platforms, healthcare tooling, infrastructure. I care about the unglamorous parts:
              clear data models, honest loading states, keyboard paths, and interfaces that respect
              the person on the other side of the screen.
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <p>
              Outside of work you&apos;ll find me writing about rendering strategies, restoring film
              cameras, and running slowly but consistently along the canal in {profile.location}.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="pt-4">
              <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-foreground">
                Technologies I enjoy working with
              </h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {favouriteTech.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-border bg-secondary/50 px-3 py-1.5 font-mono text-xs text-primary transition-colors hover:border-primary/50"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="lg:pt-2">
          <figure className="group relative mx-auto max-w-xs lg:max-w-none">
            <div
              aria-hidden
              className="absolute inset-0 translate-x-4 translate-y-4 rounded-2xl border border-primary/40 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"
            />
            <Image
              src="/images/portrait.jpg"
              alt={`Portrait of ${profile.name}, ${profile.title}`}
              width={912}
              height={1104}
              loading="lazy"
              className="relative aspect-[4/5] w-full rounded-2xl border border-border object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
            />
          </figure>
        </Reveal>
      </div>
    </SectionShell>
  );
}
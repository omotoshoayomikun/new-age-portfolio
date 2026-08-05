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
              I&apos;m {profile.firstName} — a full-stack developer who enjoys turning ideas into reliable,
              scalable digital products. What started as curiosity about how websites work has grown into a
              passion for building applications that solve real problems and deliver great user experiences.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <p>
              Over the years, I've worked across the full stack, building web applications,
              REST APIs, and secure backend systems with modern technologies like React, Next.js,
              Node.js, TypeScript, Express, and MongoDB. I enjoy designing clean architectures,
              optimizing performance, and creating interfaces that are intuitive, accessible,
              and built to scale.
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <p>
              I'm particularly interested in developer experience, application security,
              and building software that's maintainable long after the first release.
              Whether I'm developing a business platform, an AI-powered solution, or an enterprise
              system, I focus on writing clean, dependable code that users and teams can trust.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <p>
              When I'm not coding, I'm exploring emerging technologies, contributing to personal projects,
              learning new tools, and continuously refining my craft as a software engineer based in {profile.location}.
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
          <figure className="group relative mx-auto max-w-xs lg:max-w-none ">
            {/* <div
              aria-hidden
              className="absolute inset-0 translate-x-4 translate-y-4 rounded-2xl border border-primary/40 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"
            /> */}
            <div className="overflow-hidden w-[286px] h-[358px]">

              <Image
                src="/images/portrait.png"
                alt={`Portrait of ${profile.name}, ${profile.title}`}
                width={912}
                height={1104}
                loading="lazy"
                className="relative aspect-[4/5] w-full rounded-2xl border border-border object-cover grayscale-0 transition-all duration-500 group-hover:grayscale-0 hover:scale-[1.25]"
              />
            </div>
          </figure>
        </Reveal>
      </div>
    </SectionShell>
  );
}
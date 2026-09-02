import { ArrowUpRight } from "lucide-react";
import { otherProjects, projects } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { SectionShell } from "./SectionShell";
import Github from "../../../public/svg/Github";
import Image from "next/image";
import Link from "next/link";

export function Projects() {
  return (
    <SectionShell
      id="projects"
      index="03"
      title="Projects"
      eyebrow="A selection of things I've designed, built and maintained."
    >
      <div className="space-y-6">
        {projects.map((project, i) => (
          project.featured && 
          <Reveal as="article" key={project.name} delay={i * 0.07}>
            <div className="card-lift grid gap-6 rounded-2xl border border-border bg-surface/50 p-5 sm:grid-cols-[1.1fr_1fr] sm:items-center sm:p-6">
              <div className="overflow-hidden rounded-xl border border-border">
                <Image
                  src={project.image || ""}
                  alt={`${project.name} interface preview`}
                  width={1200}
                  height={800}
                  loading="lazy"
                  className="aspect-video w-full object-cover transition-transform duration-700 hover:scale-[1.04]"
                />
              </div>
              <div>
                <p className="eyebrow">Featured project</p>
                <h3 className="mt-3 text-xl font-semibold">{project.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <li key={tech} className="font-mono text-[11px] text-muted-foreground">
                      {tech}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex items-center gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.name} source on GitHub`}
                    className="grid h-11 w-11 place-items-center rounded-full text-muted-foreground transition-all hover:-translate-y-0.5 hover:text-primary"
                  >
                    <Github />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="link-underline inline-flex min-h-11 items-center gap-1.5 text-sm text-primary"
                  >
                    Live demo
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Link href="/archive" className="flex gap-2 mt-12 items-center text-primary text-sm font-mono">
        <span aria-hidden className="h-px flex-1 bg-border" />
        View All Project Archive
        <span aria-hidden className="h-px flex-1 bg-border" />
      </Link>

      {/* <h3 className="mt-12 text-sm font-semibold uppercase tracking-[0.14em] text-foreground">
        Other things I&apos;ve built
      </h3>
      <ul className="mt-6 grid gap-4 sm:grid-cols-2">
        {otherProjects.map((project, i) => (
          <Reveal as="li" key={project.name} delay={i * 0.05}>
            <div className="card-lift h-full rounded-xl border border-border bg-surface/40 p-5">
              <div className="flex items-center justify-between gap-3">
                <h4 className="min-w-0 truncate font-display text-base font-semibold">
                  {project.name}
                </h4>
                <div className="flex shrink-0 items-center">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.name} source on GitHub`}
                    className="grid h-11 w-11 place-items-center text-muted-foreground transition-colors hover:text-primary"
                  >
                    <Github />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.name} live demo`}
                    className="grid h-11 w-11 place-items-center text-muted-foreground transition-colors hover:text-primary"
                  >
                    <ArrowUpRight className="h-[18px] w-[18px]" />
                  </a>
                </div>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <li key={tech} className="font-mono text-[11px] text-muted-foreground">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </ul> */}
    </SectionShell>
  );
}

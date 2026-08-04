import { ArrowUpRight } from "lucide-react";
import { posts } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { SectionShell } from "./SectionShell";

export function Blog() {
  return (
    <SectionShell
      id="blog"
      index="07"
      title="Writing"
      eyebrow="Notes on engineering practice, mostly written to think more clearly."
    >
      <ul className="grid gap-5 sm:grid-cols-3">
        {posts.map((post, i) => (
          <Reveal as="li" key={post.title} delay={i * 0.06}>
            <a
              href="#blog"
              className="card-lift group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface/40"
            >
              <img
                src={post.image}
                alt=""
                width={1200}
                height={800}
                loading="lazy"
                className="aspect-video w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
              />
              <div className="flex flex-1 flex-col p-5">
                <p className="font-mono text-[11px] text-muted-foreground">
                  {post.date} · {post.readTime}
                </p>
                <h3 className="mt-3 text-base font-semibold leading-snug group-hover:text-primary">
                  {post.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm text-primary">
                  Read article
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </a>
          </Reveal>
        ))}
      </ul>
    </SectionShell>
  );
}
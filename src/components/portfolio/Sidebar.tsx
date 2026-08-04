// import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "motion/react";
import { profile, sections } from "@/data/portfolio";
import Github from "../../../public/svg/Github";
import Linkedin from "../../../public/svg/Linkedin";
import Mail from "../../../public/svg/Mail";
import Link from "next/link";


const socials = [
  { label: "GitHub", href: profile.github, Icon: Github() },
  { label: "LinkedIn", href: profile.linkedin, Icon: Linkedin() },
  { label: "Email", href: `mailto:${profile.email}`, Icon: Mail() },
];

export function Sidebar({ active }: { active: string }) {
  return (
    <>
      {/* Mobile / tablet top bar */}
      <header className="surface-glass sticky top-0 z-30 lg:hidden">
        <div className="flex items-center justify-between gap-4 px-5 py-3">
          <a href="#hero" className="min-w-0 truncate font-display text-base font-semibold">
            {profile.name}
          </a>
          <div className="flex shrink-0 items-center gap-1">
            {socials.map(({ label, href, Icon }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="grid h-11 w-11 place-items-center rounded-full text-muted-foreground transition-colors hover:text-primary"
              >
                {Icon}
              </Link>
            ))}
          </div>
        </div>
        <nav aria-label="Sections" className="border-t border-border">
          <ul className="flex gap-1 overflow-x-auto px-4 py-2 text-sm">
            {sections.map((section) => (
              <li key={section.id}>
                <Link
                  href={`#${section.id}`}
                  aria-current={active === section.id ? "true" : undefined}
                  className={`inline-flex shrink-0 rounded-full px-3 py-1.5 transition-colors ${active === section.id
                      ? "bg-primary/15 text-primary"
                      : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                  {section.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Desktop sidebar */}
      <div className="hidden lg:sticky lg:top-0 lg:flex lg:h-dvh lg:flex-col lg:justify-between lg:py-20">
        <div>
          <p className="eyebrow">{profile.location}</p>
          <h1 className="mt-4 font-display text-2xl font-semibold tracking-tight xl:text-3xl">
            {profile.name}
          </h1>
          <p className="mt-2 text-sm text-foreground/90">{profile.title}</p>
          <p className="mt-3 max-w-xs text-xs leading-relaxed text-muted-foreground">
            Building considered software for teams that care about the details.
          </p>

          <nav aria-label="Sections" className="mt-7">
            <ul className="space-y-1">
              {sections.map((section) => {
                const isActive = active === section.id;
                return (
                  <li key={section.id}>
                    <Link
                      href={`#${section.id}`}
                      aria-current={isActive ? "true" : undefined}
                      className="group flex items-center gap-4 py-2 text-sm w-max"
                    >
                      <span className={`relative block h-px ${isActive ? "w-16" : "w-8"} bg-border transition-all duration-300 group-hover:w-16 group-hover:bg-foreground/60`}>
                        {isActive && (
                          <motion.span
                            layoutId="nav-indicator"
                            className="absolute inset-y-0 left-0 block w-16 bg-primary"
                            transition={{ type: "spring", stiffness: 340, damping: 30 }}
                          />
                        )}
                      </span>
                      <span
                        className={`font-mono uppercase tracking-[0.16em] transition-colors ${isActive
                            ? "text-primary"
                            : "text-muted-foreground group-hover:text-foreground"
                          }`}
                      >
                        {section.label}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <ul className="flex items-center gap-2">
          {socials.map(({ label, href, Icon }) => (
            <li key={label}>
              <Link
                href={href}
                aria-label={label}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="grid h-11 w-11 place-items-center rounded-full text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:text-primary"
              >
                {Icon}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
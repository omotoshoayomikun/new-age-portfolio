import { ArrowDown } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { profile } from "@/data/portfolio";
import { MagneticButton } from "./MagneticButton";
import { ParticleField } from "./ParticleField";
import Link from "next/link";
import Github from "../../../public/svg/Github";
import Linkedin from "../../../public/svg/Linkedin";
import Mail from "../../../public/svg/Mail";

const socials = [
  { label: "GitHub", href: profile.github, Icon: Github() },
  { label: "LinkedIn", href: profile.linkedin, Icon: Linkedin() },
  { label: "Email", href: `mailto:${profile.email}`, Icon: Mail() },
];

export function Hero() {
  const reduced = useReducedMotion();
  const stagger = (i: number) => ({
    initial: reduced ? { opacity: 1 } : { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay: 0.1 * i, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section id="hero" className="relative scroll-mt-28 py-20 sm:py-28 lg:min-h-dvh lg:py-0">
      {/* <ParticleField /> */}
      <div className="relative flex min-h-full flex-col justify-center lg:h-dvh">
        <motion.p className="eyebrow" {...stagger(0)}>
          Hi,
        </motion.p>

        <motion.h2
          className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl xl:text-7xl lg:hidden"
          {...stagger(1)}
        >
          {profile.name}
        </motion.h2>

        <motion.p
          className="text-gradient mt-4 max-w-3xl font-display text-3xl font-semibold leading-[1.1] tracking-tight sm:text-5xl xl:text-6xl"
          {...stagger(2)}
        >
          I build software that feels effortless.
        </motion.p>

        <motion.p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg" {...stagger(3)}>
          {profile.tagline} Currently a {profile.title.toLowerCase()} focused on developer
          experience, performance and interfaces that age well.
        </motion.p>

        <motion.div className="mt-10 flex flex-wrap items-center gap-4" {...stagger(4)}>
          <MagneticButton variant="solid">
            <Link href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" className="flex gap-3">
              View Full Resume
              <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
            </Link>
          </MagneticButton>
          <MagneticButton href={`mailto:${profile.email}`}>Get in touch</MagneticButton>
        </motion.div>

        <motion.ul className="mt-12 flex items-center gap-2 lg:hidden" {...stagger(5)}>
          {socials.map(({ label, href, Icon }) => (
            <li key={label}>
              <Link
                href={href}
                aria-label={label}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="grid h-11 w-11 place-items-center rounded-full text-muted-foreground transition-all hover:-translate-y-1 hover:text-primary"
              >
                {Icon}
              </Link>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
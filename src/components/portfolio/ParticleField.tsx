import { useMemo } from "react";
import { useReducedMotion } from "motion/react";

/** Decorative floating particles + soft gradient wash behind the hero. */
export function ParticleField() {
  const reduced = useReducedMotion();

  const particles = useMemo(
    () =>
      Array.from({ length: 22 }, (_, i) => ({
        left: `${(i * 37) % 97}%`,
        top: `${(i * 53) % 92}%`,
        size: 2 + ((i * 7) % 4),
        delay: `${(i % 9) * 0.7}s`,
        duration: `${8 + (i % 6)}s`,
        opacity: 0.18 + ((i % 5) * 0.09),
      })),
    [],
  );

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden hero-glow">
      {!reduced &&
        particles.map((p, i) => (
          <span
            key={i}
            className="float-slow absolute rounded-full bg-primary"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              opacity: p.opacity,
              animationDelay: p.delay,
              animationDuration: p.duration,
            }}
          />
        ))}
    </div>
  );
}
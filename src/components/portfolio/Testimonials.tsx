"use client"

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/data/portfolio";
import { SectionShell } from "./SectionShell";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const current = testimonials[index] ?? testimonials[0]!;

  const move = (delta: number) =>
    setIndex((prev) => (prev + delta + testimonials.length) % testimonials.length);

  return (
    <SectionShell id="testimonials" index="06" title="Testimonials">
      <div className="rounded-2xl border border-border bg-surface/40 p-6 sm:p-10">
        <Quote aria-hidden className="h-7 w-7 text-primary/70" />
        <div aria-live="polite" className="min-h-40 sm:min-h-32">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={index}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5"
            >
              <p className="font-display text-lg leading-relaxed sm:text-xl">
                &ldquo;{current.quote}&rdquo;
              </p>
              <footer className="mt-6 text-sm">
                <span className="font-medium">{current.name}</span>
                <span className="text-muted-foreground"> · {current.role}</span>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <ul className="flex items-center gap-2">
            {testimonials.map((item, i) => (
              <li key={item.name}>
                <button
                  type="button"
                  aria-label={`Show testimonial from ${item.name}`}
                  aria-current={i === index ? "true" : undefined}
                  onClick={() => setIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === index ? "w-8 bg-primary" : "w-3 bg-secondary hover:bg-muted-foreground"
                  }`}
                />
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() => move(-1)}
              className="grid h-11 w-11 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() => move(1)}
              className="grid h-11 w-11 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
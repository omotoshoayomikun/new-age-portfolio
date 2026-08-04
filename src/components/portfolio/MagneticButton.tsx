"use client"

import { useRef, useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

type MagneticButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "solid" | "outline";
  className?: string;
  ariaLabel?: string;
  type?: "button" | "submit";
};

/** Button/link with a subtle magnetic pull toward the cursor. */
export function MagneticButton({
  children,
  href,
  onClick,
  variant = "outline",
  className,
  ariaLabel,
  type = "button",
}: MagneticButtonProps) {
  const ref = useRef<HTMLElement | null>(null);
  const reduced = useReducedMotion();
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMove = (event: React.MouseEvent) => {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setOffset({
      x: ((event.clientX - (rect.left + rect.width / 2)) / rect.width) * 14,
      y: ((event.clientY - (rect.top + rect.height / 2)) / rect.height) * 10,
    });
  };

  const styles = cn(
    "group relative inline-flex min-h-11 items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-colors",
    variant === "solid"
      ? "bg-primary text-primary-foreground hover:bg-primary/90"
      : "border border-primary/60 text-primary hover:bg-primary/10",
    className,
  );

  const content = (
    <>
      <span
        aria-hidden
        className="absolute inset-0 -translate-y-full bg-primary/15 transition-transform duration-500 ease-out group-hover:translate-y-0"
      />
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </>
  );

  const motionProps = {
    onMouseMove: handleMove,
    onMouseLeave: () => setOffset({ x: 0, y: 0 }),
    animate: { x: offset.x, y: offset.y },
    transition: { type: "spring" as const, stiffness: 220, damping: 18 },
    className: styles,
    "aria-label": ariaLabel,
  };

  if (href) {
    return (
      <motion.a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        {...motionProps}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noreferrer" : undefined}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref as React.Ref<HTMLButtonElement>}
      type={type}
      onClick={onClick}
      {...motionProps}
    >
      {content}
    </motion.button>
  );
}
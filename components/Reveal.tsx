"use client";

import { motion } from "motion/react";

/**
 * Reveals its children with a subtle fade + rise when scrolled into view.
 * `delay` staggers siblings. Respects reduced-motion via the CSS in globals.
 */
export default function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" as const, delay }}
    >
      {children}
    </motion.div>
  );
}

"use client";

import { motion } from "motion/react";
import { fadeInUp } from "@/lib/animations";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  className = "",
}: SectionHeadingProps) {
  return (
    <motion.div
      className={`mb-4 text-center ${className}`}
      variants={fadeInUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2
        className="text-3xl font-bold tracking-tight sm:text-4xl"
        style={{ color: "var(--text-primary)" }}
      >
        {title}
        <span style={{ color: "var(--accent-neon)" }}>.</span>
      </h2>
      {subtitle && (
        <p className="mt-3 text-base" style={{ color: "var(--text-muted)" }}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

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
      className={`mb-16 text-center ${className}`}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        initial: {},
        animate: { transition: { staggerChildren: 0.15 } },
      }}
    >
      {/* Title */}
      <motion.h2
        className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
        style={{ color: "var(--text-primary)" }}
        variants={fadeInUp}
      >
        {title}
      </motion.h2>

      {/* Elegant minimal line */}
      <motion.div
        className="mx-auto mt-6 h-px w-12"
        style={{ background: "var(--border-strong)" }}
        variants={fadeInUp}
      />

      {/* Subtitle */}
      {subtitle && (
        <motion.p
          className="mx-auto mt-6 max-w-2xl text-base sm:text-lg"
          style={{ color: "var(--text-secondary)" }}
          variants={fadeInUp}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}

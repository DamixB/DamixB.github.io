"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[90vh] flex-col justify-center"
    >
      <div className="mx-auto w-full max-w-5xl px-6 pt-20">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div variants={fadeInUp} className="mb-6">
            <span
              className="text-sm font-medium uppercase tracking-widest"
              style={{ color: "var(--text-muted)" }}
            >
              Portfolio & Wizytówka
            </span>
          </motion.div>

          <motion.h1
            className="mb-6 text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
            style={{ color: "var(--text-primary)" }}
            variants={fadeInUp}
          >
            Damian Barszcz.
          </motion.h1>

          <motion.h2
            className="mb-8 text-2xl font-medium sm:text-3xl md:text-4xl"
            style={{ color: "var(--text-secondary)" }}
            variants={fadeInUp}
          >
            Technolog & Twórca Projektów Webowych.
          </motion.h2>

          <motion.p
            className="mb-12 max-w-2xl text-lg leading-relaxed sm:text-xl"
            style={{ color: "var(--text-muted)" }}
            variants={fadeInUp}
          >
            Łączę wiedzę inżynieryjną z nowoczesnymi technologiami. Optymalizuję procesy produkcyjne i buduję czyste, funkcjonalne rozwiązania cyfrowe.
          </motion.p>

          <motion.div className="flex flex-wrap gap-4" variants={fadeInUp}>
            <Link
              href="/#projects"
              className="inline-flex h-12 items-center justify-center rounded-full px-8 font-medium transition-transform hover:-translate-y-0.5"
              style={{
                backgroundColor: "var(--text-primary)",
                color: "var(--bg-primary)",
                boxShadow: "var(--shadow-card)",
              }}
            >
              Zobacz projekty
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

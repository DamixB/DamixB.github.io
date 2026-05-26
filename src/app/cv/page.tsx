"use client";

import { motion } from "motion/react";
import Link from "next/link";
import ExperienceSection from "@/components/sections/ExperienceSection";
import SkillsSection from "@/components/sections/SkillsSection";
import { fadeInUp } from "@/lib/animations";

export default function CVPage() {
  return (
    <main className="min-h-screen pb-20 pt-28">
      <div className="mx-auto max-w-4xl px-6">
        <Link
          href="/"
          className="mb-12 inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-80"
          style={{ color: "var(--text-secondary)" }}
        >
          <span>←</span> Powrót do strony głównej
        </Link>

        <motion.div
          className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl" style={{ color: "var(--text-primary)" }}>
              Curriculum Vitae
            </h1>
            <p className="mt-4 text-lg" style={{ color: "var(--text-secondary)" }}>
              Szczegółowy przebieg mojej kariery zawodowej oraz umiejętności.
            </p>
          </div>
          <a
            href="/CV_Damian_Barszcz.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-full px-8 font-medium transition-transform hover:-translate-y-0.5"
            style={{
              backgroundColor: "var(--text-primary)",
              color: "var(--bg-primary)",
              boxShadow: "var(--shadow-card)",
            }}
          >
            Pobierz CV w PDF
          </a>
        </motion.div>
      </div>

      {/* Wykorzystujemy istniejące komponenty */}
      <ExperienceSection />
      <div className="section-divider" />
      <SkillsSection />
    </main>
  );
}

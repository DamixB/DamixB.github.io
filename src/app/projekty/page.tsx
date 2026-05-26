"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { projects } from "@/lib/data";
import GlowCard from "@/components/ui/GlowCard";
import { fadeInUp } from "@/lib/animations";

const ALL_CATEGORY = "Wszystkie";

export default function ProjektyPage() {
  const categories = useMemo(() => {
    const unique = Array.from(new Set(projects.map((p) => p.category)));
    return [ALL_CATEGORY, ...unique];
  }, []);

  const [activeFilter, setActiveFilter] = useState(ALL_CATEGORY);

  const filtered =
    activeFilter === ALL_CATEGORY
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <Link
          href="/"
          className="mb-12 inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-80"
          style={{ color: "var(--text-secondary)" }}
        >
          <span>←</span> Powrót do strony głównej
        </Link>

        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
        >
          <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl" style={{ color: "var(--text-primary)" }}>
            Projekty
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Przegląd moich projektów — od aplikacji webowych po wizytówki. Każdy z nich to połączenie pomysłu, kodu i designu.
          </p>
        </motion.div>

        <motion.div
          className="mb-10 flex flex-wrap gap-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.1 }}
        >
          {categories.map((cat) => {
            const isActive = cat === activeFilter;
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className="rounded-full px-5 py-2 text-sm font-medium transition-all duration-300"
                style={{
                  background: isActive ? "var(--text-primary)" : "var(--bg-surface)",
                  color: isActive ? "var(--bg-primary)" : "var(--text-secondary)",
                  border: `1px solid ${isActive ? "transparent" : "var(--border-subtle)"}`,
                }}
              >
                {cat}
              </button>
            );
          })}
        </motion.div>

        <motion.div className="grid gap-6 sm:grid-cols-2" layout>
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                variants={fadeInUp}
                initial="initial"
                animate="animate"
                exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                transition={{ type: "spring", stiffness: 100, damping: 15, delay: i * 0.08 }}
              >
                <GlowCard className="h-full flex flex-col">
                  <span className="mb-4 inline-block rounded-full px-3 py-1 text-xs font-medium self-start"
                        style={{ background: "var(--bg-primary)", color: "var(--text-secondary)", border: "1px solid var(--border-subtle)" }}>
                    {project.category}
                  </span>

                  <h2 className="mb-3 text-xl font-bold" style={{ color: "var(--text-primary)" }}>
                    {project.title}
                  </h2>

                  <p className="mb-6 flex-grow leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {project.description}
                  </p>

                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="rounded-md px-2.5 py-1 text-xs font-medium"
                            style={{ background: "var(--bg-surface-hover)", color: "var(--text-secondary)", border: "1px solid var(--border-subtle)" }}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.link && (
                    <div className="mt-auto pt-4" style={{ borderTop: "1px solid var(--border-subtle)" }}>
                      <a
                        href={project.link}
                        className="group inline-flex items-center gap-1.5 text-sm font-medium transition-colors hover:opacity-80"
                        style={{ color: "var(--text-primary)" }}
                      >
                        Zobacz projekt
                        <span className="transition-transform group-hover:translate-x-1">→</span>
                      </a>
                    </div>
                  )}
                </GlowCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <motion.p className="mt-16 text-center text-lg" style={{ color: "var(--text-muted)" }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            Brak projektów w tej kategorii.
          </motion.p>
        )}
      </div>
    </main>
  );
}

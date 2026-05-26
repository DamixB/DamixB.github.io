"use client";

import { motion } from "motion/react";
import { projects } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import GlowCard from "@/components/ui/GlowCard";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/animations";

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-padding relative" style={{ background: "var(--bg-surface)" }}>
      <div className="mx-auto max-w-6xl px-6 relative z-10">
        <SectionHeading title="Projekty" subtitle="Moje wybrane realizacje" />

        <motion.div
          className="mt-16 grid gap-8 lg:grid-cols-2"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={viewportConfig}
        >
          {projects.map((project, i) => (
            <motion.div key={project.id} variants={fadeInUp}>
              <GlowCard className="h-full flex flex-col">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl font-bold text-xl"
                       style={{ background: "var(--bg-primary)", color: "var(--text-primary)", border: "1px solid var(--border-subtle)" }}>
                    {project.title.charAt(0)}
                  </div>
                  <span className="rounded-full px-3 py-1 text-xs font-medium"
                        style={{ background: "var(--bg-primary)", color: "var(--text-secondary)", border: "1px solid var(--border-subtle)" }}>
                    {project.category}
                  </span>
                </div>

                <h3 className="mb-3 text-xl font-bold" style={{ color: "var(--text-primary)" }}>{project.title}</h3>
                <p className="mb-6 flex-grow text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {project.description}
                </p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="rounded-md px-2 py-1 text-xs font-medium"
                          style={{ background: "var(--bg-primary)", color: "var(--text-muted)", border: "1px solid var(--border-subtle)" }}>
                      {tech}
                    </span>
                  ))}
                </div>

                {project.link && (
                  <div className="mt-auto pt-4" style={{ borderTop: "1px solid var(--border-subtle)" }}>
                    <a
                      href={project.link}
                      className="group inline-flex items-center gap-2 text-sm font-medium transition-colors hover:opacity-80"
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
        </motion.div>
      </div>
    </section>
  );
}

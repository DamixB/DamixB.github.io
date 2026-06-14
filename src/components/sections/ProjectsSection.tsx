"use client";

import { motion } from "motion/react";
import { projects } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/animations";

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-padding relative">
      <div className="mx-auto max-w-6xl px-6 relative z-10">
        <SectionHeading title="Projekty" subtitle="Moje realizacje i narzędzia" />

        <motion.div
          className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={viewportConfig}
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={fadeInUp}>
              <div className="glass-card group relative flex h-full flex-col p-6">
                {/* Header: Emoji + Category */}
                <div className="mb-5 flex items-center justify-between">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-xl text-2xl"
                    style={{
                      background: "var(--card-icon-bg)",
                      border: "1px solid var(--border-subtle)",
                    }}
                  >
                    {project.emoji}
                  </div>
                  <span className="glass-pill !py-1 !px-3 !text-[11px]">
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="mb-3 text-xl font-bold transition-colors duration-300 group-hover:text-[var(--accent-blue)] color-primary"
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p className="mb-6 flex-grow text-sm leading-relaxed color-secondary">
                  {project.description}
                </p>

                {/* Tech badges */}
                <div className="mb-5 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md px-2.5 py-1 text-[11px] font-medium color-muted"
                      style={{
                        background: "var(--tech-badge-bg)",
                        border: "1px solid var(--tech-badge-border)",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                {project.link && (
                  <div
                    className="mt-auto pt-4"
                    style={{ borderTop: "1px solid var(--border-subtle)" }}
                  >
                    <a
                      href={project.link}
                      className="group/link inline-flex items-center gap-2 text-sm font-medium transition-all duration-300 color-secondary"
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = "var(--text-primary)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = "var(--text-secondary)";
                      }}
                    >
                      Otwórz projekt
                      <span className="transition-transform group-hover/link:translate-x-1">→</span>
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

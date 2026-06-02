"use client";

import { motion } from "motion/react";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/animations";
import { personalInfo, achievements } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";

export default function AboutSection() {
  return (
    <section id="about" className="section-padding relative">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading title="O mnie" subtitle="Kim jestem i co potrafię" />

        <motion.div
          className="mt-12 grid gap-8 md:grid-cols-2"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={viewportConfig}
        >
          {/* Left — Bio */}
          <motion.div variants={fadeInUp}>
            <p
              className="text-lg leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              {personalInfo.bio}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {personalInfo.socialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    background: "var(--bg-surface)",
                    color: "var(--text-secondary)",
                    border: "1px solid var(--border-subtle)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--accent-neon)";
                    e.currentTarget.style.color = "var(--accent-neon)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border-subtle)";
                    e.currentTarget.style.color = "var(--text-secondary)";
                  }}
                  aria-label={`Przejdź do profilu ${link.platform}`}
                >
                  {link.platform}
                  <span className="text-xs opacity-60">↗</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — Achievements */}
          <motion.div
            className="grid gap-4 sm:grid-cols-2"
            variants={staggerContainer}
          >
            {achievements.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                className="card-glow rounded-xl p-4 transition-all duration-300"
                style={{
                  background: "var(--bg-surface)",
                  border: "1px solid var(--border-subtle)",
                }}
              >
                <span className="mb-2 inline-block text-2xl">{item.icon}</span>
                <h3
                  className="text-sm font-semibold leading-tight"
                  style={{ color: "var(--text-primary)" }}
                >
                  {item.title}
                </h3>
                <p
                  className="mt-1 text-xs"
                  style={{ color: "var(--text-muted)" }}
                >
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

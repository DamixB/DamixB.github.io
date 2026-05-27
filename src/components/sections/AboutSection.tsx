"use client";

import { motion } from "motion/react";
import { fadeInUp, viewportConfig } from "@/lib/animations";
import { personalInfo } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";

export default function AboutSection() {
  return (
    <section id="about" className="section-padding relative">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <SectionHeading title="O mnie" />

        <motion.p
          className="mt-10 text-lg leading-relaxed sm:text-xl"
          style={{ color: "var(--text-secondary)" }}
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={viewportConfig}
        >
          {personalInfo.bio}
        </motion.p>

        <motion.div
          className="mt-10 flex justify-center gap-4"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={viewportConfig}
        >
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
            >
              {link.platform}
              <span className="text-xs opacity-60">↗</span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

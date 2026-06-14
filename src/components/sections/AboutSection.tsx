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
            <p className="text-lg leading-relaxed color-secondary">
              {personalInfo.bio}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {personalInfo.socialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-button h-auto px-5 py-2 text-sm"
                  aria-label={`Przejdź do profilu ${link.platform}`}
                >
                  {link.platform}
                  <span className="text-xs opacity-50">↗</span>
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
                className="glass-card p-4"
              >
                <span className="mb-2 inline-block text-2xl">{item.icon}</span>
                <h3 className="text-sm font-semibold leading-tight color-primary">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs color-muted">
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

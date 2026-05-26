"use client";

import { motion } from "motion/react";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, viewportConfig } from "@/lib/animations";
import { personalInfo, achievements } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import GlowCard from "@/components/ui/GlowCard";

export default function AboutSection() {
  return (
    <section id="about" className="section-padding relative">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading title="O mnie" subtitle="Kim jestem i co mnie napędza" />

        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div
            variants={fadeInLeft}
            initial="initial"
            whileInView="animate"
            viewport={viewportConfig}
            className="flex flex-col items-center justify-center lg:items-start"
          >
            <div className="relative mb-8 flex h-48 w-48 items-center justify-center rounded-full"
                 style={{ background: "var(--bg-surface)", border: "1px solid var(--border-subtle)" }}>
              <span className="text-5xl font-bold" style={{ color: "var(--text-secondary)" }}>
                DB
              </span>
            </div>

            <div className="flex gap-4">
              {personalInfo.socialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full transition-all hover:-translate-y-1"
                  style={{ background: "var(--bg-surface)", border: "1px solid var(--border-subtle)", color: "var(--text-secondary)" }}
                >
                  <span className="text-sm font-medium">{link.platform === "GitHub" ? "GH" : "IN"}</span>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeInRight}
            initial="initial"
            whileInView="animate"
            viewport={viewportConfig}
          >
            <div className="mb-10 text-base leading-relaxed sm:text-lg space-y-4" style={{ color: "var(--text-secondary)" }}>
              <p>{personalInfo.bio}</p>
            </div>

            <h3 className="mb-6 text-xl font-bold" style={{ color: "var(--text-primary)" }}>Certyfikaty i Osiągnięcia</h3>
            <motion.div
              className="grid gap-4 sm:grid-cols-2"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={viewportConfig}
            >
              {achievements.map((achievement, i) => (
                <motion.div key={i} variants={fadeInUp}>
                  <GlowCard className="h-full p-4">
                    <div className="flex items-start gap-4">
                      <span className="text-2xl">{achievement.icon}</span>
                      <div>
                        <h4 className="font-semibold" style={{ color: "var(--text-primary)" }}>{achievement.title}</h4>
                        <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>{achievement.description}</p>
                      </div>
                    </div>
                  </GlowCard>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

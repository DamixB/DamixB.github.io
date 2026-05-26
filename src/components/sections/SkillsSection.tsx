"use client";

import { motion } from "motion/react";
import { skills } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/animations";
import GlowCard from "@/components/ui/GlowCard";

export default function SkillsSection() {
  return (
    <section id="skills" className="section-padding relative">
      <div className="mx-auto max-w-6xl px-6 relative z-10">
        <SectionHeading title="Umiejętności" subtitle="Czym posługuję się w pracy" />

        <motion.div
          className="mt-16 grid gap-8 md:grid-cols-2"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={viewportConfig}
        >
          {skills.map((category, index) => (
            <motion.div key={category.category} variants={fadeInUp}>
              <GlowCard className="h-full">
                <h3 className="mb-8 text-xl font-bold" style={{ color: "var(--text-primary)" }}>
                  {category.category}
                </h3>

                <div className="space-y-6">
                  {category.items.map((skill) => (
                    <div key={skill.name}>
                      <div className="mb-2 flex justify-between">
                        <span className="text-sm font-medium" style={{ color: "var(--text-secondary)" }}>
                          {skill.name}
                        </span>
                        <span className="text-sm font-mono" style={{ color: "var(--text-muted)" }}>
                          {skill.level}%
                        </span>
                      </div>
                      <div className="skill-bar-bg">
                        <motion.div
                          className="skill-bar-fill"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true, margin: "-50px" }}
                          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

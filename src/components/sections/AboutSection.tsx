"use client";

import { motion } from "motion/react";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/animations";
import { personalInfo } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";

export default function AboutSection() {
  return (
    <section id="about" className="section-padding relative">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <SectionHeading title="O mnie" subtitle="Krótko o mojej drodze" />

        <motion.div
          className="mt-12 text-lg leading-relaxed sm:text-xl"
          style={{ color: "var(--text-secondary)" }}
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={viewportConfig}
        >
          <p className="mb-8">{personalInfo.bio}</p>
          
          <div className="flex justify-center gap-6 mt-10">
            {personalInfo.socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium transition-colors hover:opacity-80 flex items-center gap-2"
                style={{ color: "var(--text-primary)" }}
              >
                <span>{link.platform}</span>
                <span className="text-sm opacity-50">↗</span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

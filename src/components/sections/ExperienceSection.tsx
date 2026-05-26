"use client";

import { motion } from "motion/react";
import { fadeInUp, fadeInLeft, fadeInRight, viewportConfig, staggerContainer } from "@/lib/animations";
import { experiences, education } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import GlowCard from "@/components/ui/GlowCard";

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-padding relative" style={{ background: "var(--bg-surface)" }}>
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading title="Doświadczenie" subtitle="Moja droga zawodowa" />

        <div className="relative mt-16">
          <div className="timeline-line" />
          
          <div className="space-y-12">
            <h3 className="text-2xl font-bold ml-12 md:ml-0 md:text-center" style={{ color: "var(--text-primary)" }}>
              Kariera
            </h3>
            
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={exp.id} className="relative flex flex-col md:flex-row md:items-center">
                  <div className="absolute left-[1.25rem] md:left-1/2 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full bg-white border-4 border-gray-300 dark:border-gray-600 dark:bg-black z-10" />
                  
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${isEven ? "md:pr-12 md:text-right" : "md:pl-12 md:ml-auto"}`}>
                    <motion.div
                      variants={isEven ? fadeInLeft : fadeInRight}
                      initial="initial"
                      whileInView="animate"
                      viewport={viewportConfig}
                    >
                      <GlowCard className="p-6">
                        <span className="mb-2 inline-block text-sm font-medium" style={{ color: "var(--text-muted)" }}>
                          {exp.period}
                        </span>
                        <h4 className="text-xl font-bold" style={{ color: "var(--text-primary)" }}>{exp.title}</h4>
                        <p className="mt-1 font-medium" style={{ color: "var(--text-secondary)" }}>{exp.company}</p>
                        <p className="mt-4 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{exp.description}</p>
                        <div className={`mt-4 flex flex-wrap gap-2 ${isEven ? "md:justify-end" : ""}`}>
                          {exp.technologies.map(tech => (
                            <span key={tech} className="rounded-md px-2 py-1 text-xs font-medium" style={{ background: "var(--bg-primary)", color: "var(--text-secondary)", border: "1px solid var(--border-subtle)" }}>
                              {tech}
                            </span>
                          ))}
                        </div>
                      </GlowCard>
                    </motion.div>
                  </div>
                </div>
              );
            })}

            <div className="py-8" />
            
            <h3 className="text-2xl font-bold ml-12 md:ml-0 md:text-center" style={{ color: "var(--text-primary)" }}>
              Edukacja
            </h3>
            
            {education.map((edu, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={edu.id} className="relative flex flex-col md:flex-row md:items-center">
                  <div className="absolute left-[1.25rem] md:left-1/2 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full bg-white border-4 border-gray-300 dark:border-gray-600 dark:bg-black z-10" />
                  
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${isEven ? "md:pr-12 md:text-right" : "md:pl-12 md:ml-auto"}`}>
                    <motion.div
                      variants={fadeInUp}
                      initial="initial"
                      whileInView="animate"
                      viewport={viewportConfig}
                    >
                      <GlowCard className="p-6">
                        <span className="mb-2 inline-block text-sm font-medium" style={{ color: "var(--text-muted)" }}>
                          {edu.period}
                        </span>
                        <h4 className="text-xl font-bold" style={{ color: "var(--text-primary)" }}>{edu.degree}</h4>
                        <p className="mt-1 font-medium" style={{ color: "var(--text-secondary)" }}>{edu.school}</p>
                        <p className="mt-4 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{edu.description}</p>
                      </GlowCard>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

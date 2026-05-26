"use client";

import { motion } from "motion/react";
import { TypewriterText } from "@/components/ui/AnimatedText";
import NeonButton from "@/components/ui/NeonButton";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden"
    >
      <div className="mx-auto w-full max-w-6xl px-6 relative z-10 pt-20">
        <motion.div
          className="max-w-3xl"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div variants={fadeInUp} className="mb-4">
            <span
              className="inline-block rounded-full px-3 py-1 text-sm font-medium"
              style={{
                background: "var(--bg-surface)",
                color: "var(--text-secondary)",
                border: "1px solid var(--border-subtle)",
              }}
            >
              Cześć, nazywam się
            </span>
          </motion.div>

          <motion.h1
            className="mb-4 text-5xl font-extrabold tracking-tight sm:text-7xl md:text-8xl"
            style={{ color: "var(--text-primary)" }}
            variants={fadeInUp}
          >
            Damian Barszcz.
          </motion.h1>

          <motion.div
            className="mb-8 flex h-[80px] sm:h-[60px] items-center"
            variants={fadeInUp}
          >
            <h2
              className="text-2xl font-bold sm:text-4xl md:text-5xl"
              style={{ color: "var(--text-secondary)" }}
            >
              Jestem{" "}
              <TypewriterText
                texts={["Technologiem.", "Twórcą Projektów Webowych.", "Optymalizatorem Procesów."]}
                speed={80}
              />
            </h2>
          </motion.div>

          <motion.p
            className="mb-10 max-w-xl text-lg leading-relaxed sm:text-xl"
            style={{ color: "var(--text-muted)" }}
            variants={fadeInUp}
          >
            Buduję nowoczesne, zoptymalizowane rozwiązania cyfrowe oraz zarządzam procesami produkcyjnymi z dbałością o każdy detal.
          </motion.p>

          <motion.div className="flex flex-wrap items-center gap-4" variants={fadeInUp}>
            <NeonButton href="#projects" variant="primary" size="lg">
              Zobacz projekty
            </NeonButton>
            <NeonButton href="#contact" variant="outline" size="lg">
              Skontaktuj się
            </NeonButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

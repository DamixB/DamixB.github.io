"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { personalInfo } from "@/lib/data";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[92vh] flex-col justify-center overflow-hidden"
    >
      {/* Ambient glow orbs */}
      <div
        className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full opacity-20 blur-[120px]"
        style={{ background: "var(--accent-neon)" }}
      />
      <div
        className="pointer-events-none absolute -bottom-40 -right-40 h-[400px] w-[400px] rounded-full opacity-15 blur-[120px]"
        style={{ background: "var(--accent-purple)" }}
      />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 pt-20">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div variants={fadeInUp} className="mb-6">
            <span
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest"
              style={{
                background: "rgba(0, 210, 255, 0.08)",
                color: "var(--accent-neon)",
                border: "1px solid rgba(0, 210, 255, 0.15)",
              }}
            >
              <span
                className="inline-block h-1.5 w-1.5 rounded-full"
                style={{
                  background: "var(--accent-neon)",
                  animation: "neonPulse 2s ease-in-out infinite",
                }}
              />
              Portfolio & Narzędzia
            </span>
          </motion.div>

          <motion.h1
            className="mb-6 text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
            variants={fadeInUp}
          >
            <span style={{ color: "var(--text-primary)" }}>Tworzę </span>
            <span className="text-neon-gradient">narzędzia</span>
            <br />
            <span style={{ color: "var(--text-primary)" }}>i rozwiązania.</span>
          </motion.h1>

          <motion.p
            className="mb-12 max-w-2xl text-lg leading-relaxed sm:text-xl"
            style={{ color: "var(--text-secondary)" }}
            variants={fadeInUp}
          >
            {personalInfo.bio}
          </motion.p>

          <motion.div className="flex flex-wrap items-center gap-4" variants={fadeInUp}>
            <Link
              href="/#projects"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-full px-8 font-medium transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: "var(--accent-gradient)",
                color: "#0a0a0f",
                boxShadow: "var(--shadow-neon)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "var(--shadow-neon-strong)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "var(--shadow-neon)";
              }}
            >
              Zobacz projekty
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </Link>

            <div className="flex items-center gap-3 ml-2">
              {personalInfo.socialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    background: "var(--bg-surface)",
                    border: "1px solid var(--border-subtle)",
                    color: "var(--text-secondary)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--accent-neon)";
                    e.currentTarget.style.color = "var(--accent-neon)";
                    e.currentTarget.style.boxShadow = "0 0 15px rgba(0, 210, 255, 0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border-subtle)";
                    e.currentTarget.style.color = "var(--text-secondary)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                  title={link.platform}
                >
                  {link.icon === "github" ? (
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
                  ) : (
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  )}
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

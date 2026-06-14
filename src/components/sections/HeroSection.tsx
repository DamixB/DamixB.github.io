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
      {/* Ambient gradient orbs — Apple style */}
      <div
        className="pointer-events-none absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full blur-[140px]"
        style={{
          background: "linear-gradient(135deg, var(--accent-blue), #5E5CE6)",
          opacity: "var(--orb-opacity)",
          animation: "orbFloat 20s ease-in-out infinite",
        }}
      />
      <div
        className="pointer-events-none absolute -bottom-32 -right-32 h-[400px] w-[400px] rounded-full blur-[140px]"
        style={{
          background: "linear-gradient(135deg, var(--accent-purple), #FF6482)",
          opacity: "var(--orb-opacity)",
          animation: "orbFloat 25s ease-in-out infinite reverse",
        }}
      />
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]"
        style={{
          background: "linear-gradient(135deg, var(--status-green), var(--accent-blue))",
          opacity: "calc(var(--orb-opacity) * 0.5)",
          animation: "orbFloat 30s ease-in-out infinite",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 pt-20">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div variants={fadeInUp} className="mb-6">
            <span className="glass-pill">
              <span
                className="inline-block h-1.5 w-1.5 rounded-full"
                style={{
                  background: "var(--status-green)",
                  animation: "glassPulse 2s ease-in-out infinite",
                }}
              />
              Portfolio & Narzędzia
            </span>
          </motion.div>

          <motion.h1
            className="mb-6 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
            variants={fadeInUp}
          >
            <span className="text-subtle-gradient">Tworzę </span>
            <span className="text-apple-gradient">narzędzia</span>
            <br />
            <span className="text-subtle-gradient">i rozwiązania.</span>
          </motion.h1>

          <motion.p
            className="mb-12 max-w-2xl text-lg leading-relaxed sm:text-xl color-secondary"
            variants={fadeInUp}
          >
            {personalInfo.bio}
          </motion.p>

          <motion.div className="flex flex-wrap items-center gap-4" variants={fadeInUp}>
            <Link
              href="/#projects"
              className="glass-button glass-button-primary h-12 px-8 font-medium"
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
                  className="glass-button h-10 w-10 !gap-0 !px-0"
                  aria-label={`Przejdź do profilu ${link.platform}`}
                  title={link.platform}
                >
                  {link.icon === "github" ? (
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
                  ) : link.icon === "instagram" ? (
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                  ) : (
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
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

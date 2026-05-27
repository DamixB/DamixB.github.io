"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import { fadeInUp, fadeInLeft, fadeInRight, viewportConfig } from "@/lib/animations";

// ════════════════════════════════════════════════════════════════
// FORMSPREE — Formularz kontaktowy (bezserwerowy)
// Aby formularz działał, załóż darmowe konto na https://formspree.io
// i utwórz nowy formularz. Następnie wklej poniżej swój endpoint:
const FORMSPREE_ENDPOINT = "https://formspree.io/f/TWOJ_ID";
// Zamień "TWOJ_ID" na swój faktyczny identyfikator z Formspree.
// ════════════════════════════════════════════════════════════════

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("sent");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="section-padding relative">
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full opacity-10 blur-[120px]"
        style={{ background: "var(--accent-purple)" }}
      />

      <div className="mx-auto max-w-4xl px-6 relative z-10">
        <SectionHeading title="Kontakt" subtitle="Masz pomysł? Porozmawiajmy" />

        <motion.div
          className="mt-12"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={viewportConfig}
        >
          <div
            className="rounded-2xl p-8 sm:p-10"
            style={{
              background: "var(--bg-surface)",
              border: "1px solid var(--border-subtle)",
              boxShadow: "var(--shadow-card)",
            }}
          >
            {status === "sent" ? (
              <motion.div
                className="flex flex-col items-center justify-center py-12 text-center"
                variants={fadeInUp}
                initial="initial"
                animate="animate"
              >
                <div
                  className="mb-4 flex h-16 w-16 items-center justify-center rounded-full"
                  style={{
                    background: "rgba(0, 210, 255, 0.1)",
                    border: "1px solid rgba(0, 210, 255, 0.2)",
                  }}
                >
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="var(--accent-neon)" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold" style={{ color: "var(--accent-neon)" }}>
                  Wiadomość wysłana!
                </h3>
                <p className="mt-2" style={{ color: "var(--text-secondary)" }}>
                  Dziękuję za kontakt. Odpowiem najszybciej jak to możliwe.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-sm transition-opacity hover:opacity-80"
                  style={{ color: "var(--accent-neon)" }}
                >
                  ← Wyślij kolejną wiadomość
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-xl font-semibold mb-2" style={{ color: "var(--text-primary)" }}>
                  Napisz do mnie
                </h3>
                <p className="text-sm mb-6" style={{ color: "var(--text-muted)" }}>
                  Wypełnij formularz — odpowiadam w ciągu 24h.
                </p>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium" style={{ color: "var(--text-secondary)" }}>
                      Imię
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Twoje imię"
                      className="elegant-input"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium" style={{ color: "var(--text-secondary)" }}>
                      Email
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="twoj@email.pl"
                      className="elegant-input"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium" style={{ color: "var(--text-secondary)" }}>
                    Wiadomość
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Opisz swój projekt lub pomysł..."
                    className="elegant-input resize-none"
                  />
                </div>

                {status === "error" && (
                  <p className="text-sm font-medium" style={{ color: "#ef4444" }}>
                    Wystąpił błąd. Spróbuj ponownie lub napisz bezpośrednio na email.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="group w-full inline-flex h-12 items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-wait"
                  style={{
                    background: "var(--accent-gradient)",
                    color: "#0a0a0f",
                    boxShadow: "var(--shadow-neon)",
                  }}
                  onMouseEnter={(e) => {
                    if (status !== "sending") e.currentTarget.style.boxShadow = "var(--shadow-neon-strong)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "var(--shadow-neon)";
                  }}
                >
                  {status === "sending" ? "Wysyłanie..." : "Wyślij wiadomość"}
                  {status !== "sending" && <span className="transition-transform group-hover:translate-x-0.5">→</span>}
                </button>

                <p className="text-center text-xs mt-2" style={{ color: "var(--text-muted)" }}>
                  Wysyłając wiadomość, akceptujesz{" "}
                  <Link
                    href="/polityka-prywatnosci"
                    className="underline underline-offset-2 transition-colors hover:text-[var(--accent-neon)]"
                  >
                    politykę prywatności
                  </Link>.
                </p>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

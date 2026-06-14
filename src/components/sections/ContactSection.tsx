"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import { fadeInUp, viewportConfig } from "@/lib/animations";

// ════════════════════════════════════════════════════════════════
// FORMSUBMIT — Formularz kontaktowy (bezserwerowy)
// Pierwsza wiadomość poprosi Cię o aktywację formularza na e-mailu.
// WAŻNE: Zamień poniższy hash na swój unikalny alias z FormSubmit
// (otrzymasz go po pierwszej aktywacji), aby nie ujawniać adresu email.
const FORMSUBMIT_ENDPOINT = "https://formsubmit.co/ajax/damian.barszcz99@gmail.com";
// ════════════════════════════════════════════════════════════════

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch(FORMSUBMIT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...formData,
          _subject: "Nowa wiadomość z portfolio!"
        }),
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
        className="pointer-events-none absolute bottom-0 left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full blur-[140px]"
        style={{
          background: `linear-gradient(135deg, var(--accent-purple), var(--accent-blue))`,
          opacity: "var(--orb-opacity)",
        }}
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
          <div className="glass-card p-8 sm:p-10">
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
                    background: "var(--success-bg)",
                    border: "1px solid var(--success-border)",
                  }}
                >
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="var(--success-color)" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold color-success">
                  Wiadomość wysłana!
                </h3>
                <p className="mt-2 color-secondary">
                  Dziękuję za kontakt. Odpowiem najszybciej jak to możliwe.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="glass-button mt-6 px-5 py-2 text-sm"
                >
                  ← Wyślij kolejną wiadomość
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-6"
                aria-describedby={status === "error" ? "form-error" : undefined}
              >
                <h3 className="text-xl font-semibold mb-2 color-primary">
                  Napisz do mnie
                </h3>
                <p className="text-sm mb-6 color-muted">
                  Wypełnij formularz — odpowiadam w ciągu 24h.
                </p>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium color-secondary">
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
                      className="glass-input"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium color-secondary">
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
                      className="glass-input"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium color-secondary">
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
                    className="glass-input resize-none"
                  />
                </div>

                {status === "error" && (
                  <p id="form-error" role="alert" className="text-sm font-medium color-error">
                    Wystąpił błąd. Spróbuj ponownie lub napisz bezpośrednio na email.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="glass-button glass-button-primary w-full h-12 font-medium disabled:opacity-60 disabled:cursor-wait"
                >
                  {status === "sending" ? "Wysyłanie..." : "Wyślij wiadomość"}
                  {status !== "sending" && <span>→</span>}
                </button>

                <p className="text-center text-xs mt-2 color-muted">
                  Wysyłając wiadomość, akceptujesz{" "}
                  <Link
                    href="/polityka-prywatnosci"
                    className="underline underline-offset-2 transition-colors duration-300 hover:text-[var(--text-secondary)]"
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

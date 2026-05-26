"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { personalInfo } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import GlowCard from "@/components/ui/GlowCard";
import { fadeInUp, fadeInLeft, fadeInRight, viewportConfig } from "@/lib/animations";
import NeonButton from "@/components/ui/NeonButton";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading title="Kontakt" subtitle="Porozmawiajmy o Twoim projekcie" />

        <div className="mt-12 grid gap-12 md:grid-cols-2">
          <motion.div
            className="flex flex-col justify-center space-y-8"
            variants={fadeInLeft}
            initial="initial"
            whileInView="animate"
            viewport={viewportConfig}
          >
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full" style={{ background: "var(--bg-surface)", border: "1px solid var(--border-subtle)" }}>
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} style={{ color: "var(--text-primary)" }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium" style={{ color: "var(--text-secondary)" }}>Email</p>
                <a href={`mailto:${personalInfo.email}`} className="text-lg font-medium transition-colors hover:opacity-80" style={{ color: "var(--text-primary)" }}>
                  {personalInfo.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full" style={{ background: "var(--bg-surface)", border: "1px solid var(--border-subtle)" }}>
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} style={{ color: "var(--text-primary)" }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium" style={{ color: "var(--text-secondary)" }}>Lokalizacja</p>
                <p className="text-lg font-medium" style={{ color: "var(--text-primary)" }}>{personalInfo.location}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full" style={{ background: "var(--bg-surface)", border: "1px solid var(--border-subtle)" }}>
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} style={{ color: "var(--text-primary)" }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium" style={{ color: "var(--text-secondary)" }}>Telefon</p>
                <a href={`tel:${personalInfo.phone.replace(/\s/g, '')}`} className="text-lg font-medium transition-colors hover:opacity-80" style={{ color: "var(--text-primary)" }}>
                  {personalInfo.phone}
                </a>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-green-500" />
              <p className="text-sm font-medium" style={{ color: "var(--text-muted)" }}>Odpowiadam w ciągu 24h</p>
            </div>
          </motion.div>

          <motion.div variants={fadeInRight} initial="initial" whileInView="animate" viewport={viewportConfig}>
            <GlowCard>
              {sent ? (
                <motion.div className="flex flex-col items-center justify-center py-12 text-center" variants={fadeInUp} initial="initial" animate="animate">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400">
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold" style={{ color: "var(--text-primary)" }}>Wiadomość wysłana!</h3>
                  <p className="mt-2" style={{ color: "var(--text-secondary)" }}>Dziękuję za kontakt. Odpowiem najszybciej jak to możliwe.</p>
                  <button type="button" onClick={() => { setSent(false); setFormData({ name: "", email: "", message: "" }); }} className="mt-6 text-sm underline transition-opacity hover:opacity-80" style={{ color: "var(--text-primary)" }}>
                    Wyślij kolejną wiadomość
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-xl font-semibold mb-6" style={{ color: "var(--text-primary)" }}>Napisz do mnie</h3>

                  <div>
                    <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium" style={{ color: "var(--text-secondary)" }}>Imię</label>
                    <input id="contact-name" name="name" type="text" required value={formData.name} onChange={handleChange} placeholder="Twoje imię" className="elegant-input" />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium" style={{ color: "var(--text-secondary)" }}>Email</label>
                    <input id="contact-email" name="email" type="email" required value={formData.email} onChange={handleChange} placeholder="twoj@email.pl" className="elegant-input" />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium" style={{ color: "var(--text-secondary)" }}>Wiadomość</label>
                    <textarea id="contact-message" name="message" required rows={4} value={formData.message} onChange={handleChange} placeholder="W czym mogę pomóc?" className="elegant-input resize-none" />
                  </div>

                  <NeonButton variant="primary" size="lg" className="w-full mt-4">
                    Wyślij wiadomość
                  </NeonButton>

                  <p className="text-center text-xs mt-4" style={{ color: "var(--text-muted)" }}>
                    Wysyłając wiadomość, akceptujesz naszą <Link href="/polityka-prywatnosci" className="underline hover:opacity-80" style={{ color: "var(--text-primary)" }}>politykę prywatności</Link>.
                  </p>
                </form>
              )}
            </GlowCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

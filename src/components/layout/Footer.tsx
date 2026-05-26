"use client";

import Link from "next/link";

const quickLinks = [
  { label: "O mnie", href: "/#about" },
  { label: "Projekty", href: "/#projects" },
  { label: "Kontakt", href: "/#contact" },
];

const legalLinks = [
  { label: "Regulamin", href: "/regulamin" },
  { label: "Polityka Prywatności", href: "/polityka-prywatnosci" },
];

export default function Footer() {
  return (
    <footer className="border-t" style={{ backgroundColor: "var(--bg-surface)", borderColor: "var(--border-subtle)" }}>
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <Link href="/" className="text-xl font-extrabold tracking-tighter" style={{ color: "var(--text-primary)" }}>
              damixb<span style={{ color: "var(--text-muted)" }}>.pl</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              Technolog i twórca rozwiązań cyfrowych. Optymalizuję procesy i buduję nowoczesne strony internetowe.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold" style={{ color: "var(--text-primary)" }}>Na skróty</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm transition-colors hover:opacity-80" style={{ color: "var(--text-secondary)" }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold" style={{ color: "var(--text-primary)" }}>Informacje prawne</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm transition-colors hover:opacity-80" style={{ color: "var(--text-secondary)" }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between border-t pt-8 md:flex-row" style={{ borderColor: "var(--border-subtle)" }}>
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>
            © {new Date().getFullYear()} damixb.pl — Wszystkie prawa zastrzeżone
          </p>
          <p className="mt-2 text-sm md:mt-0" style={{ color: "var(--text-muted)" }}>
            Zbudowane z pasją przez Damiana
          </p>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { type ReactNode } from "react";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string; // Kept for backwards compatibility but ignored
}

export default function GlowCard({
  children,
  className = "",
}: GlowCardProps) {
  return (
    <div
      className={`group relative rounded-2xl p-6 transition-all duration-300 ease-out ${className}`}
      style={{
        background: "var(--bg-surface)",
        border: "1px solid var(--border-subtle)",
        boxShadow: "var(--shadow-card)",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = "var(--border-strong)";
        el.style.boxShadow = "var(--shadow-hover)";
        el.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = "var(--border-subtle)";
        el.style.boxShadow = "var(--shadow-card)";
        el.style.transform = "translateY(0)";
      }}
    >
      <div className="relative z-10">{children}</div>
    </div>
  );
}

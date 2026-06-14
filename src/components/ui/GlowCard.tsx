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
    <div className={`glass-card p-6 ${className}`}>
      <div className="relative z-10">{children}</div>
    </div>
  );
}

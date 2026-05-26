"use client";

import { type ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline";
type Size = "sm" | "md" | "lg";

interface NeonButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
}

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-1.5 text-sm",
  md: "px-6 py-2.5 text-base",
  lg: "px-8 py-3.5 text-lg",
};

export default function NeonButton({
  children,
  onClick,
  href,
  variant = "primary",
  size = "md",
  className = "",
}: NeonButtonProps) {
  const isPrimary = variant === "primary";
  const isOutline = variant === "outline";

  const sharedClasses = `
    group relative inline-flex items-center justify-center
    rounded-full font-medium transition-all duration-300 ease-out cursor-pointer
    ${sizeClasses[size]}
    ${className}
  `.trim();

  const handleMouseEnter = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>
  ) => {
    const el = e.currentTarget;
    if (isPrimary) {
      el.style.backgroundColor = "var(--accent-hover)";
      el.style.transform = "translateY(-1px)";
      el.style.boxShadow = "var(--shadow-hover)";
    } else if (isOutline) {
      el.style.backgroundColor = "var(--bg-surface-hover)";
    } else {
      el.style.backgroundColor = "var(--border-strong)";
    }
  };

  const handleMouseLeave = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>
  ) => {
    const el = e.currentTarget;
    if (isPrimary) {
      el.style.backgroundColor = "var(--accent-primary)";
      el.style.transform = "translateY(0)";
      el.style.boxShadow = "var(--shadow-card)";
    } else if (isOutline) {
      el.style.backgroundColor = "transparent";
    } else {
      el.style.backgroundColor = "var(--border-subtle)";
    }
  };

  const baseStyle = isPrimary
    ? {
        backgroundColor: "var(--accent-primary)",
        color: "var(--bg-primary)",
        boxShadow: "var(--shadow-card)",
      }
    : isOutline
      ? {
          backgroundColor: "transparent",
          color: "var(--text-primary)",
          border: "1px solid var(--border-strong)",
        }
      : {
          backgroundColor: "var(--border-subtle)",
          color: "var(--text-primary)",
        };

  if (href) {
    return (
      <a
        href={href}
        className={sharedClasses}
        style={baseStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={sharedClasses}
      style={baseStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </button>
  );
}

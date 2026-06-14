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
  sm: "px-5 py-2 text-sm",
  md: "px-7 py-3 text-base",
  lg: "px-9 py-4 text-lg",
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

  const variantClass = isPrimary
    ? "glass-button glass-button-primary"
    : isOutline
      ? "glass-button"
      : "glass-button";

  const sharedClasses = `${variantClass} ${sizeClasses[size]} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={sharedClasses}>
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={sharedClasses}
    >
      {children}
    </button>
  );
}

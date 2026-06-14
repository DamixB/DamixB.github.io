// ============================================================================
// damixb.github.io — Animation Presets
// Apple Liquid Glass — Smooth, refined motion
// ============================================================================

import type { Variants, Transition } from 'motion/react';

// --- Shared Transitions — Apple-style smooth & weighty ---

const smoothTransition: Transition = {
  type: 'spring',
  stiffness: 70,
  damping: 20,
  mass: 1,
};

const gentleTransition: Transition = {
  type: 'spring',
  stiffness: 50,
  damping: 25,
  mass: 1.2,
};

const snappyTransition: Transition = {
  type: 'spring',
  stiffness: 150,
  damping: 25,
  mass: 0.8,
};

// --- Fade Variants ---

export const fadeInUp: Variants = {
  initial: {
    opacity: 0,
    y: 24,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: smoothTransition,
  },
};

export const fadeInDown: Variants = {
  initial: {
    opacity: 0,
    y: -24,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: smoothTransition,
  },
};

export const fadeInLeft: Variants = {
  initial: {
    opacity: 0,
    x: -24,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: smoothTransition,
  },
};

export const fadeInRight: Variants = {
  initial: {
    opacity: 0,
    x: 24,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: smoothTransition,
  },
};

// --- Stagger Containers ---

export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

export const staggerContainerSlow: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export const staggerContainerFast: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.02,
    },
  },
};

// --- Scale Variants ---

export const scaleIn: Variants = {
  initial: {
    opacity: 0,
    scale: 0.9,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: gentleTransition,
  },
};

export const scaleInBounce: Variants = {
  initial: {
    opacity: 0,
    scale: 0.6,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: snappyTransition,
  },
};

// --- Slide Variants ---

export const slideInFromLeft: Variants = {
  initial: {
    x: -80,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: gentleTransition,
  },
};

export const slideInFromRight: Variants = {
  initial: {
    x: 80,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: gentleTransition,
  },
};

export const slideInFromBottom: Variants = {
  initial: {
    y: 80,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: gentleTransition,
  },
};

// --- Text / Letter Animation ---

export const letterAnimation: Variants = {
  initial: {
    opacity: 0,
    y: 16,
    rotateX: -60,
  },
  animate: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      type: 'spring',
      stiffness: 120,
      damping: 14,
    },
  },
};

export const letterContainerAnimation: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.1,
    },
  },
};

// --- Viewport Config ---

export const viewportConfig = {
  once: true,
  margin: '-100px' as const,
};

export const viewportConfigEager = {
  once: true,
  margin: '-50px' as const,
};

// --- Hover & Tap Presets — Apple-refined ---

export const hoverScale = {
  scale: 1.03,
  transition: { type: 'spring', stiffness: 300, damping: 20 },
};

export const tapScale = {
  scale: 0.97,
};

// --- Page Transition ---

export const pageTransition: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 1, 1],
    },
  },
};

// --- Utility: Create Custom Delay Variant ---

export function createFadeInUp(delay: number = 0): Variants {
  return {
    initial: { opacity: 0, y: 24 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { ...smoothTransition, delay },
    },
  };
}

export function createStaggerContainer(
  stagger: number = 0.08,
  delay: number = 0
): Variants {
  return {
    initial: {},
    animate: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };
}

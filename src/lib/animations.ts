// ============================================================================
// damixb.github.io — Animation Presets
// Reusable Motion (Framer Motion) animation variants & configs
// ============================================================================

import type { Variants, Transition } from 'motion/react';

// --- Shared Transitions ------------------------------------------------------

const springTransition: Transition = {
  type: 'spring',
  stiffness: 100,
  damping: 15,
  mass: 0.8,
};

const smoothSpring: Transition = {
  type: 'spring',
  stiffness: 80,
  damping: 20,
  mass: 1,
};

const snappySpring: Transition = {
  type: 'spring',
  stiffness: 200,
  damping: 22,
  mass: 0.6,
};

// --- Fade Variants -----------------------------------------------------------

export const fadeInUp: Variants = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: springTransition,
  },
};

export const fadeInDown: Variants = {
  initial: {
    opacity: 0,
    y: -30,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: springTransition,
  },
};

export const fadeInLeft: Variants = {
  initial: {
    opacity: 0,
    x: -30,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: springTransition,
  },
};

export const fadeInRight: Variants = {
  initial: {
    opacity: 0,
    x: 30,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: springTransition,
  },
};

// --- Stagger Container -------------------------------------------------------

export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

export const staggerContainerSlow: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

export const staggerContainerFast: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.02,
    },
  },
};

// --- Scale Variants ----------------------------------------------------------

export const scaleIn: Variants = {
  initial: {
    opacity: 0,
    scale: 0.8,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: smoothSpring,
  },
};

export const scaleInBounce: Variants = {
  initial: {
    opacity: 0,
    scale: 0.5,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: snappySpring,
  },
};

// --- Slide Variants ----------------------------------------------------------

export const slideInFromLeft: Variants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: smoothSpring,
  },
};

export const slideInFromRight: Variants = {
  initial: {
    x: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: smoothSpring,
  },
};

export const slideInFromBottom: Variants = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: smoothSpring,
  },
};

// --- Glow Pulse (CSS Keyframes Object) ---------------------------------------
// Use with inline style or CSS-in-JS for neon glow effects

export const glowPulse = {
  keyframes: {
    '0%, 100%': {
      boxShadow: '0 0 5px rgba(0, 245, 255, 0.3), 0 0 10px rgba(0, 245, 255, 0.15)',
    },
    '50%': {
      boxShadow: '0 0 15px rgba(0, 245, 255, 0.6), 0 0 30px rgba(0, 245, 255, 0.3), 0 0 45px rgba(0, 245, 255, 0.15)',
    },
  },
  animation: 'glowPulse 3s ease-in-out infinite',
} as const;

export const glowPulsePurple = {
  keyframes: {
    '0%, 100%': {
      boxShadow: '0 0 5px rgba(180, 0, 255, 0.3), 0 0 10px rgba(180, 0, 255, 0.15)',
    },
    '50%': {
      boxShadow: '0 0 15px rgba(180, 0, 255, 0.6), 0 0 30px rgba(180, 0, 255, 0.3), 0 0 45px rgba(180, 0, 255, 0.15)',
    },
  },
  animation: 'glowPulsePurple 3s ease-in-out infinite',
} as const;

export const glowPulsePink = {
  keyframes: {
    '0%, 100%': {
      boxShadow: '0 0 5px rgba(255, 0, 170, 0.3), 0 0 10px rgba(255, 0, 170, 0.15)',
    },
    '50%': {
      boxShadow: '0 0 15px rgba(255, 0, 170, 0.6), 0 0 30px rgba(255, 0, 170, 0.3), 0 0 45px rgba(255, 0, 170, 0.15)',
    },
  },
  animation: 'glowPulsePink 3s ease-in-out infinite',
} as const;

// --- Text / Letter Animation -------------------------------------------------

export const letterAnimation: Variants = {
  initial: {
    opacity: 0,
    y: 20,
    rotateX: -90,
  },
  animate: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      type: 'spring',
      stiffness: 150,
      damping: 12,
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

// --- Viewport Config ---------------------------------------------------------
// Default IntersectionObserver settings for scroll-triggered animations

export const viewportConfig = {
  once: true,
  margin: '-100px' as const,
};

export const viewportConfigEager = {
  once: true,
  margin: '-50px' as const,
};

// --- Hover & Tap Presets -----------------------------------------------------

export const hoverScale = {
  scale: 1.05,
  transition: { type: 'spring', stiffness: 400, damping: 15 },
};

export const tapScale = {
  scale: 0.97,
};

export const hoverGlow = {
  boxShadow: '0 0 20px rgba(0, 245, 255, 0.4), 0 0 40px rgba(0, 245, 255, 0.2)',
  transition: { duration: 0.3 },
};

// --- Page Transition Variants ------------------------------------------------

export const pageTransition: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: 'easeIn',
    },
  },
};

// --- Utility: Create Custom Delay Variant ------------------------------------

export function createFadeInUp(delay: number = 0): Variants {
  return {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { ...springTransition, delay },
    },
  };
}

export function createStaggerContainer(
  stagger: number = 0.1,
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

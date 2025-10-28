// Reusable Framer Motion variants
// Use with: initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }}

export const slideVariants = (fromRight = false, distance = 80, duration = 0.9, delay = 0) => ({
  hidden: { opacity: 0, x: fromRight ? distance : -distance },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration, ease: 'easeOut', delay }
  },
});

export const fadeIn = (delay = 0, duration = 0.9, y = 12) => ({
  hidden: { opacity: 0, y },
  visible: { opacity: 1, y: 0, transition: { duration, ease: 'easeOut', delay } },
});

export const staggerContainer = (stagger = 0.15, delayChildren = 0) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: stagger,
      delayChildren,
    },
  },
});

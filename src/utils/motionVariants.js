// Shared motion presets for scroll-triggered 3D reveal animations.
// Cards rotate in from a slight tilt (rotateX) as they enter the viewport,
// which reads as a subtle "3D" scroll animation. Requires the parent grid
// to have `perspective` set in CSS for the rotation to be visible.

// Plain (non-rotating) entrance reveal — use this for cards that also get
// an interactive pointer-tilt (useTilt), since both animate the same
// rotateX/rotateY motion values and would otherwise fight each other.
export const cardReveal = (i = 0, step = 0.07) => ({
  initial: { opacity: 0, y: 26, filter: 'blur(8px)' },
  whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.55, delay: i * step, ease: [0.22, 1, 0.36, 1] },
})

export const cardReveal3D = (i = 0, step = 0.07) => ({
  initial: { opacity: 0, y: 34, rotateX: -14, filter: 'blur(8px)' },
  whileInView: { opacity: 1, y: 0, rotateX: 0, filter: 'blur(0px)' },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.65, delay: i * step, ease: [0.22, 1, 0.36, 1] },
})

export const cardReveal3DAlt = (i = 0, step = 0.07) => ({
  initial: { opacity: 0, y: 34, rotateY: 14, rotateX: -6, filter: 'blur(8px)' },
  whileInView: { opacity: 1, y: 0, rotateY: 0, rotateX: 0, filter: 'blur(0px)' },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.65, delay: i * step, ease: [0.22, 1, 0.36, 1] },
})

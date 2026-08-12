import { useMotionValue, useSpring, useTransform } from 'framer-motion'

// Returns the motion values needed for a pointer-driven 3D tilt effect.
// Deliberately does NOT create or return the element ref — each component
// creates its own `useRef` locally and passes it directly to the JSX `ref`
// prop, which keeps ref usage conventional (a plain hook value read once in
// render) instead of routed through a returned object property.
export function useTiltValues({ max = 8 } = {}) {
  const x = useMotionValue(0.5)
  const y = useMotionValue(0.5)

  const springX = useSpring(x, { stiffness: 220, damping: 22 })
  const springY = useSpring(y, { stiffness: 220, damping: 22 })

  const rotateX = useTransform(springY, [0, 1], [max, -max])
  const rotateY = useTransform(springX, [0, 1], [-max, max])

  return { x, y, rotateX, rotateY }
}

export function isCoarsePointer() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(pointer: coarse)').matches
  )
}

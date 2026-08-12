import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

const HOVER_SELECTOR = 'a, button, input, textarea, [role="button"], .card-button'

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  const springConfig = { damping: 28, stiffness: 320, mass: 0.4 }
  const dotX = useSpring(mouseX, { damping: 30, stiffness: 900 })
  const dotY = useSpring(mouseY, { damping: 30, stiffness: 900 })
  const ringX = useSpring(mouseX, springConfig)
  const ringY = useSpring(mouseY, springConfig)

  useEffect(() => {
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!canHover || reduceMotion) return

    setEnabled(true)
    document.body.classList.add('custom-cursor-active')

    const handleMove = (e) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    const handleOver = (e) => {
      if (e.target.closest(HOVER_SELECTOR)) setIsHovering(true)
    }
    const handleOut = (e) => {
      if (e.target.closest(HOVER_SELECTOR)) setIsHovering(false)
    }

    window.addEventListener('mousemove', handleMove)
    document.addEventListener('mouseover', handleOver)
    document.addEventListener('mouseout', handleOut)

    return () => {
      window.removeEventListener('mousemove', handleMove)
      document.removeEventListener('mouseover', handleOver)
      document.removeEventListener('mouseout', handleOut)
      document.body.classList.remove('custom-cursor-active')
    }
  }, [mouseX, mouseY])

  if (!enabled) return null

  return (
    <>
      <motion.div
        className="cursor-dot"
        style={{ translateX: dotX, translateY: dotY }}
        animate={{ scale: isHovering ? 0 : 1 }}
        transition={{ duration: 0.2 }}
        aria-hidden="true"
      />
      <motion.div
        className="cursor-ring"
        style={{ translateX: ringX, translateY: ringY }}
        animate={{
          scale: isHovering ? 1.8 : 1,
          opacity: isHovering ? 0.9 : 0.6,
        }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        aria-hidden="true"
      />
    </>
  )
}

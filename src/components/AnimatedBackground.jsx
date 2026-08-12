import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

// Full-viewport animated background: a few soft gradient blobs that drift
// continuously (CSS keyframes) and also parallax-shift as the page scrolls
// (framer-motion), so the backdrop always feels alive without competing
// with foreground content. Simplifies itself on small screens / reduced-motion.
export default function AnimatedBackground() {
  const { scrollYProgress } = useScroll()
  const blobAY = useTransform(scrollYProgress, [0, 1], [0, -220])
  const blobBY = useTransform(scrollYProgress, [0, 1], [0, 260])
  const blobCY = useTransform(scrollYProgress, [0, 1], [0, -160])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 40])

  const [reduced, setReduced] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const handler = () => setReduced(mq.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  return (
    <div className="bg-fx" aria-hidden="true">
      <div className="bg-fx-grid" />
      <motion.span
        className="bg-fx-blob bg-fx-blob-a"
        style={reduced ? undefined : { y: blobAY }}
      />
      <motion.span
        className="bg-fx-blob bg-fx-blob-b"
        style={reduced ? undefined : { y: blobBY }}
      />
      <motion.span
        className="bg-fx-blob bg-fx-blob-c"
        style={reduced ? undefined : { y: blobCY, rotate }}
      />
    </div>
  )
}

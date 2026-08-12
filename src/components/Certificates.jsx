import { useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaCertificate, FaExpand } from 'react-icons/fa'
import { useLanguage } from '../context/LanguageContext'
import { certImages } from '../utils/mediaMap'
import { cardReveal, cardReveal3D } from '../utils/motionVariants'
import { useTiltValues, isCoarsePointer } from '../utils/useTilt'

export default function Certificates() {
  const { t } = useLanguage()
  const { label, heading, items } = t.certificates
  const [preview, setPreview] = useState(null)

  return (
    <section id="certificates" className="section">
      <div className="section-head">
        <motion.span
          className="section-glow"
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          aria-hidden="true"
        />
        <span className="section-label">{label}</span>
        <h2>{heading}</h2>
      </div>

      <div className="cert-grid">
        {items.map((c, i) => (
          <CertCard key={c.title} c={c} i={i} onPreview={setPreview} />
        ))}
      </div>

      <AnimatePresence>
        {preview && (
          <motion.div
            className="cert-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPreview(null)}
          >
            <motion.img
              src={preview.img}
              alt={preview.title}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

function CertCard({ c, i, onPreview }) {
  const img = c.image ? certImages[c.image] : null
  const cardRef = useRef(null)
  const coarse = isCoarsePointer()
  const { x, y, rotateX, rotateY } = useTiltValues({ max: 6 })

  function onPointerMove(e) {
    if (coarse || !img || !cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width)
    y.set((e.clientY - rect.top) / rect.height)
  }

  function onPointerLeave() {
    x.set(0.5)
    y.set(0.5)
  }

  return (
    <motion.div
      ref={img ? cardRef : undefined}
      className={img ? 'cert-card cert-card-media' : 'cert-card'}
      style={img && !coarse ? { rotateX, rotateY } : undefined}
      onPointerMove={img ? onPointerMove : undefined}
      onPointerLeave={img ? onPointerLeave : undefined}
      whileHover={img && !coarse ? { scale: 1.015 } : undefined}
      {...(img ? cardReveal(i) : cardReveal3D(i))}
    >
      {img && (
        <button
          type="button"
          className="cert-thumb"
          onClick={() => onPreview({ img, title: c.title })}
          aria-label={c.title}
        >
          <img src={img} alt={c.title} loading="lazy" />
          <span className="cert-thumb-overlay" aria-hidden="true">
            <FaExpand />
          </span>
        </button>
      )}

      <div className="cert-card-body">
        {!img && (
          <div className="cert-icon">
            <FaCertificate />
          </div>
        )}
        <div>
          <h3>
            {c.url ? (
              <a href={c.url} target="_blank" rel="noopener noreferrer" className="project-link">
                {c.title}
                <span className="project-link-icon" aria-hidden="true">↗</span>
              </a>
            ) : (
              c.title
            )}
          </h3>
          <p className="exp-org">{c.issuer}</p>
          <p className="exp-meta">{c.date}</p>
        </div>
      </div>
    </motion.div>
  )
}

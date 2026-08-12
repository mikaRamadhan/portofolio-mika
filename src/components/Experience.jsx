import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import { photoGroups } from '../utils/mediaMap'
import { cardReveal3D } from '../utils/motionVariants'

export default function Experience() {
  const { t } = useLanguage()
  const { label, heading, items } = t.experience

  return (
    <section id="experience" className="section">
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

      <div className="exp-list">
        {items.map((item, i) => {
          const photos = item.photos ? photoGroups[item.photos] : null
          return (
            <motion.div
              key={item.title}
              className="exp-card"
              {...cardReveal3D(i, 0.08)}
              whileHover={{ y: -3 }}
            >
              <div className="exp-logo">{item.title[0]}</div>
              <div className="exp-body">
                <h3>{item.title}</h3>
                <p className="exp-org">{item.org}</p>
                <p className="exp-meta">{item.period} · {item.type}</p>
                <ul className="exp-points">
                  {item.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>

                {photos && (
                  <div className="exp-photos">
                    {photos.map((src) => (
                      <img key={src} src={src} alt={item.org} loading="lazy" />
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

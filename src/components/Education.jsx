import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import { schoolLogos } from '../utils/mediaMap'
import { cardReveal3D } from '../utils/motionVariants'

export default function Education() {
  const { t } = useLanguage()
  const { label, heading, items } = t.education

  return (
    <section id="education" className="section">
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

      <div className="edu-list">
        {items.map((item, i) => {
          const logo = item.logo ? schoolLogos[item.logo] : null
          return (
            <motion.div
              key={item.school}
              className="edu-card"
              {...cardReveal3D(i)}
              whileHover={{ y: -3 }}
            >
              <div className="edu-logo">
                {logo ? <img src={logo} alt={item.school} /> : '🎓'}
              </div>
              <div>
                <h3>{item.school}</h3>
                <p className="exp-org">{item.degree}</p>
                <p className="exp-meta">{item.period} · {item.location}</p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

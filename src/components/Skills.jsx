import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import { SkillIcon } from '../utils/skillIcons'
import { cardReveal3D } from '../utils/motionVariants'

export default function Skills() {
  const { t } = useLanguage()
  const { label, heading, categories } = t.skills

  return (
    <section id="skills" className="section">
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

      <div className="skills-grid">
        {categories.map((c, i) => (
          <motion.div
            key={c.title}
            className="skill-card"
            data-level={c.level}
            {...cardReveal3D(i)}
            whileHover={{ y: -4 }}
          >
            <span className="skill-level">{c.level}</span>
            <h3>{c.title}</h3>
            <p>{c.desc}</p>
            <div className="skill-tags">
              {c.tags.map((tag) => (
                <span key={tag} className="tag-pill tag-pill--icon">
                  <SkillIcon name={tag} className="tag-pill-icon" />
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

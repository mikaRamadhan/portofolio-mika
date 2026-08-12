import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FaMapMarkerAlt, FaDownload } from 'react-icons/fa'
import { useLanguage } from '../context/LanguageContext'
import profilePhoto from '../assets/img/profile.jpg'

export default function Hero() {
  const { t } = useLanguage()
  const heroRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const glowY = useTransform(scrollYProgress, [0, 1], [0, 160])
  const gridY = useTransform(scrollYProgress, [0, 1], [0, 80])
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 60])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section id="home" className="hero" ref={heroRef}>
      <motion.div className="hero-glow" style={{ y: glowY }} aria-hidden="true" />
      <motion.div className="hero-grid" style={{ y: gridY }} aria-hidden="true" />

      <motion.div
        className="hero-content"
        style={{ y: contentY, opacity: contentOpacity }}
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div className="hero-avatar">
          <img src={profilePhoto} alt="Muhammad Ananda Mika Ramadhan" />
        </div>

        <h1>Muhammad Ananda Mika Ramadhan</h1>
        <h3>{t.hero.role}</h3>

        <p className="hero-location">
          <FaMapMarkerAlt /> {t.hero.location}
        </p>

        <p className="hero-desc">{t.hero.desc}</p>

        <div className="hero-btns">
          <a href="#projects" className="btn primary">{t.hero.viewProjects}</a>
          <a href="#contact" className="btn secondary">{t.hero.contactMe}</a>
          <a href={`${import.meta.env.BASE_URL}cv-mika-ramadhan.pdf`} download className="btn ghost">
            <FaDownload /> {t.hero.downloadCV}</a>
        </div>

        <div className="hero-stats">
          {t.hero.stats.map((s) => (
            <div key={s.label} className="hero-stat">
              <span className="hero-stat-value">{s.value}</span>
              <span className="hero-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

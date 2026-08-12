import { useState, useEffect } from 'react'
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'
import { useLanguage } from '../context/LanguageContext'

function useLocalTime() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const update = () => {
      setTime(
        new Intl.DateTimeFormat('en-GB', {
          timeZone: 'Asia/Jakarta',
          hour: '2-digit',
          minute: '2-digit',
        }).format(new Date())
      )
    }
    update()
    const id = setInterval(update, 1000 * 30)
    return () => clearInterval(id)
  }, [])

  return time
}

export default function Contact() {
  const { t } = useLanguage()
  const time = useLocalTime()

  return (
    <section id="contact" className="section contact">
      <div className="contact-cta">
        <span className="section-label">{t.contact.label}</span>
        <h2>{t.contact.heading}</h2>
        <a href="mailto:hawmika@gmail.com" className="btn primary btn-lg">
          {t.contact.cta}
        </a>
      </div>

      <div className="contact-footer-row">
        <div className="contact-time">
          <span className="hero-stack-label">{t.contact.localTime}</span>
          <span className="contact-time-value">{time} WIB</span>
        </div>

        <div className="contact-links">
          <a href="mailto:hawmika@gmail.com" aria-label="Email">
            <FaEnvelope />
          </a>
          <a href="https://www.linkedin.com/in/anandamika/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://github.com/mikaramadhan" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  )
}

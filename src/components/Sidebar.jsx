import { useState, useEffect } from 'react'
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa'
import { useTheme } from '../context/ThemeContext'
import { useLanguage } from '../context/LanguageContext'

const sectionIds = ['home', 'skills', 'projects', 'experience', 'education', 'certificates', 'contact']

export default function Sidebar() {
  const { theme, toggleTheme } = useTheme()
  const { language, toggleLanguage, t } = useLanguage()
  const [active, setActive] = useState('home')
  const [open, setOpen] = useState(false)

  const links = sectionIds.map((id) => ({ id, label: t.nav[id] }))

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -50% 0px' }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <button
        className="mobile-topbar-toggle"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
      >
        <FaBars />
      </button>

      <div className="mobile-topbar">
        <span className="brand-mark">MR</span>
        <div className="mobile-topbar-actions">
          <button className="icon-btn" onClick={toggleLanguage} aria-label="Toggle language">
            {language === 'id' ? 'EN' : 'ID'}
          </button>
          <button className="icon-btn" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
          </button>
          <button className="icon-btn" onClick={() => setOpen(true)} aria-label="Open menu">
            <FaBars />
          </button>
        </div>
      </div>

      {open && <div className="sidebar-backdrop" onClick={() => setOpen(false)} />}

      <aside className={`sidebar ${open ? 'is-open' : ''}`}>
        <button className="sidebar-close" onClick={() => setOpen(false)} aria-label="Close menu">
          <FaTimes />
        </button>

        <a href="#home" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark">MR</span>
          <span className="brand-name">Mika Ramadhan</span>
        </a>

        <nav className="sidebar-nav">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`sidebar-link ${active === l.id ? 'is-active' : ''}`}
              onClick={() => {
                setActive(l.id)
                setOpen(false)
              }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="sidebar-footer">
          <div className="sidebar-toggles">
            <button className="pref-toggle" onClick={toggleLanguage}>
              <span>{language === 'id' ? 'Bahasa' : 'Language'}</span>
              <span className="pref-toggle-value">{language === 'id' ? 'ID' : 'EN'}</span>
            </button>
            <button className="pref-toggle" onClick={toggleTheme}>
              <span>{theme === 'dark' ? (language === 'id' ? 'Gelap' : 'Dark') : (language === 'id' ? 'Terang' : 'Light')}</span>
              <span className="pref-toggle-value">
                {theme === 'dark' ? <FaMoon /> : <FaSun />}
              </span>
            </button>
          </div>
        </div>
      </aside>
    </>
  )
}

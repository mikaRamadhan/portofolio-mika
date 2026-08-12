import { createContext, useContext, useEffect, useState } from 'react'
import { content } from '../i18n/content'

const LanguageContext = createContext(null)

function getInitialLanguage() {
  if (typeof window === 'undefined') return 'id'
  const saved = window.localStorage.getItem('language')
  if (saved === 'en' || saved === 'id') return saved
  return 'id'
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(getInitialLanguage)

  useEffect(() => {
    window.localStorage.setItem('language', language)
    document.documentElement.setAttribute('lang', language)
  }, [language])

  const toggleLanguage = () => setLanguage((l) => (l === 'id' ? 'en' : 'id'))

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t: content[language] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}

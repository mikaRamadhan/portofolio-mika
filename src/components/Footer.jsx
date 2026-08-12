import { useLanguage } from '../context/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()
  return (
    <footer className="footer">
      <p>© 2026 Muhammad Ananda Mika Ramadhan. {t.footer.rights}</p>
    </footer>
  )
}

import { motion, useScroll, useSpring } from 'framer-motion'
import { ThemeProvider } from './context/ThemeContext'
import { LanguageProvider } from './context/LanguageContext'
import Sidebar from './components/Sidebar'
import CustomCursor from './components/CustomCursor'
import AnimatedBackground from './components/AnimatedBackground'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  })

  return (
    <ThemeProvider>
      <LanguageProvider>
        <motion.div className="scroll-progress" style={{ scaleX }} aria-hidden="true" />
        <AnimatedBackground />
        <CustomCursor />
        <div className="app-shell">
          <Sidebar />
          <main className="main-content">
            <Hero />
            <Skills />
            <Projects />
            <Experience />
            <Education />
            <Certificates />
            <Contact />
            <Footer />
          </main>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App

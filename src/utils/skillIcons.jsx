import {
  SiReact,
  SiMysql,
  SiBootstrap,
  SiPython,
  SiStreamlit,
  SiScikitlearn,
  SiGit,
  SiGithub,
  SiJavascript,
  SiHtml5,
  SiCss,
} from 'react-icons/si'
import { FaJava, FaDatabase, FaRobot, FaChartBar, FaShieldAlt } from 'react-icons/fa'

export const skillIcons = {
  React: SiReact,
  Java: FaJava,
  MySQL: SiMysql,
  Bootstrap: SiBootstrap,
  Python: SiPython,
  'Pentaho ETL': FaDatabase,
  Streamlit: SiStreamlit,
  'Scikit-learn': SiScikitlearn,
  Git: SiGit,
  GitHub: SiGithub,
  JavaScript: SiJavascript,
  HTML: SiHtml5,
  CSS: SiCss,
  ETL: FaDatabase,
  AI: FaRobot,
  Analytics: FaChartBar,
  Cybersecurity: FaShieldAlt,
}

export function SkillIcon({ name, className }) {
  const Icon = skillIcons[name]
  if (!Icon) return null
  return <Icon className={className} aria-hidden="true" />
}

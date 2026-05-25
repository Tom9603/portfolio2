import { motion } from 'framer-motion'
import {
  SiHtml5, SiCss, SiJavascript, SiTypescript, SiReact, SiVite,
  SiOpenjdk, SiSpring, SiPhp, SiSymfony, SiMysql,
  SiGit, SiGithub, SiDocker, SiPhpstorm,
} from 'react-icons/si'

const ease = [0.25, 0.1, 0.25, 1] as const

const STACK = [
  { name: 'HTML5',      icon: SiHtml5,      color: '#e34f26' },
  { name: 'CSS',        icon: SiCss,        color: '#1572b6' },
  { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178c6' },
  { name: 'React',      icon: SiReact,      color: '#61dafb' },
  { name: 'Vite',       icon: SiVite,       color: '#646cff' },
  { name: 'Java',       icon: SiOpenjdk,    color: '#f89820' },
  { name: 'Spring',     icon: SiSpring,     color: '#6db33f' },
  { name: 'PHP',        icon: SiPhp,        color: '#777bb4' },
  { name: 'Symfony',    icon: SiSymfony,    color: '#ffffff' },
  { name: 'MySQL',      icon: SiMysql,      color: '#4479a1' },
  { name: 'Git',        icon: SiGit,        color: '#f05032' },
  { name: 'GitHub',     icon: SiGithub,     color: '#e6edf3' },
  { name: 'Docker',     icon: SiDocker,     color: '#2496ed' },
  { name: 'PhpStorm',   icon: SiPhpstorm,   color: '#8d62d9' },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.055 } },
}

const itemVariants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
}

export default function Stack() {
  return (
    <section className="section" id="stack">
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.65, ease }}
      >
        <p className="section__eyebrow">Technologies</p>
        <h2 className="section__title">Stack</h2>
        <p className="section__subtitle">
          Les outils et langages avec lesquels je travaille au quotidien.
        </p>
      </motion.div>

      <motion.div
        className="stack-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
      >
        {STACK.map(({ name, icon: Icon, color }) => (
          <motion.div
            key={name}
            className="stack-item"
            variants={itemVariants}
            whileHover={{ y: -4, transition: { type: 'spring', stiffness: 400, damping: 22 } }}
          >
            <Icon size={32} style={{ color }} className="stack-item__icon" />
            <span className="stack-item__name">{name}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

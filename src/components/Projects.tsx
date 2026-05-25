import { motion } from 'framer-motion'

interface Project {
  id: number
  title: string
  description: string
  tags: string[]
}

// ── Ajoute tes projets ici ──────────────────────────────────────────────────
const projects: Project[] = [
  {
    id: 1,
    title: 'Nom du projet',
    description: "Décris brièvement ce projet : ce qu'il fait, le contexte, ce que tu as appris.",
    tags: ['Java', 'Spring Boot', 'SQL'],
  },
  {
    id: 2,
    title: 'Nom du projet',
    description: "Décris brièvement ce projet : ce qu'il fait, le contexte, ce que tu as appris.",
    tags: ['PHP', 'Symfony', 'MySQL'],
  },
  {
    id: 3,
    title: 'Nom du projet',
    description: "Décris brièvement ce projet : ce qu'il fait, le contexte, ce que tu as appris.",
    tags: ['PHP', 'REST API', 'SQL'],
  },
]
// ────────────────────────────────────────────────────────────────────────────

const ease = [0.25, 0.1, 0.25, 1] as const

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease },
  },
}

export default function Projects() {
  return (
    <section className="section" id="projects">
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.65, ease }}
      >
        <p className="section__eyebrow">Réalisations</p>
        <h2 className="section__title">Projets</h2>
        <p className="section__subtitle">
          Une sélection de projets que j'ai conçus et développés.
        </p>
      </motion.div>

      <motion.div
        className="projects-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
      >
        {projects.map((project) => (
          <motion.article
            key={project.id}
            className="project-card"
            variants={cardVariants}
            whileHover={{ y: -5 }}
            transition={{ type: 'spring', stiffness: 380, damping: 26 }}
          >
            <div className="project-card__thumb">
              <div className="project-card__thumb-bg" />
              <span className="project-card__thumb-label">Aperçu à venir</span>
            </div>

            <div className="project-card__body">
              <h3 className="project-card__title">{project.title}</h3>
              <p className="project-card__desc">{project.description}</p>
              <div className="project-card__tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="project-tag">{tag}</span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}

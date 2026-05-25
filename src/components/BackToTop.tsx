import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronUp } from 'lucide-react'

const CV_URL = '#' // TODO: remplacer par l'URL du CV en PDF

const ease = [0.25, 0.1, 0.25, 1] as const

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <>
          <motion.a
            href={CV_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="cv-button"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.25, ease }}
            aria-label="Télécharger le CV"
          >
            CV
          </motion.a>

          <motion.button
            className="back-to-top"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.25, ease }}
            aria-label="Retour en haut"
          >
            <ChevronUp size={16} strokeWidth={1.75} />
          </motion.button>
        </>
      )}
    </AnimatePresence>
  )
}

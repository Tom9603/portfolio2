import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Accueil',  href: '#'        },
  { label: 'Projets',  href: '#projects' },
  { label: 'Stack',    href: '#stack'    },
  { label: 'Contact',  href: '#contact'  },
]

const CV_URL = '#' // TODO: remplacer par l'URL du CV en PDF

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30)
      if (window.scrollY > 80) setOpen(false)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (e: React.MouseEvent, href: string) => {
    e.preventDefault()
    setOpen(false)
    if (href === '#') { window.scrollTo({ top: 0, behavior: 'smooth' }); return }
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        className={`nav${scrolled ? ' nav--scrolled' : ''}`}
        initial={{ opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <a href="#" className="nav__logo" onClick={(e) => go(e, '#')}>
          Tom Ochietti
        </a>

        <ul className="nav__links">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <a href={href} className="nav__link" onClick={(e) => go(e, href)}>
                {label}
              </a>
            </li>
          ))}
        </ul>

        <a href={CV_URL} target="_blank" rel="noopener noreferrer" className="nav__cv">
          CV
        </a>

        <button
          className="nav__hamburger"
          onClick={() => setOpen(o => !o)}
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
        >
          {open
            ? <X     size={20} strokeWidth={1.75} />
            : <Menu  size={20} strokeWidth={1.75} />
          }
        </button>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="nav__overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              className="nav__drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
            >
              {NAV_LINKS.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="nav__mobile-link"
                  onClick={(e) => go(e, href)}
                >
                  {label}
                </a>
              ))}

              <a
                href={CV_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="nav__mobile-cv"
              >
                CV
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

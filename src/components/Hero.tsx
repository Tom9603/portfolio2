import { motion } from 'framer-motion'
import { Github, Linkedin, Instagram, ChevronDown } from 'lucide-react'

const stack = ['Java', 'PHP', 'Symfony', 'SQL']

const MOBILE_TERM = [
  'git commit -m "feat"',
  'npm run dev',
  '@RestController',
  'SELECT * FROM users',
  'useState<User[]>([])',
  'composer install',
  '@GetMapping("/{id}")',
  'const res = await fetch',
  'git push origin main',
  '@Entity @Table',
  'useEffect(() => {',
  'return $this->json',
  'vite ready in 183ms',
  'interface UserDto {',
  'ORDER BY created_at',
  'new ResponseEntity<>',
  'git merge develop',
  'useMemo(() => filter',
]

const socials = [
  { label: 'GitHub',    icon: Github,    href: 'https://github.com/tomochietti' },
  { label: 'LinkedIn',  icon: Linkedin,  href: 'https://linkedin.com/in/tomochietti' },
  { label: 'Instagram', icon: Instagram, href: 'https://instagram.com/tomochietti' },
]

const ease = [0.25, 0.1, 0.25, 1] as const

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease },
})

export default function Hero() {
  return (
    <section className="hero">
      <motion.p className="hero__eyebrow" {...fadeUp(0.1)}>
        Développeur Full Stack
      </motion.p>

      <motion.div className="hero__name-row" {...fadeUp(0.2)}>
        <h1 className="hero__name">Tom<br />Ochietti</h1>
        <div className="hero__inline-terminal" aria-hidden>
          <div className="hero__inline-terminal__col">
            {[...MOBILE_TERM, ...MOBILE_TERM, ...MOBILE_TERM, ...MOBILE_TERM].map((line, i) => (
              <p key={i} className="hero__inline-terminal__line">{line}</p>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.p className="hero__bio" {...fadeUp(0.32)}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
      </motion.p>

      <motion.div className="hero__stack" {...fadeUp(0.42)}>
        {stack.map((tech) => (
          <span key={tech} className="pill">{tech}</span>
        ))}
      </motion.div>

      <motion.div className="hero__socials" {...fadeUp(0.52)}>
        {socials.map(({ label, icon: Icon, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="pill pill--link"
          >
            <Icon size={14} strokeWidth={1.75} />
            {label}
          </a>
        ))}
      </motion.div>

      <motion.a
        href="#projects"
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 1, ease }}
        onClick={(e) => {
          e.preventDefault()
          document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
        }}
      >
        <span className="hero__scroll-label">Découvrir mon travail</span>
        <motion.span
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut', repeatDelay: 0.2 }}
        >
          <ChevronDown size={15} strokeWidth={1.25} />
        </motion.span>
      </motion.a>
    </section>
  )
}

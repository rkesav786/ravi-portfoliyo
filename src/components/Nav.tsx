import { motion } from 'framer-motion'
import './Nav.css'

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#journey', label: 'Journey' },
  { href: '#certificates', label: 'Certificates' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  return (
    <motion.header
      className="nav"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container nav__inner">
        <a href="#top" className="nav__mark">
          <span className="nav__mark-bracket">&lt;</span>Ravina
          <span className="nav__mark-bracket">/&gt;</span>
        </a>
        <nav className="nav__links">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="nav__cta">
          Say hello
        </a>
      </div>
    </motion.header>
  )
}

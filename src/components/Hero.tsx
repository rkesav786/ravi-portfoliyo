import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import ravinaPhoto from '../assets/ravina-photo.jpg'
import './Hero.css'

const CODE_LINES = [
  { indent: 0, text: 'class Developer:' },
  { indent: 1, text: 'def __init__(self):' },
  { indent: 2, text: 'self.name = "Ravina T"' },
  { indent: 2, text: 'self.role = "CS Undergrad, Year 3"' },
  { indent: 2, text: 'self.stack = ["Python", "HTML", "CSS", "JS"]' },
  { indent: 2, text: 'self.goal = "Full-Stack Developer"' },
]

function useTypewriter(lines: typeof CODE_LINES, speed = 26) {
  const [rendered, setRendered] = useState<string[]>([])
  const [done, setDone] = useState(false)

  useEffect(() => {
    let cancelled = false
    async function run() {
      const output: string[] = []
      for (const line of lines) {
        let current = ''
        const full = '  '.repeat(line.indent) + line.text
        for (const char of full) {
          if (cancelled) return
          current += char
          await new Promise((r) => setTimeout(r, speed))
          setRendered([...output, current])
        }
        output.push(full)
      }
      if (!cancelled) setDone(true)
    }
    run()
    return () => {
      cancelled = true
    }
  }, [])

  return { rendered, done }
}

export default function Hero() {
  const { rendered, done } = useTypewriter(CODE_LINES)

  return (
    <section id="top" className="hero">
      <div className="container hero__inner">
        <motion.div
          className="hero__copy"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="eyebrow">Portfolio &middot; Coimbatore, Tamil Nadu</span>
          <h1 className="hero__title">
            Ravina T builds
            <br />
            things that <em>run</em>.
          </h1>
          <p className="hero__lede">
            Third-year Computer Science student at Sardar Raja College of Engineering,
            learning her way from scripts to full-stack applications &mdash; one
            Python function and one React component at a time.
          </p>
          <div className="hero__actions">
            <a href="#certificates" className="btn btn--gold">
              View certificates
            </a>
            <a href="#contact" className="btn btn--ghost">
              Get in touch
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero__portrait-wrap">
            <div className="hero__portrait-frame" aria-hidden="true">
              <span>&#123;</span>
              <span>&#125;</span>
            </div>
            <img src={ravinaPhoto} alt="Ravina T" className="hero__portrait" />
          </div>

          <div className="editor">
            <div className="editor__bar">
              <span className="editor__dot editor__dot--red" />
              <span className="editor__dot editor__dot--yellow" />
              <span className="editor__dot editor__dot--green" />
              <span className="editor__filename">developer.py</span>
            </div>
            <pre className="editor__body">
              {rendered.map((line, i) => (
                <div key={i} className="editor__line">
                  <span className="editor__lineno">{i + 1}</span>
                  <span>{line}</span>
                </div>
              ))}
              {done && (
                <div className="editor__line">
                  <span className="editor__lineno">{rendered.length + 1}</span>
                  <span className="editor__cursor">&#9608;</span>
                </div>
              )}
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

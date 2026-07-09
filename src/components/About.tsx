import { motion } from 'framer-motion'
import './About.css'

const FACTS = [
  { label: 'Studying', value: 'B.E. Computer Science' },
  { label: 'College', value: 'Sardar Raja College of Engineering' },
  { label: 'Year', value: '3rd Year' },
  { label: 'Born', value: '18 May 2007' },
]

export default function About() {
  return (
    <section id="about">
      <div className="container about">
        <motion.div
          className="about__intro"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="eyebrow">About</span>
          <h2 className="about__title">
            Still early in the syllabus,
            <br />
            already shipping code.
          </h2>
          <p className="about__body">
            I'm a computer science undergraduate who started with the
            fundamentals &mdash; Python scripts, HTML pages, small CSS
            tweaks &mdash; and kept going until "learning to code" turned into
            "building software." Right now I'm deep in full-stack territory:
            wiring up interfaces in JavaScript, understanding how the pieces
            of a real application fit together, and finishing two certifications
            along the way.
          </p>
        </motion.div>

        <motion.dl
          className="about__facts"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          {FACTS.map((fact) => (
            <div className="about__fact" key={fact.label}>
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  )
}

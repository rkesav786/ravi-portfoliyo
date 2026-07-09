import { motion } from 'framer-motion'
import './Skills.css'

const GROUPS = [
  {
    label: 'Core language',
    skills: ['Python'],
  },
  {
    label: 'Web foundations',
    skills: ['HTML5', 'CSS3', 'JavaScript'],
  },
  {
    label: 'Currently learning',
    skills: ['React', 'Node.js', 'Full-stack workflows'],
  },
]

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <motion.span
          className="eyebrow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
        >
          Skills
        </motion.span>
        <motion.h2
          className="skills__title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          What I reach for when I open the editor.
        </motion.h2>

        <div className="skills__grid">
          {GROUPS.map((group, gi) => (
            <motion.div
              className="skills__group"
              key={group.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.55, delay: gi * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <h3>{group.label}</h3>
              <div className="skills__chips">
                {group.skills.map((skill) => (
                  <span className="skills__chip" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

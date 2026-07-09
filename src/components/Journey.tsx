import { motion } from 'framer-motion'
import './Journey.css'

const STEPS = [
  {
    year: '2023',
    title: 'Started B.E. Computer Science',
    body: 'Enrolled at Sardar Raja College of Engineering and began with programming fundamentals.',
  },
  {
    year: '2024',
    title: 'Diploma in Computer Programming',
    body: 'Completed the diploma at Universe Educational Trust and passed with First Class.',
  },
  {
    year: '2026',
    title: 'Python certification',
    body: 'Finished a dedicated Python course, sharpening the language behind most of my projects.',
  },
  {
    year: 'Now',
    title: 'Going full-stack',
    body: 'Third year, and building outward from Python into HTML, CSS, JavaScript and React — end to end.',
  },
]

export default function Journey() {
  return (
    <section id="journey">
      <div className="container">
        <span className="eyebrow">Journey</span>
        <h2 className="journey__title">A quick trace through the last few years.</h2>

        <div className="journey__list">
          {STEPS.map((step, i) => (
            <motion.div
              className="journey__row"
              key={step.title}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="journey__year">{step.year}</span>
              <div className="journey__line" aria-hidden="true">
                <span className="journey__dot" />
              </div>
              <div className="journey__content">
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

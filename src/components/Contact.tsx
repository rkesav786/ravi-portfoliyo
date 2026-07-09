import { motion } from 'framer-motion'
import './Contact.css'

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <motion.div
          className="contact__card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="eyebrow">Contact</span>
          <h2 className="contact__title">
            Open to internships, junior roles,
            <br />
            and interesting problems.
          </h2>
          <p className="contact__body">
            I'm looking for opportunities to apply what I'm learning to real
            products. If you have a project, an internship, or just want to
            talk shop about Python and full-stack development, my inbox is open.
          </p>
          <a href="mailto:ravinathangaraja@gmail.com" className="contact__email">
            ravinathangaraja@gmail.com
          </a>
        </motion.div>
      </div>
    </section>
  )
}

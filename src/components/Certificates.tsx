import { motion } from 'framer-motion'
import certPython from '../assets/cert-python.jpg'
import certDiploma from '../assets/cert-diploma.jpg'
import './Certificates.css'

const CERTS = [
  {
    image: certPython,
    title: 'Python — Course Completion',
    issuer: 'Universe Educational Trust',
    meta: 'Reg. No. UCE1317',
  },
  {
    image: certDiploma,
    title: 'Diploma in Computer Programming',
    issuer: 'United Ackreditering Services Limited · ISO 9001:2015',
    meta: 'First Class · Apr–Jun 2024',
  },
]

export default function Certificates() {
  return (
    <section id="certificates">
      <div className="container">
        <span className="eyebrow">Certificates</span>
        <h2 className="certs__title">Proof of the work behind the profile.</h2>

        <div className="certs__grid">
          {CERTS.map((cert, i) => (
            <motion.figure
              className="certs__card"
              key={cert.title}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="certs__image-wrap">
                <img src={cert.image} alt={cert.title} loading="lazy" />
              </div>
              <figcaption>
                <h3>{cert.title}</h3>
                <p>{cert.issuer}</p>
                <span className="certs__meta">{cert.meta}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}

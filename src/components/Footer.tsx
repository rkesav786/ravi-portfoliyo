import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span>&copy; {new Date().getFullYear()} Ravina T</span>
        <span className="footer__built">Built with React, Vite &amp; Framer Motion</span>
      </div>
    </footer>
  )
}

import { useState } from 'react'
import profilePic from '../assets/profile.png'
import '../styles/navbar.css'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className="navbar-custom">
      <div className="container-narrow d-flex justify-content-between align-items-center">
        <div className="brand-photo-wrap">
          <img src={profilePic} alt="Anees ur Rehman" className="brand-photo" />
        </div>

        <div className="d-none d-md-flex align-items-center">
          <a href="#experience" className="nav-link-custom">experience</a>
          <a href="#projects" className="nav-link-custom">projects</a>
          <a href="#skills" className="nav-link-custom">skills</a>
          <a href="#contact" className="nav-cta">contact</a>
        </div>

        <button
          className={`navbar-toggler-custom ${menuOpen ? 'is-open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`mobile-menu ${menuOpen ? 'mobile-menu-open' : ''}`}>
        <a href="#experience" className="nav-link-custom" onClick={closeMenu}>experience</a>
        <a href="#projects" className="nav-link-custom" onClick={closeMenu}>projects</a>
        <a href="#skills" className="nav-link-custom" onClick={closeMenu}>skills</a>
        <a href="#contact" className="nav-cta" onClick={closeMenu}>contact</a>
      </div>
    </nav>
  )
}

export default Navbar
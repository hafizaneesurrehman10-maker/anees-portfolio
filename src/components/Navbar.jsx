import profilePic from '../assets/profile.png'

function Navbar() {
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
      </div>
    </nav>
  )
}

export default Navbar
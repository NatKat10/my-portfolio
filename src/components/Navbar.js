import React from 'react';

function Navbar() {
  const handleNavLinkClick = () => {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse.classList.contains('show')) {
      navbarCollapse.classList.remove('show');
    }
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top custom-navbar">
      <div className="container-fluid">
        <a className="navbar-brand" href="#home">Natasha Kataev</a> {/* Ensure href="#home" corresponds to a valid section ID */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#about" onClick={handleNavLinkClick}>About Me</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#experience" onClick={handleNavLinkClick}>Experience</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects" onClick={handleNavLinkClick}>Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills" onClick={handleNavLinkClick}>Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact" onClick={handleNavLinkClick}>Contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#references" onClick={handleNavLinkClick}>References</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

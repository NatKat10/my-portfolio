import React from 'react';
import '../HomePage.css';  // Make sure to style this component in a separate CSS file


function HomePage() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Natasha Kataev</h1>
        <p className="hero-subtitle">Software and Information Systems Engineer</p>
        <a href="#about" className="cta-button">Learn More About Me</a>
      </div>

      <div className="scroll-indicator">
        <span></span>
      </div>
    </section>
  );
}

export default HomePage;

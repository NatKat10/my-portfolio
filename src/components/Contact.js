import React from 'react';
import '../Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        <div className="contact-details">
          <p><strong>Email:</strong> kataev.nat@gmail.com</p>
          <p><strong>Phone:</strong> +972-50-711-0305</p>
          <p><strong>Location:</strong> Be'er Sheva, Israel (Open to relocation)</p>
          <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/natasha-kataev-b47406158" target="_blank" rel="noopener noreferrer">linkedin.com/in/NatashaKataev</a></p>
          <p><strong>GitHub:</strong> <a href="https://github.com/NatKat10" target="_blank" rel="noopener noreferrer">github.com/NatKat10</a></p>
        </div>
      </div>
    </section>
  );
}

export default Contact;

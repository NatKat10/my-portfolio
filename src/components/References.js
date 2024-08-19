import React from 'react';
import '../References.css';

function References() {
  return (
    <section id="references" className="references-section">
      <div className="container">
        <h2 className="section-title">References</h2>
        <div className="reference-item">
          <h3>Shlomi Benado</h3>
          <p><strong>Position:</strong> Manager at Tamar Handasa</p>
          <p><strong>Email:</strong> tamar-eng@013net.net</p>
          <p><strong>Phone:</strong> +972-54-777-5461</p>
        </div>
        <div className="reference-item">
          <h3>Prof. Guy Shani</h3>
          <p><strong>Position:</strong> Mentor in Evo Genes Project</p>
          <p><strong>Email:</strong> shanigu@bgu.ac.il</p>
          <p><strong>Phone:</strong> +972-54-810-5556</p>
        </div>
      </div>
    </section>
  );
}

export default References;

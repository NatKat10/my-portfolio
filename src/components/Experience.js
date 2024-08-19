import React from 'react';
import '../Experience.css';

function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        
        <div className="experience-content">
          <div className="experience-item">
            <h3>Technical Support at Tamar Handasa</h3>
            <h4>Technical Support </h4>
            <p><em>January 2021 - Present</em></p>
            <ul>
              <li>Managed company IT and cloud services.</li>
              <li>Created and maintained the company website using WordPress and CSS.</li>
              <li>Developed an offline version of the company website with HTML, CSS, and JavaScript for accessibility during outages.</li>
            </ul>
          </div>

          <div className="experience-item">
            <h3>Internship at Cybereason</h3>
            <h4>Intern - Automation Team</h4>
            <p><em>March 2022 - August 2022</em></p>
            <ul>
              <li>Contributed to Automation Team projects using Jenkins for CI/CD and Pytest for testing.</li>
              <li>Collaborated on GitHub for version control.</li>
              <li>Utilized MongoDB for data management.</li>
            </ul>
          </div>

          <div className="experience-item">
            <h3>Technical Support at Bezeq</h3>
            <h4>Technical Support Specialist</h4>
            <p><em>January 2016 - August 2017</em></p>
            <ul>
              <li>Provided customer support for Antivirus, Safe Surfing, and Bezeq Smart Home products.</li>
              <li>Awarded the Top Customer Service Award in 2016.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;

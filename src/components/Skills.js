import React from 'react';
import '../Skills.css';

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        
        <div className="skills-content">
          <div className="skill-category">
            <h3>Programming Languages</h3>
            <ul>
              <li>JavaScript <div className="skill-bar"><span className="javascript"></span></div></li>
              <li>Python <div className="skill-bar"><span className="python"></span></div></li>
              <li>Java <div className="skill-bar"><span className="java"></span></div></li>
              <li>C++ <div className="skill-bar"><span className="cplusplus"></span></div></li>
              <li>C <div className="skill-bar"><span className="c"></span></div></li>
              <li>C# <div className="skill-bar"><span className="csharp"></span></div></li>
              <li>Bash <div className="skill-bar"><span className="bash"></span></div></li>
              <li>R <div className="skill-bar"><span className="r"></span></div></li>

            </ul>
          </div>
          
          <div className="skill-category">
            <h3>Frameworks & Libraries</h3>
            <ul>
              {/* <li>React <div className="skill-bar"><span className="react"></span></div></li> */}
              <li>Node.js <div className="skill-bar"><span className="nodejs"></span></div></li>
              <li>Vue.js <div className="skill-bar"><span className="vue"></span></div></li>
              <li>JQuery <div className="skill-bar"><span className="jquery"></span></div></li>
              <li>Flask <div className="skill-bar"><span className="flask"></span></div></li>
              <li>css <div className="skill-bar"><span className="css"></span></div></li>
              <li>Bootstrap <div className="skill-bar"><span className="bootstrap"></span></div></li>




            </ul>
          </div>
          
          <div className="skill-category">
            <h3>Tools & Databases</h3>
            <ul>
              <li>Git <div className="skill-bar"><span className="git"></span></div></li>
              <li>MongoDB <div className="skill-bar"><span className="mongodb"></span></div></li>
              <li>MySQL <div className="skill-bar"><span className="mysql"></span></div></li>
              <li>Google Colab  <div className="skill-bar"><span className="colab"></span></div></li>
            </ul>
          </div>
          
          <div className="skill-category">
            <h3>Soft Skills</h3>
            <ul>
              <li>Problem Solving <div className="skill-bar"><span className="problem-solving"></span></div></li>
              <li>Teamwork <div className="skill-bar"><span className="teamwork"></span></div></li>
              <li>Communication <div className="skill-bar"><span className="communication"></span></div></li>
              <li>Adaptability <div className="skill-bar"><span className="adaptability"></span></div></li>
              <li>Time Management <div className="skill-bar"><span className="time-management"></span></div></li>
              <li>Attention to Detail <div className="skill-bar"><span className="attention"></span></div></li>

              
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;

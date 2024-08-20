import React from 'react';
import '../Skills.css';
import { FaJsSquare, FaPython, FaJava, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaVuejs } from 'react-icons/fa';
import { SiCplusplus, SiCsharp, SiFlask, SiMongodb, SiMysql, SiJquery, SiGooglecolab, SiBootstrap, SiC } from 'react-icons/si';

function Skills() {
  const skills = [
    {
      category: 'Programming Languages',
      skills: [
        { name: 'JavaScript', icon: <FaJsSquare /> },
        { name: 'Python', icon: <FaPython /> },
        { name: 'Java', icon: <FaJava /> },
        { name: 'C', icon: <SiC /> },
        { name: 'C++', icon: <SiCplusplus /> },
        { name: 'C#', icon: <SiCsharp /> },
        { name: 'HTML', icon: <FaHtml5 /> },
        { name: 'CSS', icon: <FaCss3Alt /> },
      ],
    },
    {
      category: 'Frameworks & Libraries',
      skills: [
        { name: 'React', icon: <FaReact /> },
        { name: 'Vue.js', icon: <FaVuejs /> },
        { name: 'Node.js', icon: <FaNodeJs /> },
        { name: 'Flask', icon: <SiFlask /> },
        { name: 'JQuery', icon: <SiJquery /> },
        { name: 'Bootstrap', icon: <SiBootstrap /> },
      ],
    },
    {
      category: 'Tools & Databases',
      skills: [
        { name: 'Git', icon: <FaGitAlt /> },
        { name: 'MongoDB', icon: <SiMongodb /> },
        { name: 'MySQL', icon: <SiMysql /> },
        { name: 'Google Colab', icon: <SiGooglecolab /> },
      ],
    },
    {
      category: 'Soft Skills',
      skills: [
        { name: 'Problem Solving', icon: '🧠' },  // You can use emojis for soft skills
        { name: 'Teamwork', icon: '🤝' },
        { name: 'Communication', icon: '💬' },
        { name: 'Adaptability', icon: '🌱' },
        { name: 'Time Management', icon: '⏰' },
        { name: 'Attention to Detail', icon: '🔍' },
      ],
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-grid">
          {skills.map((category, index) => (
            <div key={index} className="skill-category-card">
              <h3>{category.category}</h3>
              <ul className="skill-row">
                {category.skills.map((skill, idx) => (
                  <li key={idx} className="skill-item">
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;

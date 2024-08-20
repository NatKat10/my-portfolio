import React, { useState } from 'react';
import Modal from 'react-modal';
import '../Projects.css'; // Make sure to create and style this CSS file

// Import images correctly
import picture1 from '../assets/Picture1.png';
import picture2 from '../assets/Picture2.png';
import food1 from '../assets/food1.png';
import food2 from '../assets/food2.png';
import space1 from '../assets/space1.png';
import space2 from '../assets/space2.png';
import project1 from '../assets/project1.png';
import first1 from '../assets/first1.png';
import first2 from '../assets/first2.png';

Modal.setAppElement('#root');

function Projects() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(null);

  const projects = [
    {
      title: 'Evo Genes Project',
      description: 'An interactive tool for visualizing gene sequence similarities and structures.',
      images: [picture1, picture2],
      details: `As part of our final project at Ben Gurion University of the Negev's Department of Software and Information Systems Engineering, 
                we developed Evo-Genes, a comprehensive gene visualization system. Evo-Genes provides a web-based platform integrating server-side 
                and client-side programming with the Ensembl database. It offers visually engaging comparative gene sequence analysis with a focus on exon display.`,
    },
    {
      title: 'Foodie Recipes Project',
      description: 'A dynamic recipe exploration website.',
      images: [food1, food2],
      details: 'Developed with JavaScript, Node.js, and Vue.js, this site integrates the Spoonacular API to provide users with a vast range of culinary options.',
    },
    {
      title: 'Space Invaders Game',
      description: 'A thrilling HTML5 Space Invaders game powered by jQuery, JavaScript, and CSS3.',
      images: [space1, space2],
      details: `Navigate your spaceship using keyboard arrow keys and customize your gameplay experience by selecting your firing button. 
                The game includes a countdown timer, customizable player characters, and adjustable audio volume.`,
      link: 'https://web-development-environments-2023.github.io/assignment2-204687685_323225409/',
    },
    {
      title: 'Retrieve-Project',
      description: 'An Information Retrieval Project built with Python.',
      images: [project1],
      details: `Developed a search engine for English Wikipedia capable of processing queries across 6M documents using Python, 
                Google Colab, Google Cloud Platform, Ngrok, Flask App, and Pyspark. Enhanced the engine by implementing new inverted index classes, 
                optimizing Cosine Similarity calculations, and improving search speed and accuracy.`,
    },
    {
      title: 'My First Website',
      description: 'A personal website about my grandmother.',
      images: [first1, first2],
      details: `This is my first website ever, created using pure HTML and CSS. The site is dedicated to my grandmother who lives in Russia, 
                and she was very excited to see it. This project was my introduction to web development and helped me grasp the basics of building web pages.`,
    },
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const openLightbox = (image) => {
    setLightboxImage(image);
    setLightboxIsOpen(true);
  };

  const closeLightbox = () => {
    setLightboxIsOpen(false);
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card" onClick={() => openModal(project)}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <button className="view-details-button">View Details</button>
            </div>
          ))}
        </div>
      </div>

      <Modal 
        isOpen={modalIsOpen} 
        onRequestClose={closeModal} 
        contentLabel="Project Details"
        style={{
          content: {
            maxWidth: '600px',
            margin: 'auto',
            padding: '20px',
            position: 'relative',
            borderRadius: '10px',
            zIndex: '1100',
            width: '90%',  // Added this to make the modal responsive
            maxHeight: '90%',  // Adjust the height for mobile
            overflowY: 'auto',  // Allow scrolling if content is too long
          },
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            zIndex: '1000'
          }
        }}
      >
        {selectedProject && (
          <div style={{ color: '#000' }}>
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.details}</p>
            <div className="project-images" style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
              {selectedProject.images.map((image, index) => (
                <img 
                  key={index} 
                  src={image} 
                  alt={`${selectedProject.title} screenshot ${index + 1}`} 
                  style={{ 
                    width: '48%', 
                    height: 'auto', 
                    maxHeight: '300px', 
                    objectFit: 'cover',
                    cursor: 'pointer' 
                  }} 
                  onClick={() => openLightbox(image)}
                />
              ))}
            </div>
            {selectedProject.link && (
              <a 
                href={selectedProject.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ 
                  display: 'block', 
                  margin: '20px auto', 
                  padding: '10px 20px', 
                  backgroundColor: '#00CED1', 
                  color: '#fff', 
                  width:'80px',
                  borderRadius: '10px', 
                  textAlign: 'center', 
                  textDecoration: 'none' 
                }}
              >
                Play Game
              </a>
            )}
            <button 
              onClick={closeModal} 
              style={{ 
                display: 'block', 
                margin: '20px auto', 
                padding: '10px 20px', 
                backgroundColor: '#0073e6', 
                color: '#fff', 
                borderRadius: '5px', 
                cursor: 'pointer' 
              }}
            >
              Close
            </button>
          </div>
        )}
      </Modal>

      <Modal
        isOpen={lightboxIsOpen}
        onRequestClose={closeLightbox}
        contentLabel="Image Lightbox"
        style={{
          content: {
            backgroundColor: 'transparent',
            border: 'none',
            inset: '0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          },
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            zIndex: '1500',
          },
        }}
      >
        <div style={{ position: 'relative' }}>
          <button 
            onClick={closeLightbox} 
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              backgroundColor: '#fff',
              color: '#000',
              border: 'none',
              borderRadius: '50%',
              width: '30px',
              height: '30px',
              cursor: 'pointer',
              fontSize: '16px',
              textAlign: 'center',
            }}
          >
            X
          </button>
          {lightboxImage && (
            <img 
              src={lightboxImage} 
              alt="Enlarged view" 
              style={{ 
                maxWidth: '90%', 
                maxHeight: '80%', 
                borderRadius: '10px' 
              }}
            />
          )}
        </div>
      </Modal>
    </section>
  );
}

export default Projects;

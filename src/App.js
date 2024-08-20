import React, {useEffect} from 'react';
import Header from './components/Header';  // Path to Header component
import AboutMe from './components/AboutMe';
import HomePage from './components/HomePage';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';  // Import the Projects component
import Contact from './components/Contact';
import References from './components/References';




import './App.css';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {


  useEffect(() => {
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        // Scroll Down - hide navbar
        navbar.style.top = '-80px'; // Adjust this value to match your navbar height
      } else {
        // Scroll Up - show navbar
        navbar.style.top = '0';
      }

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
    });

    return () => {
      window.removeEventListener('scroll', () => {});
    };
  }, []);
  return (
    <div className="App">
      <Header />  
      <HomePage />

      <main>
        <AboutMe />  
        <Experience /> 
        <Projects /> 
        <Skills />  
        <Contact />
        <References />

        {/* Other components go here */}
      </main>
    </div>
  );
}

export default App;

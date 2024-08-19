import React from 'react';
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

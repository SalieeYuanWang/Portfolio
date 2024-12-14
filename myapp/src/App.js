// Import necessary libraries
import React from 'react';
import {Routes, Route, Link } from 'react-router-dom';
import './App.css';  // Assuming App.css is in the same folder

// Import pages
import Home from './pages/Home';  // Correct if Home.js is inside src/pages
import AboutMe from './pages/AboutMe';  // Correct if AboutMe.js is inside src/pages
import Projects from './pages/Projects';  // Correct if Projects.js is inside src/pages
import Services from './pages/Services';  // Correct if Services.js is inside src/pages
import Contact from './pages/Contact';  // Correct if Contact.js is inside src/pages

function App() {
  return (
    
    <div className="App">
    <nav className="navbar">
      <img src="/favicon.ico" alt="Custom Logo" className="logo" />
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Me</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutMe />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </div>
  );
}

export default App;

// File name: App.js, Name: Yuan Wang, StudentNo: 301427219, Date: December 1st

// Import necessary libraries
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './index.css';
// Import pages
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Services from './pages/Services';
import Contact from './pages/Contact';

// Main Application Component
function App() {
    return (
      <Router>
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
      </Router>
    );
}

export default App;

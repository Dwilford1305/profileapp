import { useState } from 'react';
import Slider from "react-slick"; // Import Slider
import "slick-carousel/slick/slick.css"; // Import base slick CSS
import "slick-carousel/slick/slick-theme.css"; // Import theme slick CSS
import './App.css';

// Simple Navbar Component
function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State for hamburger menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      {/* Container for content */}
      <div className="navbar-content">
        <div className="navbar-brand">Derek Wilford</div>
        {/* Links List */}
        <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
          <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
          <li><a href="#skills" onClick={() => setIsOpen(false)}>Skills</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
        </ul>
        {/* Hamburger Button - Moved after links */}
        <button className="navbar-toggler" onClick={toggleMenu} aria-label="Toggle navigation">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}

// About Section Component
function About() {
  return (
    <section id="about" className="portfolio-section card">
      <h2>About Me</h2>
      <p>
      Hi, I'm Derek, a Wetaskiwin, Alberta-based web and mobile app developer.

      My career path has taken a unique turn. After 18 years as a professional truck driver, I recently completed a comprehensive Web and Mobile App 
      Development program at CDI College. This exciting transition allows me to combine my proven work ethic, problem-solving skills, and passion for 
      technology into a rewarding new career.
      </p>
      {/* Add more details: photo, background, experience highlights */}
    </section>
  );
}

// Projects Section Component
function Projects() {
  // Settings for the carousel
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Loop slides
    speed: 500, // Transition speed
    slidesToShow: 2, // Show 2 slides on desktop
    slidesToScroll: 1, // Scroll 1 slide at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Autoplay interval
    pauseOnHover: true, // Pause autoplay on hover
    responsive: [
      {
        breakpoint: 992, // Medium screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768, // Small screens
        settings: {
          slidesToShow: 1, // Show 1 slide on mobile
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section id="projects" className="portfolio-section">
      <h2>Projects</h2>
      {/* Replace grid with Slider component */}
      <div className="project-carousel">
        <Slider {...settings}>
          {/* Each project card is a slide */}
          <div className="project-slide">
            <div className="project-card card">
              <h3>Project Title 1</h3>
              {/* Add image placeholder */}
              <img src="https://via.placeholder.com/400x200?text=Project+1+Screenshot" alt="Project 1 Screenshot" className="project-screenshot" />
              <p>Brief description of the project. Technologies used: React, Node.js, etc.</p>
              <a href="#" className="project-link">View Details</a>
            </div>
          </div>
          <div className="project-slide">
            <div className="project-card card">
              <h3>Project Title 2</h3>
              {/* Add image placeholder */}
              <img src="https://via.placeholder.com/400x200?text=Project+2+Screenshot" alt="Project 2 Screenshot" className="project-screenshot" />
              <p>Brief description of the project. Technologies used: React Native, Firebase, etc.</p>
              <a href="#" className="project-link">View Details</a>
            </div>
          </div>
          <div className="project-slide">
            <div className="project-card card">
              <h3>Project Title 3</h3>
              {/* Add image placeholder */}
              <img src="https://via.placeholder.com/400x200?text=Project+3+Screenshot" alt="Project 3 Screenshot" className="project-screenshot" />
              <p>Brief description of the new project. Technologies used: Vite, TypeScript, etc.</p>
              <a href="#" className="project-link">View Details</a>
            </div>
          </div>
          {/* Add more project slides as needed */}
        </Slider>
      </div>
    </section>
  );
}

// Skills Section Component
function Skills() {
  return (
    <section id="skills" className="portfolio-section card">
      <h2>Skills</h2>
      <ul className="skills-list">
        <li>JavaScript (ES6+)</li>
        <li>TypeScript</li>
        <li>React / React Native</li>
        <li>Node.js</li>
        <li>HTML5 & CSS3</li>
        <li>Git</li>
        <li>REST APIs</li>
        <li>Databases (e.g., PostgreSQL, MongoDB)</li>
        {/* Add more skills */}
      </ul>
    </section>
  );
}

// Contact Section Component
function Contact() {
  return (
    <section id="contact" className="portfolio-section">
      <h2>Contact Me</h2>
      <p>Feel free to reach out! You can contact me via email or connect on LinkedIn.</p>
      {/* Add contact form or links */}
      <a href="mailto:wilfordderek@gmail.com" className="contact-link">wilfordderek@gmail.com</a>
      {/* Add Social Links Here */}
      <div className="social-links">
        {/* Replace # with your actual profile URLs */}
        <a href="#" target="_blank" rel="noopener noreferrer" className="social-link">
          {/* Placeholder for LinkedIn Icon */}
          LinkedIn
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="social-link">
          {/* Placeholder for GitHub Icon */}
          GitHub
        </a>
      </div>
    </section>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <main className="portfolio-main">
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="portfolio-footer">
        <p>&copy; 2025 Derek Wilford. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;

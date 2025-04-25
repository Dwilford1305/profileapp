import { useState, useEffect } from 'react';
import Slider from "react-slick"; // Import Slider
import "slick-carousel/slick/slick.css"; // Import base slick CSS
import "slick-carousel/slick/slick-theme.css"; // Import theme slick CSS
import { useInView } from 'react-intersection-observer'; // Import useInView
import './App.css';

// Helper component for scroll animation
import { ReactNode } from 'react';

function AnimatedSection({ children }: { children: ReactNode }) {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.05, // Trigger when 5% (or even lower like 0.01) of the element is visible
  });

  return (
    <div ref={ref} className={`portfolio-section-container ${inView ? 'visible' : ''}`}>
      {children}
    </div>
  );
}

// Simple Navbar Component
function Navbar({ toggleTheme, currentTheme }: { toggleTheme: () => void, currentTheme: string }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-brand">
          <img src="/media/headshot.png" alt="Headshot" className="brand-headshot" />
          <span>Derek Wilford</span>
        </div>

        {/* Wrapper for right-side items on desktop */}
        <div className="navbar-right-group">
          {/* Theme Toggle Button - Desktop */}
          <button onClick={toggleTheme} className="theme-toggle-button desktop-toggle" aria-label="Toggle theme">
            {currentTheme === 'light' ? '🌙' : '☀️'}
          </button>
          {/* Links List - Desktop */}
          <ul className="navbar-links">
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Wrapper for toggles on mobile */}
        <div className="navbar-mobile-toggles">
          {/* Theme Toggle Button - Mobile */}
          <button onClick={toggleTheme} className="theme-toggle-button mobile-toggle" aria-label="Toggle theme">
            {currentTheme === 'light' ? '🌙' : '☀️'}
          </button>
          {/* Hamburger Button */}
          <button className="navbar-toggler" onClick={toggleMenu} aria-label="Toggle navigation">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
      {/* Mobile Menu Links - Placed outside navbar-content for easier absolute positioning */}
      <ul className={`navbar-links-mobile ${isOpen ? 'open' : ''}`}>
        <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
        <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
        <li><a href="#skills" onClick={() => setIsOpen(false)}>Skills</a></li>
        <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
      </ul>
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
function Contact({ theme }: { theme: string }) { // Add theme prop
  const linkedinIcon = theme === 'light' ? '/media/InBug-Black.png' : '/media/InBug-White.png';
  const githubIcon = theme === 'light' ? '/media/github-mark.png' : '/media/github-mark-white.png';

  return (
    <section id="contact" className="portfolio-section">
      <h2>Contact Me</h2>
      <p>Feel free to reach out! You can contact me via email or connect on social media.</p>
      {/* Add contact form or links */}
      <a href="mailto:wilfordderek@gmail.com" className="contact-link">wilfordderek@gmail.com</a>
      {/* Add Social Links Here */}
      <div className="social-links">
        {/* Replace # with your actual profile URLs */}
        <a href="https://www.linkedin.com/in/derek-wilford13" target="_blank" rel="noopener noreferrer" className="social-link">
          {/* Replace text with img tag */}
          <img src={linkedinIcon} alt="LinkedIn Profile" className="social-icon" /> {/* Use dynamic icon */}
        </a>
        <a href="https://github.com/Dwilford1305" target="_blank" rel="noopener noreferrer" className="social-link">
          {/* Replace text with img tag */}
          <img src={githubIcon} alt="GitHub Profile" className="social-icon" /> {/* Use dynamic icon */}
        </a>
      </div>
    </section>
  );
}

function App() {
  const [theme, setTheme] = useState('dark'); // Default theme

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Effect to apply theme class to body
  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme'); // Explicitly remove light-theme when dark
    }
  }, [theme]); // Re-run when theme changes

  return (
    <>
      <Navbar toggleTheme={toggleTheme} currentTheme={theme} />
      <main className="portfolio-main">
        {/* Wrap each section with AnimatedSection */}
        <AnimatedSection>
          <About />
        </AnimatedSection>
        <AnimatedSection>
          <Projects />
        </AnimatedSection>
        <AnimatedSection>
          <Skills />
        </AnimatedSection>
        <AnimatedSection>
          <Contact theme={theme} /> {/* Pass theme prop */}
        </AnimatedSection>
      </main>
      <footer className="portfolio-footer">
        <p>&copy; 2025 Derek Wilford. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;

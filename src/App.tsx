import { useState, useEffect, ReactNode, useRef } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useInView } from 'react-intersection-observer';
import './App.css';

/**
 * AnimatedSection
 * Fades in its children when scrolled into view using Intersection Observer.
 */
function AnimatedSection({ children }: { children: ReactNode }) {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only animate once
    threshold: 0.05,   // Trigger when 5% visible
  });

  return (
    <div ref={ref} className={`portfolio-section-container ${inView ? 'visible' : ''}`}>
      {children}
    </div>
  );
}

/**
 * Navbar
 * Main navigation bar with theme toggle and responsive menu.
 */
function Navbar({ toggleTheme, currentTheme }: { toggleTheme: () => void, currentTheme: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-brand">
          <img src="/media/headshot.png" alt="Headshot" className="brand-headshot" />
          <span>Derek Wilford</span>
        </div>
        <div className="navbar-right-group">
          <button onClick={toggleTheme} className="theme-toggle-button desktop-toggle" aria-label="Toggle theme">
            {currentTheme === 'light' ? '🌙' : '☀️'}
          </button>
          <ul className="navbar-links">
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="navbar-mobile-toggles">
          <button onClick={toggleTheme} className="theme-toggle-button mobile-toggle" aria-label="Toggle theme">
            {currentTheme === 'light' ? '🌙' : '☀️'}
          </button>
          <button className="navbar-toggler" onClick={toggleMenu} aria-label="Toggle navigation">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
      <ul className={`navbar-links-mobile ${isOpen ? 'open' : ''}`}>
        <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
        <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
        <li><a href="#skills" onClick={() => setIsOpen(false)}>Skills</a></li>
        <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
      </ul>
    </nav>
  );
}

/**
 * About
 * Introductory section about Derek Wilford.
 */
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
      {/* TODO: Consider adding more details: photo, background, experience highlights */}
    </section>
  );
}

/**
 * Projects
 * Displays projects in a react-slick carousel.
 */
function Projects() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section id="projects" className="portfolio-section">
      <h2>Projects</h2>
      <div className="project-carousel">
        <Slider {...settings}>
          {/* TODO: Replace placeholder projects with actual data */}
          <div className="project-slide">
            <div className="project-card card">
              <h3>Neighborhood Watch App</h3>
              <img src="/media/nbrhd-watch.png" alt="Project 1 Coming Soon Sign" className="project-screenshot" />
              <p>A community safety platform built with React, Vite, and Material UI. Features incident reporting, discussion boards, alerts, blog posts, and Auth0 authentication with role-based access. Includes an admin dashboard for management.</p>
              <a href="https://neighborhood-cop.netlify.app/" className="project-link">View Details</a>
            </div>
          </div>
          <div className="project-slide">
            <div className="project-card card">
              <h3>Project Title 2</h3>
              <img src="/media/comingsoon.png" alt="Project 2 Coming Soon Sign" className="project-screenshot" />
              <p>Brief description of the project. Technologies used etc.</p>
              <a href="#" className="project-link">View Details</a>
            </div>
          </div>
          <div className="project-slide">
            <div className="project-card card">
              <h3>Project Title 3</h3>
              <img src="/media/comingsoon.png" alt="Project 3 Coming Soon Sign" className="project-screenshot" />
              <p>Brief description of the project. Technologies used etc.</p>
              <a href="#" className="project-link">View Details</a>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
}

/**
 * Skills
 * Lists technical skills.
 */
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
        {/* TODO: Add or refine skills list */}
      </ul>
    </section>
  );
}

/**
 * Contact
 * Shows contact info and social links. Icons change with theme.
 */
function Contact({ theme }: { theme: string }) {
  const linkedinIcon = theme === 'light' ? '/media/InBug-Black.png' : '/media/InBug-White.png';
  const githubIcon = theme === 'light' ? '/media/github-mark.png' : '/media/github-mark-white.png';

  return (
    <section id="contact" className="portfolio-section">
      <h2>Contact Me</h2>
      <p>Feel free to reach out! You can contact me via email or connect on social media.</p>
      <a href="mailto:wilfordderek@gmail.com" className="contact-link">wilfordderek@gmail.com</a>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/derek-wilford13" target="_blank" rel="noopener noreferrer" className="social-link">
          <img src={linkedinIcon} alt="LinkedIn Profile" className="social-icon" />
        </a>
        <a href="https://github.com/Dwilford1305" target="_blank" rel="noopener noreferrer" className="social-link">
          <img src={githubIcon} alt="GitHub Profile" className="social-icon" />
        </a>
      </div>
      <a href="/media/DWilford_Red.pdf" download="DerekWilford_Resume.pdf" className="resume-download-button button">
        Download Resume
      </a>
    </section>
  );
}

/**
 * ParallaxIcons
 * Renders tech icons at random positions (no parallax effect).
 */
function ParallaxIcons() {
  const techIcons = [
    'Android Studio.png', 'CSharp.png', 'CSS3.png', 'Git.png', 'HTML5.png',
    'Java.png', 'JavaScript.png', 'jQuery.png', 'Linux.png', 'MongoDB.png',
    'MySQL.png', 'Node.js.png', 'React.png', 'Swift.png', 'TypeScript.png', 'Vite.png'
  ];
  const positionsRef = useRef(
    Array.from({ length: techIcons.length }, () => ({
      x: Math.random() * 90 + 5, // 5% to 95% left
      y: Math.random() * 90 + 5  // 5% to 95% top
    }))
  );

  useEffect(() => {
    // Set left/top for each icon after render
    const icons = document.querySelectorAll('.parallax-icon');
    positionsRef.current.forEach((pos, idx) => {
      const icon = icons[idx] as HTMLElement;
      if (icon) {
        icon.style.left = pos.x + '%';
        icon.style.top = pos.y + '%';
      }
    });
  }, []);

  return (
    <div className="parallax-container">
      {techIcons.map((icon, index) => (
        <img
          key={index}
          src={`./media/techicons/${icon}`}
          alt={icon.replace('.png', '')}
          className="parallax-icon"
          data-x={positionsRef.current[index].x}
          data-y={positionsRef.current[index].y}
        />
      ))}
    </div>
  );
}

/**
 * App
 * Root component: handles theme and renders all sections.
 */
function App() {
  const [theme, setTheme] = useState('dark');
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.body.classList.toggle('light-theme', theme === 'light');
  }, [theme]);

  return (
    <>
      <Navbar toggleTheme={toggleTheme} currentTheme={theme} />
      <main className="portfolio-main">
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
          <Contact theme={theme} />
        </AnimatedSection>
      </main>
      <ParallaxIcons />
      <footer className="portfolio-footer">
        <p>&copy; 2025 Derek Wilford. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;

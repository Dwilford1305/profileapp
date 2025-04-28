import { useState, useEffect, ReactNode, useRef } from 'react'; // Consolidate ReactNode import
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useInView } from 'react-intersection-observer';
import './App.css';

/**
 * AnimatedSection Component
 * Wraps content sections and applies a fade-in animation when the section scrolls into view.
 * Uses react-intersection-observer hook.
 */
function AnimatedSection({ children }: { children: ReactNode }) {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animate only once when it becomes visible
    threshold: 0.05,   // Trigger animation when 5% of the section is visible
  });

  return (
    // Apply 'visible' class when inView is true to trigger CSS transition
    <div ref={ref} className={`portfolio-section-container ${inView ? 'visible' : ''}`}>
      {children}
    </div>
  );
}

/**
 * Navbar Component
 * Displays the main navigation bar with links, theme toggle, and mobile menu handling.
 * @param {() => void} toggleTheme - Function to toggle the color theme.
 * @param {string} currentTheme - The current theme ('light' or 'dark').
 */
function Navbar({ toggleTheme, currentTheme }: { toggleTheme: () => void, currentTheme: string }) {
  // State to manage the mobile menu's open/closed status
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        {/* Brand section with headshot and name */}
        <div className="navbar-brand">
          <img src="/media/headshot.png" alt="Headshot" className="brand-headshot" />
          <span>Derek Wilford</span>
        </div>

        {/* Desktop: Right-aligned group with theme toggle and links */}
        <div className="navbar-right-group">
          <button onClick={toggleTheme} className="theme-toggle-button desktop-toggle" aria-label="Toggle theme">
            {currentTheme === 'light' ? '🌙' : '☀️'} {/* Display moon for light, sun for dark */}
          </button>
          <ul className="navbar-links">
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Mobile: Wrapper for theme toggle and hamburger button */}
        <div className="navbar-mobile-toggles">
          <button onClick={toggleTheme} className="theme-toggle-button mobile-toggle" aria-label="Toggle theme">
            {currentTheme === 'light' ? '🌙' : '☀️'}
          </button>
          <button className="navbar-toggler" onClick={toggleMenu} aria-label="Toggle navigation">
            {/* Hamburger icon lines */}
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
      {/* Mobile Menu: Displayed below navbar when 'isOpen' is true */}
      <ul className={`navbar-links-mobile ${isOpen ? 'open' : ''}`}>
        {/* Close menu when a link is clicked */}
        <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
        <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
        <li><a href="#skills" onClick={() => setIsOpen(false)}>Skills</a></li>
        <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
      </ul>
    </nav>
  );
}

/**
 * About Section Component
 * Displays introductory information about Derek Wilford.
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
 * Projects Section Component
 * Displays projects using a react-slick carousel.
 */
function Projects() {
  // Configuration settings for the react-slick carousel
  const settings = {
    dots: true,         // Show navigation dots
    infinite: true,     // Loop slides
    speed: 500,         // Transition speed in ms
    slidesToShow: 2,    // Number of slides to show on desktop
    slidesToScroll: 1,  // Number of slides to scroll at a time
    autoplay: true,     // Enable automatic sliding
    autoplaySpeed: 3000,// Time between slides in ms
    pauseOnHover: true, // Pause autoplay when mouse is over a slide
    responsive: [
      {
        breakpoint: 992, // Settings for medium screens (tablets)
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768, // Settings for small screens (mobile)
        settings: {
          slidesToShow: 1, // Show only one slide on mobile
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
          {/* Slide 1 */}
          <div className="project-slide">
            <div className="project-card card">
              <h3>Project Title 1</h3>
              <img src="/media/comingsoon.png" alt="Project 1 Coming Soon Sign" className="project-screenshot" />
              <p>Brief description of the project. Technologies used etc.</p>
              <a href="#" className="project-link">View Details</a> {/* TODO: Update href */}
            </div>
          </div>
          {/* Slide 2 */}
          <div className="project-slide">
            <div className="project-card card">
              <h3>Project Title 2</h3>
              <img src="/media/comingsoon.png" alt="Project 2 Coming Soon Sign" className="project-screenshot" />
              <p>Brief description of the project. Technologies used etc.</p>
              <a href="#" className="project-link">View Details</a> {/* TODO: Update href */}
            </div>
          </div>
          {/* Slide 3 */}
          <div className="project-slide">
            <div className="project-card card">
              <h3>Project Title 3</h3>
              <img src="/media/comingsoon.png" alt="Project 3 Coming Soon Sign" className="project-screenshot" />
              <p>Brief description of the project. Technologies used etc.</p>
              <a href="#" className="project-link">View Details</a> {/* TODO: Update href */}
            </div>
          </div>
          {/* Add more project slides as needed */}
        </Slider>
      </div>
    </section>
  );
}

/**
 * Skills Section Component
 * Displays a list of technical skills.
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
 * Contact Section Component
 * Displays contact information (email) and social media links.
 * Dynamically selects social media icons based on the current theme.
 * @param {string} theme - The current theme ('light' or 'dark').
 */
function Contact({ theme }: { theme: string }) {
  // Select appropriate icon paths based on the current theme
  const linkedinIcon = theme === 'light' ? '/media/InBug-Black.png' : '/media/InBug-White.png';
  const githubIcon = theme === 'light' ? '/media/github-mark.png' : '/media/github-mark-white.png';

  return (
    <section id="contact" className="portfolio-section">
      <h2>Contact Me</h2>
      <p>Feel free to reach out! You can contact me via email or connect on social media.</p>
      <a href="mailto:wilfordderek@gmail.com" className="contact-link">wilfordderek@gmail.com</a>
      <div className="social-links">
        {/* LinkedIn Link - Opens in new tab, secured with noopener noreferrer */}
        <a href="https://www.linkedin.com/in/derek-wilford13" target="_blank" rel="noopener noreferrer" className="social-link">
          <img src={linkedinIcon} alt="LinkedIn Profile" className="social-icon" />
        </a>
        {/* GitHub Link - Opens in new tab, secured with noopener noreferrer */}
        <a href="https://github.com/Dwilford1305" target="_blank" rel="noopener noreferrer" className="social-link">
          <img src={githubIcon} alt="GitHub Profile" className="social-icon" />
        </a>
      </div>
    </section>
  );
}

/**
 * ParallaxIcons Component
 * Displays a set of icons at random positions without scroll effects.
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
    // After render, set left/top via JS to avoid inline styles in JSX
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
 * Main App Component
 * The root component that orchestrates the layout, theme switching, and renders all sections.
 */
function App() {
  // State to manage the current theme ('light' or 'dark')
  const [theme, setTheme] = useState('dark'); // Default theme is dark

  // Function to toggle the theme between light and dark
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Effect hook to apply/remove the 'light-theme' class to the body element
  // This triggers the CSS variable changes defined in index.css
  useEffect(() => {
    document.body.classList.toggle('light-theme', theme === 'light');
    // The line above replaces the if/else block for conciseness:
    // if (theme === 'light') {
    //   document.body.classList.add('light-theme');
    // } else {
    //   document.body.classList.remove('light-theme');
    // }
  }, [theme]); // Dependency array: This effect runs only when the 'theme' state changes

  return (
    <>
      {/* Render Navbar, passing theme state and toggle function */}
      <Navbar toggleTheme={toggleTheme} currentTheme={theme} />

      {/* Main content area */}
      <main className="portfolio-main">
        {/* Wrap each section with AnimatedSection for scroll reveal effect */}
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
          {/* Pass the current theme to Contact for icon selection */}
          <Contact theme={theme} />
        </AnimatedSection>
      </main>

      {/* Parallax Icons */}
      <ParallaxIcons />

      {/* Footer section */}
      <footer className="portfolio-footer">
        <p>&copy; 2025 Derek Wilford. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;

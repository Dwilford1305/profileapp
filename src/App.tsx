import { useState, useEffect } from 'react';
import { 
  Navbar, 
  About, 
  Projects, 
  Skills, 
  Contact, 
  AnimatedSection, 
  ParallaxIcons, 
  ErrorBoundary 
} from './components';
import { Theme } from './types';
import './App.css';

/**
 * App
 * Root component: handles theme and renders all sections with error boundary.
 */
function App() {
  const [theme, setTheme] = useState<Theme['current']>('dark');
  
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.body.classList.toggle('light-theme', theme === 'light');
  }, [theme]);

  return (
    <ErrorBoundary>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Navbar toggleTheme={toggleTheme} currentTheme={theme} />
      <main id="main-content" className="portfolio-main">
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
    </ErrorBoundary>
  );
}

export default App;

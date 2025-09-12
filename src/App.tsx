import { useState, useEffect, Suspense, lazy } from 'react';
import { 
  Navbar, 
  About, 
  AnimatedSection, 
  ErrorBoundary 
} from './components';
import { Theme } from './types';
import './App.css';

// Lazy load components that are below the fold
const Projects = lazy(() => import('./components/Projects').then(module => ({ default: module.Projects })));
const Skills = lazy(() => import('./components/Skills').then(module => ({ default: module.Skills })));
const Contact = lazy(() => import('./components/Contact').then(module => ({ default: module.Contact })));
const ParallaxIcons = lazy(() => import('./components/ParallaxIcons').then(module => ({ default: module.ParallaxIcons })));

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
        <Suspense fallback={<div className="loading-spinner">Loading...</div>}>
          <AnimatedSection>
            <Projects />
          </AnimatedSection>
          <AnimatedSection>
            <Skills />
          </AnimatedSection>
          <AnimatedSection>
            <Contact theme={theme} />
          </AnimatedSection>
        </Suspense>
      </main>
      <Suspense fallback={<div className="loading-spinner">Loading icons...</div>}>
        <ParallaxIcons />
      </Suspense>
      <footer className="portfolio-footer">
        <p>&copy; 2025 Derek Wilford. All rights reserved.</p>
      </footer>
    </ErrorBoundary>
  );
}

export default App;

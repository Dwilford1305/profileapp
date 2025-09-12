import React, { useState } from 'react';
import { NavbarProps } from '../../types';

/**
 * Navbar
 * Main navigation bar with theme toggle and responsive menu.
 */
export const Navbar: React.FC<NavbarProps> = ({ toggleTheme, currentTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="navbar-content">
        <div className="navbar-brand">
          <img 
            src="/media/headshot.png" 
            alt="Derek Wilford - Professional Web Developer" 
            className="brand-headshot" 
          />
          <span>Derek Wilford</span>
        </div>
        <div className="navbar-right-group">
          <button 
            onClick={toggleTheme} 
            className="theme-toggle-button desktop-toggle" 
            aria-label={`Switch to ${currentTheme === 'light' ? 'dark' : 'light'} theme`}
            aria-pressed={currentTheme === 'dark'}
          >
            {currentTheme === 'light' ? '🌙' : '☀️'}
          </button>
          <ul className="navbar-links" role="menubar">
            <li role="none">
              <a href="#about" role="menuitem">About</a>
            </li>
            <li role="none">
              <a href="#projects" role="menuitem">Projects</a>
            </li>
            <li role="none">
              <a href="#skills" role="menuitem">Skills</a>
            </li>
            <li role="none">
              <a href="#contact" role="menuitem">Contact</a>
            </li>
          </ul>
        </div>
        <div className="navbar-mobile-toggles">
          <button 
            onClick={toggleTheme} 
            className="theme-toggle-button mobile-toggle" 
            aria-label={`Switch to ${currentTheme === 'light' ? 'dark' : 'light'} theme`}
            aria-pressed={currentTheme === 'dark'}
          >
            {currentTheme === 'light' ? '🌙' : '☀️'}
          </button>
          <button 
            className="navbar-toggler" 
            onClick={toggleMenu} 
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
      <ul 
        className={`navbar-links-mobile ${isOpen ? 'open' : ''}`}
        id="mobile-menu"
        role="menu"
        aria-hidden={!isOpen}
      >
        <li role="none">
          <a href="#about" role="menuitem" onClick={() => setIsOpen(false)}>About</a>
        </li>
        <li role="none">
          <a href="#projects" role="menuitem" onClick={() => setIsOpen(false)}>Projects</a>
        </li>
        <li role="none">
          <a href="#skills" role="menuitem" onClick={() => setIsOpen(false)}>Skills</a>
        </li>
        <li role="none">
          <a href="#contact" role="menuitem" onClick={() => setIsOpen(false)}>Contact</a>
        </li>
      </ul>
    </nav>
  );
};
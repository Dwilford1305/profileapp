import React from 'react';
import { ContactProps } from '../../types';

/**
 * Contact
 * Shows contact info and social links. Icons change with theme.
 */
export const Contact: React.FC<ContactProps> = ({ theme }) => {
  const linkedinIcon = theme === 'light' ? '/media/InBug-Black.png' : '/media/InBug-White.png';
  const githubIcon = theme === 'light' ? '/media/github-mark.png' : '/media/github-mark-white.png';

  return (
    <section id="contact" className="portfolio-section">
      <h2>Contact Me</h2>
      <p>Feel free to reach out! You can contact me via email or connect on social media.</p>
      <a 
        href="mailto:wilfordderek@gmail.com" 
        className="contact-link"
        aria-label="Send email to Derek Wilford"
      >
        wilfordderek@gmail.com
      </a>
      <div className="social-links">
        <a 
          href="https://www.linkedin.com/in/derek-wilford13" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="social-link"
          aria-label="Connect with Derek Wilford on LinkedIn (opens in new tab)"
        >
          <img 
            src={linkedinIcon} 
            alt="Derek Wilford LinkedIn Profile - Connect with Web Developer" 
            className="social-icon" 
          />
        </a>
        <a 
          href="https://github.com/Dwilford1305" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="social-link"
          aria-label="View Derek Wilford's code projects on GitHub (opens in new tab)"
        >
          <img 
            src={githubIcon} 
            alt="Derek Wilford GitHub Profile - View Code Projects" 
            className="social-icon" 
          />
        </a>
      </div>
      <a 
        href="/media/DWilford_Red.pdf" 
        download="DerekWilford_Resume.pdf" 
        className="resume-download-button button"
        aria-label="Download Derek Wilford's resume as PDF"
      >
        Download Resume
      </a>
    </section>
  );
};
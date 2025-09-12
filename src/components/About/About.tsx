import React from 'react';

/**
 * About
 * Introductory section about Derek Wilford.
 */
export const About: React.FC = () => {
  return (
    <section id="about" className="portfolio-section card">
      <h2>About Me</h2>
      <p>
        Hi, I'm Derek, a Wetaskiwin, Alberta-based web and mobile app developer.
        
        My career path has taken a unique turn. After 18 years as a professional truck driver, 
        I recently completed a comprehensive Web and Mobile App Development program at CDI College. 
        This exciting transition allows me to combine my proven work ethic, problem-solving skills, 
        and passion for technology into a rewarding new career.
      </p>
      {/* TODO: Consider adding more details: photo, background, experience highlights */}
    </section>
  );
};
import React from 'react';

/**
 * Skills
 * Lists technical skills.
 */
export const Skills: React.FC = () => {
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
};
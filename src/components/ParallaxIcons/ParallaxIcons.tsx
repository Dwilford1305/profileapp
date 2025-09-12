import React, { useEffect, useRef } from 'react';

/**
 * ParallaxIcons
 * Renders tech icons at random positions (no parallax effect).
 */
export const ParallaxIcons: React.FC = () => {
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
          alt={`${icon.replace('.png', '')} technology icon - Derek Wilford skills`}
          className="parallax-icon"
          data-x={positionsRef.current[index].x}
          data-y={positionsRef.current[index].y}
        />
      ))}
    </div>
  );
};
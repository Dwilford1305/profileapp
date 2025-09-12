import React from 'react';
import { useInView } from 'react-intersection-observer';
import { AnimatedSectionProps } from '../../types';

/**
 * AnimatedSection
 * Fades in its children when scrolled into view using Intersection Observer.
 */
export const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only animate once
    threshold: 0.05,   // Trigger when 5% visible
  });

  return (
    <div ref={ref} className={`portfolio-section-container ${inView ? 'visible' : ''}`}>
      {children}
    </div>
  );
};
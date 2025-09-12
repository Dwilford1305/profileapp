import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ResponsiveImage } from '../shared/ResponsiveImage';

/**
 * Projects
 * Displays projects in a react-slick carousel.
 */
export const Projects: React.FC = () => {
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
              <h3>Community Hub PWA</h3>
              <a href="https://allthingswetaskiwin.ca" className="project-link">
                <ResponsiveImage
                  src="/media/allthingswetPreview.png" 
                  alt="All Things Wetaskiwin Community Hub PWA - React Node.js project showcase" 
                  className="project-screenshot" 
                  loading="lazy"
                />
              </a>
              <p>
                I practiced modern, AI-assisted development, leveraging GitHub Copilot to accelerate boilerplate creation and streamline my workflow. 
                This allowed me to focus on building robust core logic and solving unique project challenges, turning a complex idea into a live application efficiently.
                Tech Stack:
                React | Node.js | Express | MongoDB | Tailwind CSS | Puppeteer | Vercel | Render
                Core Features:
                Automated Content Aggregator: A server-side scraping service using Node.js and Puppeteer to ethically gather and parse live data from multiple local sources.

                Full MERN Stack: Built with a React frontend, an Express/Node.js backend, and a MongoDB database.

                Dynamic Caching: Implemented a stale-while-revalidate caching strategy on the REST API to ensure high performance and fresh content for all users.

                Mobile-First PWA: Designed for a seamless, installable experience on any device.
              </p>
            </div>
          </div>
          <div className="project-slide">
            <div className="project-card card">
              <h3>Neighborhood Watch App</h3>
              <a href="https://neighborhood-cop.netlify.app/" className="project-link">
                <ResponsiveImage
                  src="/media/nbrhd-watch.png" 
                  alt="Neighborhood Watch Community Safety App - React Material UI project" 
                  className="project-screenshot" 
                  loading="lazy"
                />
              </a>
              <p>
                A community safety platform built with React, Vite, and Material UI. Features incident reporting, discussion boards, alerts, blog posts, and Auth0 authentication with role-based access. Includes an admin dashboard for management.
              </p>
            </div>
          </div>
          {/*
          <div className="project-slide">
            <div className="project-card card">
              <h3>Project Title 3</h3>
              <img src="/media/comingsoon.png" alt="Project 3 Coming Soon Sign" className="project-screenshot" />
              <p>Brief description of the project. Technologies used etc.</p>
              <a href="#" className="project-link">View Details</a>
            </div>
          </div>
          */}
        </Slider>
      </div>
    </section>
  );
};
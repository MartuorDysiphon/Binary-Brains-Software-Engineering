import React from 'react';
import './hero.css';

const Hero = () => {
  return (
    <div id="home" className="hero">
      <div className="hero-content">
        <div className="hero-badge">
          <i className="fas fa-drum"></i>
          <span>Mangaung Dance Performances 2026</span>
          <i className="fas fa-feather-alt"></i>
        </div>
        <h1><span>Mangaung</span> Entertainment in motion. Future in focus.</h1>
        <p>Three sacred dances, exclusive interviews, and the living pulse of Bloemfontein. Binary Brains presents an immersive digital archive of movement, memory and innovation.</p>
        <div className="hero-meta">
          {/* <span><i className="fas fa-calendar-alt"></i> Due 24.04.2026</span>
          <span><i className="fas fa-users"></i> 6 minds · 1 vision</span> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
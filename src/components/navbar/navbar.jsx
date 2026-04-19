import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo/logo.png';

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    setMenuOpen(false);
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className="glass-nav">
        <div className="container">
          <div className="nav-wrapper">
            <div className="logo-block">
              <img src={logo} alt="Binary Brains logo" className="logo-img" />
            </div>
            
            <div className="nav-links">
              <button className="nav-link-btn" onClick={(e) => handleScroll(e, '#home')}>
                Home
              </button>
              <button className="nav-link-btn" onClick={(e) => handleScroll(e, '#dances')}>
                Dances
              </button>
              <button className="nav-link-btn" onClick={(e) => handleScroll(e, '#multimedia')}>
                Stories
              </button>
              <button className="nav-link-btn" onClick={(e) => handleScroll(e, '#team')}>
                Team
              </button>
            </div>

            <button className="hamburger" onClick={toggleMenu}>
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </div>

      <div className={`menu-overlay ${menuOpen ? 'open' : ''}`} onClick={closeMenu}></div>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <button className="close-menu" onClick={closeMenu}>
          <i className="fas fa-times"></i>
        </button>
        <button className="nav-link-btn" onClick={(e) => handleScroll(e, '#home')}>
          <i className="fas fa-home"></i> Home
        </button>
        <button className="nav-link-btn" onClick={(e) => handleScroll(e, '#dances')}>
          <i className="fas fa-shoe-prints"></i> Dances
        </button>
        <button className="nav-link-btn" onClick={(e) => handleScroll(e, '#multimedia')}>
          <i className="fas fa-microphone-alt"></i> Stories
        </button>
        <button className="nav-link-btn" onClick={(e) => handleScroll(e, '#team')}>
          <i className="fas fa-brain"></i> Team
        </button>
      </div>
    </>
  );
};

export default Navigation;
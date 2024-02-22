import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import '../../scss/Navbar.scss';

// Import NDC logo
import ndcLogo from '../../assets/images/logo/ndc-logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showFocusDropdown, setShowFocusDropdown] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleFocusDropdown = () => setShowFocusDropdown(!showFocusDropdown);

  const handleNavLinkClick = (path) => {
    setIsMenuOpen(false);
    setShowFocusDropdown(false); // Hide dropdown when a link is clicked
    navigate(path);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo" onClick={() => handleNavLinkClick('/')}>
        <img src={ndcLogo} alt="NDC Logo" />
      </div>

      <div className={isMenuOpen ? "navbar-links active" : "navbar-links"}>
        <div className="navbar-link focus-link"
             onMouseEnter={toggleFocusDropdown} 
             onMouseLeave={toggleFocusDropdown}>
          Focus
          {showFocusDropdown && (
            <div className="navbar-dropdown">
              {/* Navigation links */}
              <a onClick={() => handleNavLinkClick('/environmental-devastation')} className="dropdown-link">Environmental Devastation</a>
              <a onClick={() => handleNavLinkClick('/underdevelopment-and-poverty')} className="dropdown-link">Underdevelopment & Poverty</a>
              <a onClick={() => handleNavLinkClick('/insecurity-and-conflict')} className="dropdown-link">Insecurity & Conflict</a>
              <a onClick={() => handleNavLinkClick('/climate-change-vulnerability')} className="dropdown-link">Climate Change Vulnerability</a>
              <a onClick={() => handleNavLinkClick('/community-engagement')} className="dropdown-link">Community Engagement</a>
              <a onClick={() => handleNavLinkClick('/lack-of-sustainable-framework')} className="dropdown-link">Lack of Sustainable Framework</a>
            </div>
          )}
        </div>
        {/* Other navigation links */}
        <a onClick={() => handleNavLinkClick('/about')} className="navbar-link">About</a>
        <a onClick={() => handleNavLinkClick('/team')} className="navbar-link">Team</a>
        <a onClick={() => handleNavLinkClick('/projects')} className="navbar-link">Projects</a>
        <a onClick={() => handleNavLinkClick('/contact')} className="navbar-link">Contact</a>
      </div>

      <div className="navbar-special-links">
        <a onClick={() => handleNavLinkClick('/events')} className="navbar-link navbar-button">EVENTS</a>
        <a onClick={() => handleNavLinkClick('/search')} className="navbar-icon-link">
          <FontAwesomeIcon icon={faSearch} />
        </a>
      </div>

      <button className="navbar-hamburger" onClick={toggleMenu}>
        <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
      </button>
    </nav>
  );
};

export default Navbar;

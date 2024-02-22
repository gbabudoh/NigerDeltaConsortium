import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import '../../scss/Footer.scss';
import ndcIcon from '../../assets/images/ndcicon/ndcicon.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-column">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>

      <div className="footer-column">
        <h3>Follow Us on Social Media</h3>
        <div className="social-icons">
          <a href="https://www.facebook.com/nigerdelta.consortium.5/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a>
          <a href="https://www.instagram.com/nigerdeltaconsortium/?hl=en" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Fnigerdeltacons2" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faXTwitter} /></a>
          <a href="https://www.youtube.com/channel/UCF_iUaUYTncHlnsYZLh8gcQ" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faYoutube} /></a>
        </div>
      </div>

      <div className="footer-column">
        <img src={ndcIcon} alt="Footer Logo" className="footer-logo" />
        <p>Solving complex problems in the Niger Delta region in Nigeria.</p>
      </div>

      {/* Copyright notice */}
      <div className="footer-bottom">
        <p>© 2024 Niger Delta Consortium. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-scroll';  

const Footer = () => {
  return (
    <footer className="footer" id="contact-section">
      <div className="footer-content">
        <div className="footer-logo">
          <h3>KZa</h3>
        </div>
        <div className="footer-links">
          <ul>
            <li>
              <Link
                to="about-section" 
                smooth={true}
                duration={500}
                offset={-80}  
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="blog"  
                smooth={true}
                duration={500}
                offset={-80}
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                to="contact-section"  
                smooth={true}
                duration={500}
                offset={-80}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-social">
          <ul>
            <li>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} /> Facebook
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} /> Twitter
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} /> Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Kza. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

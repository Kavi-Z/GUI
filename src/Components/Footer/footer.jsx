import React from 'react';
import './Footer.css';
 
const Footer = () => {
  return (
    <footer className="footer" id='contact-section'>
      <div className="footer-content">
        <div className="footer-logo">
          <h3>Logo</h3>
        </div>
        <div className="footer-links">
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-social">
          <ul>
            <li><a href="#facebook">Facebook <ion-icon name="logo-facebook"></ion-icon></a></li>
            <li><a href="#twitter">Twitter</a></li>
            <li><a href="#instagram">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
      <script src="https://unpkg.com/ionicons@4.5.10-0/dist/ionicons.js"></script>
    </footer>
    
  );
};

export default Footer;

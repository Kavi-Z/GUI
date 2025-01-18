import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll'; 
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faBlog } from '@fortawesome/free-solid-svg-icons';




const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={sticky ? 'dark-nav' : ''}>
      <ul className="nav-links">
        <li><a href="/"> <FontAwesomeIcon icon={faHome} style={{ marginRight: '8px', marginLeft: '10px' }}/>Home</a></li>
        <li><Link to="about-section" smooth={true} duration={500} offset={-80}><FontAwesomeIcon icon={faAddressCard} style={{ marginRight: '8px', marginLeft: '10px' }}/>About
        </Link></li>
        <li><Link to="contact-section" smooth={true} duration={500} offset={-80}> <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '8px', marginLeft: '10px' }}/>Contact</Link></li>
        <li className='blog' >
          <Link to="blog" smooth={true} duration={500} offset={-250}>
             <FontAwesomeIcon icon={faBlog} style={{ marginRight: '8px', marginLeft: '10px' }}/>Blog
          </Link>
        </li>
      </ul>
      <div className="auth-links">
        <a href="/login">Login</a>
        <a href="/signup">Signup</a>
      </div>
    </nav>
  );
};

export default Navbar;

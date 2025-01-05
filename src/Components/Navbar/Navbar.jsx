import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll'; 
import './Navbar.css';

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
        <li><a href="/">Home</a></li>
        <li><Link to="about-section" smooth={true} duration={500} offset={-80}>About</Link></li>
        <li><Link to="contact-section" smooth={true} duration={500} offset={-80}>Contact</Link></li>
        <li>
          <Link to="blog" smooth={true} duration={500} offset={-250}>
            Blog
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

import React, { useEffect, useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });

    return () => {
      window.removeEventListener('scroll', () => {});  
    };
  }, []);

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
        <li>
          <button className="btn" onClick={() => setShowLogin(true)}>
            Login
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

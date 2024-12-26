import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

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
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <ul>
        <li>
         Home 
        </li>
        <li>
         About
        </li>
        <li>
           Services 
        </li>
        <li>
       Contact 
        </li>
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

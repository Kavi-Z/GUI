import React, { useEffect, useState } from 'react';
import './NavbarA.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBox, faPlus } from '@fortawesome/free-solid-svg-icons';

const NavbarA = () => {
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
      <a href="/">
        <FontAwesomeIcon icon={faHome} style={{ marginRight: '8px', marginLeft: '10px' }} /> Home
      </a>
      <a href="/products">
        <FontAwesomeIcon icon={faBox} style={{ marginRight: '8px', marginLeft: '10px' }} /> Products
      </a>
      <a href="/add-product">
        <FontAwesomeIcon icon={faPlus} style={{ marginRight: '8px', marginLeft: '10px' }}/> Add Product
      </a>
    </nav>
    
  );
};

export default NavbarA;

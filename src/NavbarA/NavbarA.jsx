import React, { useEffect, useState } from 'react';
import './NavbarA.css';

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
      <a href="/">Home</a>
      <a href="/products">Products</a>
      <a href="/add-product">Add Product</a>
    
    </nav>
  );
};

export default NavbarA;

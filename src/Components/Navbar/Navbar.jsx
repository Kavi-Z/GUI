import React from 'react'
import './Navbar.css'   
const Navbar = ({setShowLogin}) => {
  return (
    <nav className='container'>
      <ul>
        <li>Home</li>
        <li> About</li>
        <li> Services</li>
        <li>Contact</li>
        <li><button className='btn' onClick={() => setShowLogin(true)}>Login</button></li>
      </ul>
    </nav>
  )
}

export default Navbar
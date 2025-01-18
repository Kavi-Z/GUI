import React from 'react'
import './Body.css'
import { Link } from 'react-scroll'; 


const Body = () => {
  return (
    <div className='Body container'>
        <div className='body'>
        <div className='body-text'>
            <h1  className='heading' >Experience Culinary Excellence.</h1>
            <p>“Delight in our chef's exquisite creations, crafted with the finest ingredients and an unparalleled passion for flavor.”</p>
            <button className="btn">
  <Link to="food" smooth={true} duration={500} offset={-250}>
    Explore Our Recipes
  </Link>
</button>
            
             
        </div>
        </div>

        <div>
          
        </div>
    </div>
  )
}

export default Body
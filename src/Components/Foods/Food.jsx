import React from 'react';
import './Food.css';

import food2 from '../../Assets/food2.jpg';
import food3 from '../../Assets/food3.jpg';
import food4 from '../../Assets/food4.jpg';
import food5 from '../../Assets/food5.jpg';
import Sweet1 from '../../Assets/sweet1.jpg';
import Sweet2 from '../../Assets/sweet2.jpg';
import Sweet3 from '../../Assets/sweet3.jpg';
import Sweet4 from '../../Assets/sweet4.jpg';
import SE1 from '../../Assets/SE1.jpg';
import SE2 from '../../Assets/SE2.jpg';
import SE3 from '../../Assets/SE3.jpg';
import SE4 from '../../Assets/SE4.jpg';

const Food = () => {
  return (
    <div className='foods'>
      <div className='food'>
        <img src={food2} alt="Food 2" />
        <div className='overlay'>Delicious Rolls, Order Now!</div>
        <h1>Rolls</h1>
       
      </div>
      <div className='food'>
        <img src={food3} alt="Food 3" />
        <div className='overlay'>Tasty Noodles, Order Now!</div>
        <h1>Noodles</h1>
      
      </div>
      <div className='food'>
        <img src={food4} alt="Food 4" />
        <div className='overlay'>Tasty Noodles, Order Now!</div>
        <h1>Burgers</h1>
        
      </div>
      <div className='food'>
        <img src={food5} alt="Food 5" />
        <div className='overlay'>Tasty Noodles, Order Now!</div>
        <h1>Fries</h1>
        
      </div>

       
      <div className='food'>
        <img src={Sweet1} alt="Sweet 1" />
        <div className='overlay'>Delicious Sweet, Order Now!</div>
        <h1>Sweet 1</h1>
        
      </div>
      <div className='food'>
        <img src={Sweet2} alt="Sweet 2" />
        <div className='overlay'>Delicious Sweet, Order Now!</div>
        <h1>Sweet 2</h1>
        
      </div>
      <div className='food'>
        <img src={Sweet3} alt="Sweet 3" />
        <div className='overlay'>Delicious Sweet, Order Now!</div>
        <h1>Sweet 3</h1>
        
      </div>
      <div className='food'>
        <img src={Sweet4} alt="Sweet 4" />
        <div className='overlay'>Delicious Sweet, Order Now!</div>
        <h1>Sweet 4</h1>
       
      </div>

      <div className='food'>
        <img src={SE1} alt="SE1" />
        <div className='overlay'>Delicious Sweet, Order Now!</div>
        <h1>Sweet 5</h1>
       
      </div>
      <div className='food'>
        <img src={SE2} alt="SE2" />
        <div className='overlay'>Delicious Sweet, Order Now!</div>
        <h1>Sweet 6</h1>
         
      </div>
      <div className='food'>
        <img src={SE3} alt="SE3" />
        <div className='overlay'>Delicious Sweet, Order Now!</div>
        <h1>Sweet 7</h1>
        
      </div>
      <div className='food'>
        <img src={SE4} alt="SE4" />
        <div className='overlay'>Delicious Sweet, Order Now!</div>
        <h1>Sweet 8</h1>
        
      </div>
    </div>
  );
};

export default Food;

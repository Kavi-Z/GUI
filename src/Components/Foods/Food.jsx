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
const Food = () => {
  return (
    <div className='foods'>
        
        <div className='food'>
    <img src={food2} alt="Food 2" />
    <div className='overlay'>Delicious Rolls, Order Now!</div>
    <h1>Rolls</h1>
    <p>Price</p>
</div>
<div className='food'>
    <img src={food3} alt="Food 3" />
    <div className='overlay'>Tasty Noodles, Order Now!</div>
    <h1>Noodles</h1>
    <p>Price</p>
</div>

        <div className='food'>
            <img src={food4} alt="Food 4" />
            <div className='overlay'>Tasty Noodles, Order Now!</div>
            <h1>Burgers</h1>
            <p>Price</p>
        </div>
        <br />
        <div className='food'>
            <img src={food5} alt="Food 5" />
            <div className='overlay'>Tasty Noodles, Order Now!</div>
            <h1> Fries</h1>
            <p>Price</p>
        </div>
        <br />
        <div className='food'>
            <img src={Sweet1} alt="Sweet 1" />
            <div className='overlay'>Tasty Noodles, Order Now!</div>
            <h1> Fries</h1>
            <p>Price</p>
        </div>
        <div className='food'>
            <img src={Sweet2} alt="Sweet 2" />
            <div className='overlay'>Tasty Noodles, Order Now!</div>
            <h1> Fries</h1>
            <p>Price</p>
        </div>
        <div className='food'>
            <img src={Sweet3} alt="Sweet 3" />
            <div className='overlay'>Tasty Noodles, Order Now!</div>
            <h1> Fries</h1>
            <p>Price</p>
        </div>
        <div className='food'>
            <img src={Sweet4} alt="Sweet 3" />
            <div className='overlay'>Tasty Noodles, Order Now!</div>
            <h1> Fries</h1>
            <p>Price</p>
        </div>
    </div>
  )
}

export default Food;

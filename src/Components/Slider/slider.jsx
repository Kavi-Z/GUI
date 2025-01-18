import React, { useState, useEffect } from 'react';
import slider1 from '../../Assets/slider1.jpg';
import slider2 from '../../Assets/slider2.jpg';
import slider3 from '../../Assets/slider3.jpg';
import slider4 from '../../Assets/slider4.jpg';
import './Slider.css';

const Slider = () => {
  const images = [slider1, slider2, slider3, slider4];
  const texts = [
    'Relish Dish 01',
    'Experience Dish 02',
    'Explore dish 03',
    'Indulge in Dish 04',
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="slider">
      {images.map((img, index) => (
        <div
          key={index}
          className={`slide ${currentIndex === index ? 'active' : ''}`}
        >
          <div className="text-container">
            <h1 className="slide-text">{texts[index]}</h1>
            <p className="hover-text">
            Indulge in a culinary journey where every weekend brings a delightful surprise. Known for our exquisite menu, we craft special dishes exclusively for weekends to tantalize your taste buds. From flavorful appetizers to decadent desserts, our weekend specials are designed to satisfy every craving and elevate your dining experience. Whether you're celebrating with loved ones or enjoying a relaxing meal, we promise each bite will be a treat for your senses. Come for the food, stay for the experience—our passion for food ensures that every visit is unforgettable.
            </p>
          </div>
          <img src={img} alt={`Slide ${index}`} />
        </div>
      ))}
    </div>
  );
};

export default Slider;

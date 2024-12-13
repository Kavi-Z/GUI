import React, { useState, useEffect } from 'react';
import slider1 from '../../Assets/slider1.jpg';
import slider2 from '../../Assets/slider2.jpg';
import slider3 from '../../Assets/slider3.jpg';
import slider4 from '../../Assets/slider4.jpg';
import './Slider.css';

const Slider = () => {
  const images = [slider1, slider2, slider3, slider4];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="slider">
      <div className="slider-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((img, index) => (
          <div className="slide" key={index}>
            <img
              src={img}
              alt={`Slide ${index}`}
              style={{
                transform: currentIndex === index ? 'scale(1)' : 'scale(0.85)',
                opacity: currentIndex === index ? 1 : 0.7,
                transition: 'transform 1s ease, opacity 1s ease',
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;

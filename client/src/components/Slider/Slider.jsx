// Slider.jsx

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import '../../scss/Slider.scss';

//import slider images
import slideImage1 from '../../assets/images/slider/s1.jpg'
import slideImage2 from '../../assets/images/slider/s2.jpg'
import slideImage3 from '../../assets/images/slider/s3.jpg'


const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { 
      image: slideImage1,  // Replace with actual image paths
      title: 'FIXING', 
      text: 'Issues' 
    },
    { 
      image: slideImage2, // Replace with actual image paths
      title: 'CREATE', 
      text: 'systems' 
    },
    { 
      image: slideImage3,  // Replace with actual image paths
      title: 'SUSTAIN', 
      text: 'process' 
    }
  ];

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="slider">
      <FontAwesomeIcon icon={faArrowLeft} className="arrow left-arrow" onClick={goToPrevious} />
      <div className="slide" style={{ backgroundImage: `url(${slides[currentSlide].image})` }}>
        <div className="content">
          <h1>{slides[currentSlide].title}</h1>
          <h3>{slides[currentSlide].text}</h3>
        </div>
      </div>
      <FontAwesomeIcon icon={faArrowRight} className="arrow right-arrow" onClick={goToNext} />
    </div>
  );
};

export default Slider;

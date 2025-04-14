import React, { useEffect, useRef, useState } from 'react';
import PressSlick from './PressSlick';

const Carousel = ({ items }) => {
  const sliderRef = useRef(null);

  const handleNext = () => {
    sliderRef.current.slickNext();
  };
  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };
  const settings = {
    infinite: true,
    centerMode: true,
    centerPadding: '30px',
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <div className='carousel-container'>
      <PressSlick settings={settings} refElement={sliderRef} items={items} />
      <button className='carousel-button left' onClick={handlePrev}>
        &#10094;
      </button>
      <button className='carousel-button right' onClick={handleNext}>
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;

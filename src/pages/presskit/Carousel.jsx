import React, { useEffect, useRef, useState } from 'react';

const Carousel = ({ items, visibleCount = 3 }) => {
  const [currentIndex, setCurrentIndex] = useState(visibleCount);
  const itemRef = useRef(null);
  const clonedItems = [
    ...items.slice(-visibleCount),
    ...items,
    ...items.slice(0, visibleCount),
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => prev + 1);
  };
  const handlePrev = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  const trackStyle = {
    transform: `translateX(-${40 * currentIndex}%)`,
  };

  //   const trackStyle = {
  //     transform: `translateX(-${100 + 30 * currentIndex}%)`,
  //     //   transition: 'transform 0.3s ease-in-out',
  //     //   display: 'flex',
  //   };

  return (
    <div className='carousel-container'>
      <div className='carousel-track' style={trackStyle}>
        {clonedItems.map((item, index) => (
          <div className='carousel-item' key={index}>
            {item}
          </div>
        ))}
      </div>
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

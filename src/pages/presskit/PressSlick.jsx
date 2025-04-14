import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const PressSlick = ({ items = [], settings, refElement }) => {
  return (
    <div style={{ width: '100%', margin: '0 auto' }}>
      <Slider {...settings} ref={refElement}>
        {items.map((item, index) => (
          <div key={index}>
            {/* 이미지나 카드, 텍스트 등 자유롭게 렌더링 */}
            {item}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PressSlick;

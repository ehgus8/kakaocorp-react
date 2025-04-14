import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Slick = ({
  items = [],
  infinite = true,
  slidesToShow = 1,
  autoplay = true,
  arrows = true,
}) => {
  const settings = {
    dots: true,
    infinite,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    autoplay,
    autoplaySpeed: 3000,
    arrows,
  };

  return (
    <div style={{ width: '90%', margin: '0 auto' }}>
      <Slider {...settings}>
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

export default Slick;

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
  fade = false,
  dotsPosition = 'initial',
  dotsBottom = '0',
  dotsBg = '#000',
  dotsOp = '.25',
  onSlideChange = () => {},
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
    fade,
    afterChange: (current) => onSlideChange(current),
  };

  return (
    <div style={{ width: '100%', margin: '0 auto' }}>
      <style>{`
        .slick-dots {
          position:${dotsPosition};
          height:16px;
          margin-top:16px;
          bottom: ${dotsBottom};

          li{
            width:auto;
            height:auto;
            margin:0;

            button{
              padding:8px;
              width:auto;
              height:auto;

              &::before{
                width:8px;
                height:8px;
                content:'';
                display:block;
                background:${dotsBg};
                border-radius:4px;
                position:initial;
                opacity: ${dotsOp};
              }
            }

            &.slick-active{
              button{
                &::before{
                  width:24px;
                  background:#000;
                }
              }
            }
          }
        }

        @media (max-width: 1439px) {
          .slick-dots {
            margin-top:12px;
          }
        }
      `}</style>

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

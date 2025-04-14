// src/assets/components/SlideSection.jsx
import React from 'react';
import SlideCard from './SlideCard';
import Slick from './Slick';
import styles from './MainNav.module.scss'; // 또는 SlideSection.module.scss로 따로 빼도 OK

const SlideSection = ({ data }) => {
  const slideItems = data.map((item, idx) => <SlideCard key={idx} {...item} />);

  return (
    <div className={styles['slick-slider']}>
      <div className={styles.slick_list}>
        <Slick
          items={slideItems}
          infinite={false}
          slidesToShow={1}
          autoplay={false}
          arrows={false}
          fade={true}
        />
      </div>
    </div>
  );
};

export default SlideSection;

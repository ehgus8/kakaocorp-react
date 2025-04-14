import React from 'react';
import styles from './SlideCard.module.scss';
import { Link } from 'react-router-dom';

const SlideCard = ({ bigImg, smallImg, title, description, link }) => {
  return (
    <Link to={link}>
      <div className={styles.wrap}>
        <img src={bigImg} alt='big' className={styles.big_img} />

        <div className={styles.text_wrap}>
          <img src={smallImg} alt='small' className={styles.small_img} />
          <span>{title}</span>
          <p>{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default SlideCard;

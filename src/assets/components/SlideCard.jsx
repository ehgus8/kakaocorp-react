import React from 'react';
import styles from './SlideCard.module.scss';
import { Link } from 'react-router-dom';

const SlideCard = ({ bigImg, smallImg, title, description, link }) => {
  return (
    <Link to={link} className={styles.link_cont}>
      <div className={styles.wrap}>
        {bigImg && <img src={bigImg} alt='big' className={styles.big_img} />}

        <div className={styles.text_wrap}>
          <img src={smallImg} alt='small' className={styles.small_img} />
          <span>{title}</span>
          <p>
            {description.split('\n').map((line, idx) => (
              <React.Fragment key={idx}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default SlideCard;

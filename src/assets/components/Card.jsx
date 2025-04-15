import React from 'react';
import styles from './Card.module.scss';
import { Link } from 'react-router-dom';

export const MiniCard = ({ articleItem }) => {
  return (
    <Link
      to={`/detail/${articleItem.id}`}
      className={styles.noLinkStyle}
      draggable={false}
    >
      <div className={styles.minicardContainer}>
        <div className={styles.textContainer}>
          <div className={styles.header}>
            <img src='../../dummy/loudspeaker.webp' width='24px' />
            <span>보도자료</span>
            <span>{articleItem.date}</span>
          </div>
          <div className='title'>
            <strong>{articleItem.title}</strong>
          </div>
        </div>
      </div>
    </Link>
  );
};

// item 객체 예시
/*
{
  id: 1,
  title:
    '“하루 1만 명 오가던 골목상권에서 5천 명의 온라인 단골 만들다” 카카오-북촌 계동길 상인회장, 파리 OECD 회의에서 ‘프로젝트 단골’ 성과 발표',
  tags: ['#프로젝트단골', '#oecd', '#상생사례', '#디지털전환', '#소상공인'],
  date: '2025.04.11',
  category: '보도자료',
  imgSrc: '../../dummy/11517.webp',
  iconSrc: '../../dummy/loudspeaker.webp',
}
*/

const Card = ({ item, imgPosition = 'top' }) => {
  return (
    <Link
      onClick={() => window.scrollTo(0, 0)}
      to={`/detail/${item.id}`}
      className={styles.noLinkStyle}
      draggable={false}
    >
      <div className={styles.cardContainer}>
        {/* 이미지가 위에 있는 경우 top */}
        {imgPosition === 'top' && (
          <div className={styles.imageContainer}>
            <img src={item.imgSrc} />
          </div>
        )}
        <div className={styles.textContainer}>
          <div className={styles.header}>
            <img src={item.iconSrc} width='32px' />
            <span className={styles.category}>{item.category}</span>
            <span>{item.date}</span>
          </div>
          <div className={styles.title}>
            <strong>{item.title}</strong>
          </div>
          <div className={styles.tags}>
            {item.tags.map((tag) => (
              <span>{tag} </span>
            ))}
          </div>
        </div>
        {/* 이미지가 아래에 있는 경우 bottom */}
        {imgPosition === 'bottom' && (
          <div className={styles.imageContainer}>
            <img src={item.imgSrc} />
          </div>
        )}
      </div>
    </Link>
  );
};

export default Card;

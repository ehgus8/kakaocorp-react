import React from 'react';
import styles from './Card.module.scss';
import { Link } from 'react-router-dom';

export const MiniCard = ({ item }) => {
  return (
    <Link
      className={styles.link_content}
      to={`/detail/${item.id}`}
      onClick={() => window.scrollTo(0, 0)}
      draggable={false}
    >
      <div className={styles.wrap_link}>
        <div className={styles.inner_info}>
          <img
            src={item.iconSrc}
            className={styles.ico_category}
            width='24'
            height='24'
          />
          <span className={styles.txt_category}>{item.category}</span>
          <span className={styles.txt_date}>{item.date}</span>
        </div>
        <strong className={styles.tit_link}>{item.title}</strong>
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
  content: `내용입니다.`
}
*/

const Card = ({ item, imgPosition = 'top' }) => {
  return (
    <div className={styles.wrap_card}>
      <div className={`${styles.item_card_new} ${styles.item_bottom_card}`}>
        <Link
          onClick={() => window.scrollTo(0, 0)}
          to={`/detail/${item.id}`}
          className={styles.link_card}
          draggable='false'
        >
          <span className={styles.wrap_cont}>
            {imgPosition == 'top' && (
              <span className={styles.wrap_thumb}>
                <img
                  src={item.imgSrc}
                  className={styles.thumb_img}
                  draggable='false'
                />
              </span>
            )}
            <div className={styles.wrap_text}>
              <span className={styles.info_cate}>
                <img src={item.iconSrc} className={styles.ico_cate} />
                <span className={styles.txt_cate}>{item.category}</span>
                <span className={styles.txt_date}>{item.date}</span>
              </span>
              <strong className={styles.tit_card}>{item.title}</strong>
              <span className={styles.info_card}>
                {item.tags.map((tag) => (
                  <span className={styles.txt_keyword}>{tag}</span>
                ))}
              </span>
            </div>
            {imgPosition == 'bottom' && (
              <span className={styles.wrap_thumb}>
                <img
                  src={item.imgSrc}
                  className={styles.thumb_img}
                  draggable='false'
                />
              </span>
            )}
          </span>
        </Link>
        <button type='button' className={styles.btn_share}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            className={styles.ico_share}
          >
            <g fill='none' fill-rule='evenodd'>
              <g transform='translate(-350 -222) translate(24 192) translate(326 30) translate(10 2)'>
                <circle cx='2' cy='2' r='1' fill='#000'></circle>
                <circle cx='2' cy='10' r='1' fill='#000'></circle>
                <circle cx='2' cy='18' r='1' fill='#000'></circle>
              </g>
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Card;

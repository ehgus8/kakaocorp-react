import React, { useState } from 'react';
import styles from './NewsList.module.scss';
import { MiniCard } from '../../assets/components/Card';
import { Link } from 'react-router-dom';
import PressSlick from './PressSlick';

const ListItem = ({ item }) => {
  return (
    <Link
      to={`/detail/${item.id}`}
      className={`${styles.noLinkStyle} ${styles.link_news}`}
      onClick={() => window.scrollTo(0, 0)}
    >
      <div className={styles.wrap_txt}>
        <strong className={styles.txt_date}>{item.date}</strong>
        <strong className={styles.title_news}>{item.title}</strong>
        <div className={styles.wrap_hash}>
          {item.tags.map((tag) => `${tag}`)}
        </div>
      </div>
      <div className={styles.wrap_thumb}>
        <img src={item.imgSrc} className={styles.thumb_img} />
      </div>
    </Link>
  );
};

const RecommendationSection = ({ firstItem, secondItem }) => {
  return (
    <div>
      <MiniCard item={firstItem} />
      <MiniCard item={secondItem} />
    </div>
  );
};

const NewsList = ({ articleList }) => {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };
  const settings = {
    infinite: false,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
  };
  return (
    <div className={styles.cont_news}>
      <div className={styles.wrap_list}>
        <ul className={styles.list_news}>
          {articleList.slice(0, visibleCount).map((article) => (
            <li className={styles.item_news}>
              <ListItem item={article} />
            </li>
          ))}
        </ul>
        {visibleCount < articleList.length && (
          <button onClick={handleLoadMore} className={styles.btn_more}>
            더보기
          </button>
        )}
      </div>

      <div className={styles.wrap_menu}>
        <div className={styles.inner_menu}>
          <div className='cont_link'>
            <PressSlick
              styles={{ width: '297px', margin: '0 auto' }}
              // styles={{}}
              items={[
                <RecommendationSection
                  firstItem={articleList[0]}
                  secondItem={articleList[1]}
                />,
                <RecommendationSection
                  firstItem={articleList[2]}
                  secondItem={articleList[3]}
                />,
                <RecommendationSection
                  firstItem={articleList[4]}
                  secondItem={articleList[5]}
                />,
                <RecommendationSection
                  firstItem={articleList[6]}
                  secondItem={articleList[7]}
                />,
              ]}
              settings={settings}
            />
          </div>
          <div className='cont_tag'></div>
        </div>
      </div>
    </div>
  );
};

export default NewsList;

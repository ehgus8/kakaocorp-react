import React, { useState } from 'react';
import styles from './NewsList.module.scss';
import { MiniCard } from '../../assets/components/Card';

const ListItem = ({ articleItem }) => {
  return (
    <div className={styles.newsListSection}>
      <div className={styles.listContent}>
        <div className={styles.textSection}>
          <div className={styles.date}>{articleItem.date}</div>
          <div className={styles.title}>{articleItem.title}</div>
          <div className={styles.tags}></div>
        </div>
        <div className={styles.imageSection}>
          <img src={articleItem.imgSrc} />
        </div>
      </div>
      <div className={styles.tagSection}>
        {articleItem.tags.map((tag) => (
          <span>{tag}</span>
        ))}
      </div>
    </div>
  );
};

const RecommendationSection = () => {
  return <MiniCard />;
};

const NewsList = ({ articleList }) => {
  const [visibleCount, setVisibleCount] = useState(4);

  const [recommendIndices, setRecommendIndices] = useState({
    firstIndex: 0,
    secondIndex: 1,
  });

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.listContainer}>
        {articleList.slice(0, visibleCount).map((article) => (
          <ListItem articleItem={article} />
        ))}

        {visibleCount < articleList.length && (
          <div onClick={handleLoadMore}>더보기</div>
        )}
      </div>

      <div className={styles.recommendationSection}>
        <MiniCard articleItem={articleList[recommendIndices.firstIndex]} />
        <MiniCard articleItem={articleList[recommendIndices.secondIndex]} />
        <div>
          <div className={`${styles.btn} ${styles.barBtn}`}></div>
          <div className={`${styles.btn} ${styles.circleBtn}`}></div>
          <div className={`${styles.btn} ${styles.circleBtn}`}></div>
          <div className={`${styles.btn} ${styles.circleBtn}`}></div>
        </div>
      </div>
    </div>
  );
};

export default NewsList;

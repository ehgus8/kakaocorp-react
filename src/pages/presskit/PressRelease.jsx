// import { useEffect, useState } from 'react';
// import styles from './PressRelease.module.scss';
// function PressRelease() {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <div className={styles.mainContent}>
//       <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
//         <nav>내비게이션</nav>
//       </header>
//     </div>
//   );
// }

// export default PressRelease;

import React, { useEffect, useState } from 'react';
import styles from './PressRelease.module.scss';
import Carousel from './Carousel';
import './Carousel.css';
import Card from '../../assets/components/Card';
import InnerHeader from './InnerHeader';
import NewsList from './NewsList';
import dummyArticleList from '../../assets/dummy/dummyArticleList';

const cardList = [
  <Card item={dummyArticleList[0]} imgPosition='top' />,
  <Card item={dummyArticleList[1]} imgPosition='top' />,
  <Card item={dummyArticleList[2]} imgPosition='top' />,
  <Card item={dummyArticleList[3]} imgPosition='top' />,
];

const PressRelease = () => {
  return (
    <div className={styles.mainContent}>
      <InnerHeader />
      <Carousel items={cardList} visibleCount={3} />
      <NewsList articleList={dummyArticleList} />
    </div>
  );
};

export default PressRelease;

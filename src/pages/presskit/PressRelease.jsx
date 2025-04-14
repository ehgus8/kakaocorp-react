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

const dummyArticleList = [
  {
    id: 11517,
    title:
      '“하루 1만 명 오가던 골목상권에서 5천 명의 온라인 단골 만들다” 카카오-북촌 계동길 상인회장, 파리 OECD 회의에서 ‘프로젝트 단골’ 성과 발표',
    tags: ['#프로젝트단골', '#oecd', '#상생사례', '#디지털전환', '#소상공인'],
    date: '2025.04.11',
    category: '보도자료',
    imgSrc: '../../dummy/11517.webp',
    iconSrc: '../../dummy/loudspeaker.webp',
  },
  {
    id: 2,
    title: '카카오프렌즈, 양재천에서 벚꽃 시즌 오프라인 이벤트 진행',
    tags: ['#IP', '#라이언&춘식', '#카카오프렌즈', '#캐릭터'],
    date: '2025.04.09',
    category: '보도자료',
    imgSrc: '../../dummy/11516.webp',
    iconSrc: '../../dummy/loudspeaker.webp',
  },
  {
    id: 3,
    title: '카카오메이커스, 누적 거래액 1조 원 돌파',
    tags: ['#새가버치', '#에코씨드', '#임팩트커머스', '#제가버치'],
    date: '2025.04.08',
    category: '보도자료',
    imgSrc: '../../dummy/11515.webp',
    iconSrc: '../../dummy/loudspeaker.webp',
  },
  {
    id: 4,
    title:
      '소셜브랜드 ‘민들레마음’과 따뜻한 마음 전해 카카오톡 선물하기, 2년 연속 중증희귀난치질환 환아와 이벤트 진행',
    tags: ['#카카오톡 선물하기', '#만약약국', '#민들레마음'],
    date: '2025.03.28',
    category: '보도자료',
    imgSrc: '../../dummy/11512.webp',
    iconSrc: '../../dummy/loudspeaker.webp',
  },
  {
    id: 5,
    title:
      '카카오, 산불피해 복구 지원 모금액 50억 넘었다… 카카오도 10억 기부 동참',
    tags: ['#카카오같이가치', '#산불피해기부'],
    date: '2025.03.27',
    category: '보도자료',
    imgSrc: '../../dummy/11511.webp',
    iconSrc: '../../dummy/loudspeaker.webp',
  },
  {
    id: 6,
    title: '카카오, 제30기 정기주총 개최…함춘승 이사회 의장 선임',
    tags: ['#카카오톡 선물하기', '#만약약국', '#민들레마음'],
    date: '2025.03.26',
    category: '보도자료',
    imgSrc: '../../dummy/11510.webp',
    iconSrc: '../../dummy/loudspeaker.webp',
  },
  {
    id: 7,
    title:
      '카카오임팩트, 테크포임팩트 LAB 성과공유회서 7개 사회 혁신 기술 공개',
    tags: ['#카카오톡 선물하기', '#만약약국', '#민들레마음'],
    date: '2025.03.24',
    category: '보도자료',
    imgSrc: '../../dummy/11507.webp',
    iconSrc: '../../dummy/loudspeaker.webp',
  },
  {
    id: 8,
    title:
      '카카오, 포털 다음(Daum) 뉴스에 ‘지역’ 카테고리 49개 언론사 신규 입점',
    tags: ['#카카오톡 선물하기', '#만약약국', '#민들레마음'],
    date: '2025.03.24',
    category: '보도자료',
    imgSrc: '../../dummy/11508.webp',
    iconSrc: '../../dummy/loudspeaker.webp',
  },
  {
    id: 9,
    title: '카카오, 포털 다음(Daum) 스포츠 야구게임센터 개편',
    tags: ['#카카오톡 선물하기', '#만약약국', '#민들레마음'],
    date: '2025.03.21',
    category: '보도자료',
    imgSrc: '../../dummy/11506.webp',
    iconSrc: '../../dummy/loudspeaker.webp',
  },
  {
    id: 10,
    title: '카카오같이가치, BIG5 성격검사 리뉴얼 기념 이용자 참여 이벤트 진행',
    tags: ['#카카오톡 선물하기', '#만약약국', '#민들레마음'],
    date: '2025.03.20',
    category: '보도자료',
    imgSrc: '../../dummy/11505.webp',
    iconSrc: '../../dummy/loudspeaker.webp',
  },
  {
    id: 11,
    title: '카카오, 15주년 맞아 그룹 경영 워크숍 성료',
    tags: ['#카카오톡 선물하기', '#만약약국', '#민들레마음'],
    date: '2025.03.19',
    category: '보도자료',
    imgSrc: '../../dummy/11502.webp',
    iconSrc: '../../dummy/loudspeaker.webp',
  },
  {
    id: 12,
    title: "카카오, '2025 온라인 브랜드 소상공인 육성사업(TOPS)' 참여",
    tags: ['#카카오톡 선물하기', '#만약약국', '#민들레마음'],
    date: '2025.03.19',
    category: '보도자료',
    imgSrc: '../../dummy/11503.webp',
    iconSrc: '../../dummy/loudspeaker.webp',
  },
  {
    id: 13,
    title: '카카오프렌즈, 프리퀄 웹툰 ‘그래도, 라이언’ 공개',
    tags: ['#카카오톡 선물하기', '#만약약국', '#민들레마음'],
    date: '2025.03.18',
    category: '보도자료',
    imgSrc: '../../dummy/11501.webp',
    iconSrc: '../../dummy/loudspeaker.webp',
  },
];

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

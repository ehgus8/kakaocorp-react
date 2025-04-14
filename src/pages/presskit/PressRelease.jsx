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
    content: `- 카카오, 아시아 유일 민간 협력사로 ‘D4SME’ 정례 회의 참석… 소상공인 디지털 전환 지원 사례 소개
- 북촌 계동길 상인회장이 발표 참여해 현장 경험 전달, “골목상권의 디지털 전환 계기”`,
  },
  {
    id: 11516,
    title: '카카오프렌즈, 양재천에서 벚꽃 시즌 오프라인 이벤트 진행',
    tags: ['#IP', '#라이언&춘식', '#카카오프렌즈', '#캐릭터'],
    date: '2025.04.09',
    category: '보도자료',
    imgSrc: '../../dummy/11516.webp',
    iconSrc: '../../dummy/loudspeaker.webp',
    content: `- 라이언과 춘식이 캐릭터 활용한 벚꽃 맞이 이벤트 진행 …. 9일부터 약 한 달간 운영
- 초대형 라이언·춘식이 애드벌룬, 친환경 굿즈 패키지 등 다양한 볼거리 제공
- ‘라춘 복 배달 in 도산공원’ 에 이어 양재천으로 확대… 계절마다 새로운 공간에서 팬 접점 확대`,
  },
  {
    id: 11515,
    title: '카카오메이커스, 누적 거래액 1조 원 돌파',
    tags: [
      '#새가버치',
      '#에코씨드',
      '#임팩트커머스',
      '#제가버치',
      '#카카오메이커스',
    ],
    date: '2025.04.08',
    category: '보도자료',
    imgSrc: '../../dummy/11515.webp',
    iconSrc: '../../dummy/loudspeaker.webp',
    content: `- 2016년 첫선을 보인 지 9년 만에 누적 거래액 1조 원 달성… 가파른 속도로 거래액 증가
- 카카오메이커스 공동 주문에 303만 명 참여, 제가버치에서는 7천 톤의 농축수산물 거래
- 이용자들의 착한 소비 유도, 환경과 사회 전반에 긍정적 변화 주는 ‘임팩트 커머스’로 자리매김`,
  },
  {
    id: 11512,
    title:
      '소셜브랜드 ‘민들레마음’과 따뜻한 마음 전해 카카오톡 선물하기, 2년 연속 중증희귀난치질환 환아와 이벤트 진행',
    tags: [
      '#카카오톡 선물하기',
      '#만약약국',
      '#민들레마음',
      '#중증희귀난치질환 환아',
      '#만우절 이벤트',
    ],
    date: '2025.03.28',
    category: '보도자료',
    imgSrc: '../../dummy/11512.webp',
    iconSrc: '../../dummy/loudspeaker.webp',
    content: `- 선물하기, 매년 ‘착한 거짓말’을 주제로 따뜻한 마음 전해
- 선물하기에 ‘만약 약국’ 오픈.. 마음작가로 변신한 환아들의 ‘만약’ 처방전 공개
- 마음작가들의 그림으로 선물하기 홈 화면 단장하고, 선물하기 추천 선물 선봬

 `,
  },
  {
    id: 11511,
    title:
      '카카오, 산불피해 복구 지원 모금액 50억 넘었다… 카카오도 10억 기부 동참',
    tags: ['#카카오같이가치', '#산불피해기부'],
    date: '2025.03.27',
    category: '보도자료',
    imgSrc: '../../dummy/11511.webp',
    iconSrc: '../../dummy/loudspeaker.webp',
    content: `- 23일부터 카카오같이가치서 모금 진행, 이용자 120만 명 동참하며 50억 이상 모금액 조성
- 응원 댓글 1건마다 카카오가 1천 원 기부… 현재까지 5억 원 기부, 총 10억 기부 예정`,
  },
  {
    id: 11510,
    title: '카카오, 제30기 정기주총 개최…함춘승 이사회 의장 선임',
    tags: ['#카카오톡 선물하기', '#만약약국', '#민들레마음'],
    date: '2025.03.26',
    category: '보도자료',
    imgSrc: '../../dummy/11510.webp',
    iconSrc: '../../dummy/loudspeaker.webp',
    content: `- 신종환 CFO, 신규 사내이사 선임
- 김선욱 법무법인 세승 변호사, 사외이사 및 감사위원 신규 선임
[2025-03-26] 카카오가 제30기 정기 주주총회 후 열린 이사회에서 함춘승 피에이치앤컴퍼니 사장을 신규이사회 의장으로 선임했다.`,
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

import React, { useState } from 'react';
import styles from './SearchPage.module.scss';
import { useLocation } from 'react-router-dom';

const SearchPage = ({ onClose }) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('searchKeyword');

  const [inputValue, setInputValue] = useState(searchQuery || '');
  const handleChange = (e) => setInputValue(e.target.value);

  // 더미 데이터
  const dummyResults = [
    {
      id: 1,
      title: '보도자료',
      date: '2025.03.28',
      description:
        '소셜브랜드 ‘민들레마음’과 따뜻한 마음 전해 카카오톡 선물하기, 2년 연속...',
      imageUrl: '/img/image1.png',
      tag: '#카카오톡 선물하기 #만약약국 #민들레마음 #중증희귀난치질환 환아 #만우절 이벤트',
    },
    {
      id: 2,
      title: '보도자료',
      date: '2024.04.01',
      description:
        '카카오톡 선물하기, 중증희귀난치질환 환아와 함께하는 만우절 이벤트 진행',
      imageUrl: '/img/image2.png',
      tag: '#카카오커머스 #선물하기 #카카오톡선물하기 #만우절#이벤트',
    },
    {
      id: 3,
      title: '보도자료',
      date: '2023.03.21',
      description: '카카오톡 쇼핑하기, ‘상생브랜드 발굴 프로젝트 1탄’ 시작',
      imageUrl: '/img/image3.png',
      tag: '#상생브랜드#카카오커머스#카카오톡 쇼핑하기#커머스CIC',
    },
    {
      id: 4,
      title: '보도자료',
      date: '2021.04.19',
      description: '카카오커머스, ‘프렌즈 그린라이프’ 에디션 출시',
      imageUrl: '/img/image4.png',
      tag: '#친환경상품 #카카오커머스 #카카오프렌즈 #프렌즈그린라이프',
    },
    {
      id: 5,
      title: '보도자료',
      date: '2023.03.24',
      description:
        '카카오, 포털 다음(Daum) 뉴스에 ‘지역’ 카테고리 49개 언론사 신규 입점',
      imageUrl: '/img/image5.png',
      tag: '#콘텐츠CIC #다음뉴스 #포털 다음 #입점프로세스',
    },
  ];

  const [expandedId, setExpandedId] = useState(null);

  const toggleDetail = (id) => {
    setExpandedId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className={styles.wrapper}>
      {/* 상단 헤더 */}
      <div className={styles.header}>
        <span className={styles.title}>kakao</span>
        <button className={styles.closeButton} onClick={onClose}>
          ×
        </button>
      </div>

      {/* 검색창 및 결과 */}
      <div className={styles.searchContainer}>
        <input
          type='text'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className={styles.input}
        />
        <h2>검색 결과 입니다.</h2>
        <div className={styles.results}>
          {dummyResults.map((result) => (
            <div key={result.id} className={styles.resultItem}>
              <div className={styles.resultText}>
                <div className={styles.arrowWrapper}>
                  <img src='/img/icon.png' />
                  <p className={styles.resultTitle}>{result.title}</p>
                  <p>{result.date}</p>
                  <button
                    className={styles.toggleButton}
                    onClick={() => toggleDetail(result.id)}
                  >
                    {expandedId === result.id ? 'X' : ':'}
                  </button>
                  {expandedId === result.id && (
                    <div className={styles.iconGroup}>
                      <button className={styles.iconButton}>1</button>
                      <button className={styles.iconButton}>2</button>
                      <button className={styles.iconButton}>3</button>
                    </div>
                  )}
                </div>
                <h3 className={styles.resultDescription}>
                  {result.description}
                </h3>
              </div>

              <img src={result.imageUrl} className={styles.resultImage} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default SearchPage;

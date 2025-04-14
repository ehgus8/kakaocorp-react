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
      description:
        '소셜브랜드 ‘민들레마음’과 따뜻한 마음 전해 카카오톡 선물하기, 2년 연속...',
      imageUrl: './img/image1.png',
    },
    {
      id: 2,
      title: '보도자료',
      description:
        '카카오톡 선물하기, 중증희귀난치질환 환아와 함께하는 만우절 이벤트 진행',
      imageUrl: './img/image2.png',
    },
    {
      id: 3,
      title: '보도자료',
      description: '카카오톡 쇼핑하기, ‘상생브랜드 발굴 프로젝트 1탄’ 시작',
      imageUrl: './img/image3.png',
    },
  ];

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
                <p className={styles.resultTitle}>{result.title}</p>
                <h3 className={styles.resultDescription}>
                  {result.description}
                </h3>
              </div>
              <img
                src={result.imageUrl}
                // alt={result.title}
                className={styles.resultImage}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default SearchPage;

import React, { useEffect, useState } from 'react';
import styles from './SearchPage.module.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import SearchHeader from './SearchHeader';
import SearchInput from './SearchInput';
import SearchResultList from './SearchResultList';
import SearchModal from '../Modal/SearchModal';
import dummyArticleList from '../../assets/dummy/dummyArticleList';

// 더미 데이터
// const dummyResults = [
//   {
//     id: 11517,
//     category: '보도자료',
//     date: '2025.03.28',
//     title:
//       '소셜브랜드 ‘민들레마음’과 따뜻한 마음 전해 카카오톡 선물하기, 2년 연속...',
//     imgSrc: '/img/image1.png',
//     tags: [
//       '#카카오톡 선물하기',
//       '#만약약국',
//       '#민들레마음',
//       '#중증희귀난치질환 환아',
//       '#만우절 이벤트',
//     ],
//   },
//   {
//     id: 11515,
//     category: '보도자료',
//     date: '2024.04.01',
//     title:
//       '카카오톡 선물하기, 중증희귀난치질환 환아와 함께하는 만우절 이벤트 진행',
//     imgSrc: '/img/image2.png',
//     tags: [
//       '#카카오커머스',
//       '#선물하기',
//       '#카카오톡선물하기',
//       '#만우절',
//       '#이벤트',
//     ],
//   },
//   {
//     id: 11516,
//     category: '보도자료',
//     date: '2023.03.21',
//     title: '카카오톡 쇼핑하기, ‘상생브랜드 발굴 프로젝트 1탄’ 시작',
//     imgSrc: '/img/image3.png',
//     tags: ['#상생브랜드', '#카카오커머스', '#카카오톡 쇼핑하기', '#커머스CIC'],
//   },
//   {
//     id: 11510,
//     category: '보도자료',
//     date: '2021.04.19',
//     title: '카카오커머스, ‘프렌즈 그린라이프’ 에디션 출시',
//     imgSrc: '/img/image4.png',
//     tags: [
//       '#친환경상품',
//       '#카카오커머스',
//       '#카카오프렌즈',
//       '#프렌즈그린라이프',
//     ],
//   },
//   {
//     id: 11511,
//     category: '보도자료',
//     date: '2023.03.24',
//     title:
//       '카카오, 포털 다음(Daum) 뉴스에 ‘지역’ 카테고리 49개 언론사 신규 입점',
//     imgSrc: '/img/image5.png',
//     tags: ['#콘텐츠CIC', '#다음뉴스', '#포털 다음', '#입점프로세스'],
//   },
// ];

const SearchPage = ({ onClose }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [expandedId, setExpandedId] = useState(null);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const keyword = queryParams.get('searchKeyword') || '';
    setInputValue(keyword);
    setSearchValue(keyword);
  }, [location.search]);

  const submitHandler = (e) => {
    e.preventDefault();
    setSearchValue(inputValue);
    navigate(`/?searchKeyword=${encodeURIComponent(inputValue)}`);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setSearchValue(inputValue);
      navigate(`/?searchKeyword=${encodeURIComponent(inputValue)}`);
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <SearchHeader onClose={onClose} />
        </div>

        {/* <div className={styles.searchSection}> */}
        <SearchInput
          inputValue={inputValue}
          setInputValue={setInputValue}
          setSearchValue={setSearchValue}
          submitHandler={submitHandler}
          onKeyDown={handleKeyDown}
        />
        {/* </div> */}

        {searchValue && (
          <div className={styles.searchResults}>
            <SearchResultList
              results={dummyArticleList}
              searchValue={searchValue}
              expandedId={expandedId}
              setExpandedId={setExpandedId}
            />
          </div>
        )}
      </div>
    </div>
  );
};
export default SearchPage;

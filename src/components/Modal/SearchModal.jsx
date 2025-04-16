import React, { useEffect, useMemo, useState } from 'react';
import styles from './SearchModal.module.scss';
import { useNavigate } from 'react-router-dom';
import SearchHeader from '../Search/SearchHeader';
import SearchInput from '../Search/SearchInput';
import dummyArticleList from '../../assets/dummy/dummyArticleList';

const SearchModal = ({ onClose }) => {
  const [searchValue, setSearchValue] = useState('');
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate(); // 네비게이터 생성

  useEffect(() => {
    console.log('SearchModal loaded');
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      setSearchValue(inputValue);
      navigate(`/?searchKeyword=${encodeURIComponent(inputValue)}`);
      onClose(); // 모달 닫기
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (searchValue.trim()) {
      //navigate('/searchKeyword');
      navigate(`/?searchKeyword=${encodeURIComponent(searchValue.trim())}`); // 수정된 부분
      onClose(); // 모달 닫기
    }
  };

  const handleClose = () => {
    console.log('SearchModal close button clicked.');
    onClose(); // 모달을 닫는 함수 호출
  };

  const handleTagClick = (tag) => {
    const trimmedTag = tag.replace(/^#/, ''); // '#' 제거
    setSearchValue(trimmedTag);
    navigate(`/?searchKeyword=${encodeURIComponent(trimmedTag)}`);
    onClose(); // 모달 닫기
  };

  const randomTags = useMemo(() => {
    const allTags = dummyArticleList.flatMap((item) => item.tags); // 모든 태그 수집
    const uniqueTags = [...new Set(allTags)]; // 중복 제거
    const shuffled = uniqueTags.sort(() => 0.5 - Math.random()); // 셔플
    return shuffled.slice(0, 5); // 앞에서 5개 추출
  }, []);

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <SearchHeader onClose={handleClose} />
          <div className={styles.searchSection}>
            <SearchInput
              inputValue={inputValue}
              setInputValue={setInputValue}
              submitHandler={submitHandler}
              onKeyDown={handleKeyDown}
              onClose={onClose}
            />

            <div className={styles.tags}>
              {randomTags.map((tag, idx) => (
                <span
                  key={idx}
                  className={styles.tag}
                  onClick={() => handleTagClick(tag)}
                  style={{ cursor: 'pointer' }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;

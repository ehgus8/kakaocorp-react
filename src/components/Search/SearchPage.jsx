import React, { useEffect, useState } from 'react';
import styles from './SearchPage.module.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import SearchHeader from './SearchHeader';
import SearchInput from './SearchInput';
import SearchResultList from './SearchResultList';
import SearchModal from '../Modal/SearchModal';
import dummyArticleList from '../../assets/dummy/dummyArticleList';
import MainNav from '../../assets/components/MainNav';

const SearchPage = ({ onClose }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [expandedId, setExpandedId] = useState(null);

  //SearchHeader
  const [showMainHeader, setShowMainHeader] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowMainHeader(scrollY > 10); // 100px 이상 스크롤 시 전환
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      const pathname = location.pathname;
      const searchParams = new URLSearchParams(location.search);
      // navigate(`/?searchKeyword=${encodeURIComponent(inputValue)}`);
      searchParams.set('searchKeyword', inputValue);

      navigate(`${pathname}?${searchParams.toString()}`);
    }
  };

  useEffect(() => {
    const footer = document.querySelector('footer');
    if (footer) footer.style.display = 'none';

    return () => {
      // 컴포넌트 unmount 될 때 다시 보이게
      if (footer) footer.style.display = '';
    };
  }, []);

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          {showMainHeader ? (
            <div className={styles.mainNavWrapper}></div>
          ) : (
            <SearchHeader onClose={onClose} />
          )}
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

import React, { useState } from 'react';
import styles from './RootLayout.module.scss';
import MainNav from '../assets/components/MainNav';
import Footer from '../assets/components/Footer';
import { Outlet, useLocation } from 'react-router-dom';
import SearchModal from '../components/Modal/SearchModal';
import SearchPage from '../components/Search/SearchPage';

const RootLayout = () => {
  // 모달 공개 여부 상태 변수
  const [searchIsShown, setSearchIsShown] = useState(false);

  // 모달을 열고 닫아 주는 핸들러
  const showSearchHandler = () => setSearchIsShown(true);
  const hideSearchHandler = () => setSearchIsShown(false);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('searchKeyword');

  return (
    <div className={styles.layout}>
      {searchIsShown && <SearchModal onClose={hideSearchHandler} />}
      <header className={styles.header}>
        <div className={styles.container}>
          <MainNav onShow={showSearchHandler} />
        </div>
      </header>

      <main className={styles.main}>
        {/* 바뀌는 부분(동적 컴포넌트)이 들어갈 자리 */}
        {searchQuery ? <SearchPage /> : <Outlet />}
      </main>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <Footer />
        </div>
      </footer>
    </div>
  );
};

export default RootLayout;

import React, { useEffect, useState } from 'react';
import { Outlet, Link } from 'react-router-dom';

import styles from './RootLayout.module.scss';
import MainNav from '../assets/components/MainNav';

const RootLayout = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const excludedIds = ['mainMenu-99']; // 투자정보를 제외하기 위해서
  const isOpenGnb = openMenu && !excludedIds.includes(openMenu);

  return (
    <div className={styles.layout}>
      <header
        className={`${styles['doc-header']} ${isScrolled ? styles.scroll : ''} ${isOpenGnb ? styles.open_gnb : ''}`}
      >
        <div className={styles.inner_header}>
          <MainNav openMenu={openMenu} setOpenMenu={setOpenMenu} />
        </div>
      </header>

      <main className={styles.main}>
        {/* 바뀌는 부분(동적 컴포넌트)이 들어갈 자리 */}
        <Outlet />
      </main>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <section>
            <h2>하단 메뉴</h2>
            <div>
              <h2>오늘의 카카오</h2>
              <ul>
                <li>
                  <Link to={'#'}>카카오톡 공식 다운로드</Link>
                </li>
                <li>
                  <Link to={'#'} target='_blank'>
                    카카오톡백업
                  </Link>
                </li>
              </ul>
            </div>
          </section>

          <section></section>
        </div>
      </footer>
    </div>
  );
};

export default RootLayout;

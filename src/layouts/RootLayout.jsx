import React, { useEffect, useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

import styles from './RootLayout.module.scss';
import MainNav from '../assets/components/MainNav';

import footerData from '../assets/components/footerData';

import SearchModal from '../components/Modal/SearchModal';
import SearchPage from '../components/Search/SearchPage';

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

  // 모달 공개 여부 상태 변수
  const [searchIsShown, setSearchIsShown] = useState(false);

  // 모달을 열고 닫아 주는 핸들러
  const showSearchHandler = () => setSearchIsShown(true);
  const hideSearchHandler = () => setSearchIsShown(false);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('searchKeyword');

  const excludedIds = ['mainMenu-99']; // 투자정보를 제외하기 위해서
  const isOpenGnb = openMenu && !excludedIds.includes(openMenu);

  return (
    <div className={styles.layout}>
      {searchIsShown && <SearchModal onClose={hideSearchHandler} />}
      <header
        className={`${styles['doc-header']} ${isScrolled ? styles.scroll : ''} ${isOpenGnb ? styles.open_gnb : ''}`}
      >
        <div className={styles.inner_header}>
          <MainNav
            openMenu={openMenu}
            setOpenMenu={setOpenMenu}
            onShow={showSearchHandler}
          />
        </div>
      </header>

      <main className={styles.main}>
        {/* 바뀌는 부분(동적 컴포넌트)이 들어갈 자리 */}
        {searchQuery ? <SearchPage /> : <Outlet />}
      </main>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <section className={styles.container_inner}>
            {footerData.map((footer, idx) => {
              const hasTitle = !!footer.title;
              const hasSubTitle = !!footer.subTitle;

              return (
                <div
                  key={idx}
                  className={`${styles.wrap_service} ${
                    hasTitle ? styles.wrap_tags : styles.wrap_etc
                  }`}
                >
                  <div className={styles.inner_service}>
                    {hasTitle && <h3>{footer.title}</h3>}
                    {hasSubTitle && (
                      <strong className={styles.sub_title}>
                        {footer.subTitle}
                      </strong>
                    )}

                    <ul className={styles.list_service}>
                      {footer.items.map((item, i) => (
                        <li className={styles.item_service} key={i}>
                          <Link
                            to={item.link}
                            target={item.inOut ? '_self' : '_blank'}
                            className={styles.link_service}
                          >
                            {item.title}
                            {item.inOut ? (
                              item.down ? (
                                <svg
                                  xmlns='http://www.w3.org/2000/svg'
                                  fill='none'
                                  class='ico_footerlink'
                                  width='9'
                                  height='9'
                                  viewBox='0 0 9 9'
                                >
                                  <path
                                    d='M3 1L6 4.5L3 8'
                                    stroke='#888888'
                                  ></path>
                                </svg>
                              ) : (
                                ''
                              )
                            ) : (
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 9 9'
                                class='ico_outlink'
                                aria-hidden='true'
                              >
                                <g fill='none' fill-rule='evenodd'>
                                  <path
                                    d='M1.795 1.074L7.942 1.074 7.942 7.221M7.942 1.074L1.378 7.638'
                                    transform='translate(-935 -867) translate(836 848) translate(14 14) translate(85 5)'
                                  ></path>
                                </g>
                              </svg>
                            )}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </section>

          <section></section>
        </div>
      </footer>
    </div>
  );
};

export default RootLayout;

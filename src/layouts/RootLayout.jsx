import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

import styles from './RootLayout.module.scss';
import MainNav from '../assets/components/MainNav';

import footerData from '../assets/components/footerData';
import footerGroupData from '../assets/components/footerGroupData';
import SearchModal from '../components/Modal/SearchModal';
import SearchPage from '../components/Search/SearchPage';

const RootLayout = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);

  const [isOpen, setIsOpen] = useState(false);

  const [openFooterIdx, setOpenFooterIdx] = useState(null);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

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
  const showSearchHandler = () => {
    setSearchIsShown(true);
    document.body.style.paddingTop = '20%';
  };
  const hideSearchHandler = () => {
    setSearchIsShown(false);
    document.body.style.paddingTop = '0';
  };

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
                                  className={styles.ico_footerlink}
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
                                width='9'
                                height='9'
                                viewBox='0 0 9 9'
                                className={styles.ico_outlink}
                                aria-hidden='true'
                              >
                                <g fill='none'>
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

          <section className={styles.section_relation}>
            <div className={styles.group_info}>
              {footerGroupData.map((footer, idx) => {
                const isOpen = openFooterIdx === idx;
                const hasItems = !!footer.items;

                return (
                  <div
                    key={idx}
                    className={`${styles.wrap_info} ${isOpen ? styles.open_info : ''}`}
                  >
                    {hasItems ? (
                      <>
                        <strong
                          className={styles.link_info}
                          onClick={
                            () => setOpenFooterIdx(isOpen ? null : idx) // 토글 방식
                          }
                        >
                          {footer.title}
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 9 9'
                            className={styles.ico_arrow}
                          >
                            <path
                              d='M8 3L4.5 6 1 3'
                              stroke='currentColor'
                              strokeWidth='1'
                              fill='none'
                            />
                          </svg>
                        </strong>
                        <ul className={styles.list_subinfo}>
                          {footer.items.map((item, i) => (
                            <li key={i}>
                              <Link
                                to={item.link}
                                target={item.inOut ? '_self' : '_blank'}
                              >
                                <span>{item.title}</span>
                                {!item.inOut && (
                                  <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='9'
                                    height='9'
                                    viewBox='0 0 9 9'
                                    aria-hidden='true'
                                  >
                                    <g fill='none'>
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
                      </>
                    ) : (
                      <Link to={footer.link} className={styles.single_link}>
                        {footer.title}
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>

            <div
              className={`${styles.wrap_relation} ${isOpen ? styles.info_open : ''}`}
            >
              <strong className={styles.tit_relation} onClick={handleToggle}>
                관련사이트
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 14 14'
                  width='14'
                  height='14'
                  className={styles.ico_plus}
                >
                  <line
                    x1='7'
                    y1='0'
                    x2='7'
                    y2='14'
                    stroke='currentColor'
                    strokeWidth='1'
                  />
                  <line
                    x1='0'
                    y1='7'
                    x2='14'
                    y2='7'
                    stroke='currentColor'
                    strokeWidth='1'
                  />
                </svg>
              </strong>
              <ul className={styles.list_subinfo}>
                <li>
                  <Link to={'https://privacy.kakao.com/main?lang=ko'}>
                    <span>카카오 프라이버시</span>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 9 9'
                      className={styles.ico_outlink}
                    >
                      <g fill='none'>
                        <path
                          d='M1.795 1.074L7.942 1.074 7.942 7.221M7.942 1.074L1.378 7.638'
                          transform='translate(-935 -867) translate(836 848) translate(14 14) translate(85 5)'
                        ></path>
                      </g>
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link to={'https://developers.kakao.com/'}>
                    <span>카카오 디벨로퍼스</span>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 9 9'
                      className={styles.ico_outlink}
                    >
                      <g fill='none'>
                        <path
                          d='M1.795 1.074L7.942 1.074 7.942 7.221M7.942 1.074L1.378 7.638'
                          transform='translate(-935 -867) translate(836 848) translate(14 14) translate(85 5)'
                        ></path>
                      </g>
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link to={'https://www.daum.net/'}>
                    <span>다음 포털 사이트</span>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 9 9'
                      className={styles.ico_outlink}
                    >
                      <g fill='none'>
                        <path
                          d='M1.795 1.074L7.942 1.074 7.942 7.221M7.942 1.074L1.378 7.638'
                          transform='translate(-935 -867) translate(836 848) translate(14 14) translate(85 5)'
                        ></path>
                      </g>
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link to={'https://winwin.kakao.com/index'}>
                    <span>동반 성장 사이트</span>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 9 9'
                      className={styles.ico_outlink}
                    >
                      <g fill='none'>
                        <path
                          d='M1.795 1.074L7.942 1.074 7.942 7.221M7.942 1.074L1.378 7.638'
                          transform='translate(-935 -867) translate(836 848) translate(14 14) translate(85 5)'
                        ></path>
                      </g>
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link to={'https://jeju.kakao.com/'}>
                    <span>제주 with kakao</span>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 9 9'
                      className={styles.ico_outlink}
                    >
                      <g fill='none'>
                        <path
                          d='M1.795 1.074L7.942 1.074 7.942 7.221M7.942 1.074L1.378 7.638'
                          transform='translate(-935 -867) translate(836 848) translate(14 14) translate(85 5)'
                        ></path>
                      </g>
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>

            <div className={styles.txt_copyright}>
              ©{' '}
              <Link to={'https://www.kakaocorp.com/page'} target='_blank'>
                Kakao Corp.
              </Link>{' '}
              All rights reserved.
            </div>
          </section>
        </div>
      </footer>
    </div>
  );
};

export default RootLayout;

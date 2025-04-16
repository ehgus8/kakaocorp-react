import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './MainServiceAndNews.module.scss';
import Card, { MiniCard } from '../../assets/components/Card';
import dummyArticleList from '../../assets/dummy/dummyArticleList';
import SearchResultItemCustom from './SearchResultItemCustom';

export const AreaService = () => {
  return (
    <div className={styles.cont_main}>
      <h3 className={`${styles.title_cont} ${styles.title_service}`}>
        더 나은 세상을 만드는 카카오 서비스
      </h3>
      <div className={`${styles.inner_main} ${styles.inner_service}`}>
        <ul className={styles.list_service}>
          <li className={styles.box_service}>
            <strong className={styles.cate_service}>커뮤니케이션</strong>
            <div className={styles.items_service}>
              <Link
                to='#'
                className={styles.link_service}
                style={{
                  backgroundImage:
                    'url("https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/kakaoService/cc08d9e2018e00001.png")',
                }}
              ></Link>
              <Link
                to='#'
                className={styles.link_service}
                style={{
                  backgroundImage:
                    'url("https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/kakaoService/2666427d019500001.png")',
                }}
              ></Link>
              <Link
                to='#'
                className={styles.link_service}
                style={{
                  backgroundImage:
                    'url("https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/kakaoService/c942653a018c00001.png")',
                }}
              ></Link>
              <Link
                to='#'
                className={styles.link_service}
                style={{
                  backgroundImage: `url('/dummy/plus.svg')`,
                }}
              ></Link>
            </div>
          </li>
          {/* 아래 li도 동일하게 반복 */}
          <li className={styles.box_service}>
            <strong className={styles.cate_service}>비즈니스</strong>
            <div className={styles.items_service}>
              <Link
                to='#'
                className={styles.link_service}
                style={{
                  backgroundImage:
                    'url("https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/kakaoService/c9468d8a018c00001.png")',
                }}
              ></Link>
              <Link
                to='#'
                className={styles.link_service}
                style={{
                  backgroundImage:
                    'url("https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/kakaoService/c9469d4a018c00001.png")',
                }}
              ></Link>
              <Link
                to='#'
                className={styles.link_service}
                style={{
                  backgroundImage:
                    'url("https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/kakaoService/c946aa55018c00001.png")',
                }}
              ></Link>
              <Link
                to='#'
                className={styles.link_service}
                style={{
                  backgroundImage: `url('/dummy/plus.svg')`,
                }}
              ></Link>
            </div>
          </li>
          <li className={styles.box_service}>
            <strong className={styles.cate_service}>일상편의</strong>
            <div className={styles.items_service}>
              <Link
                to='#'
                className={styles.link_service}
                style={{
                  backgroundImage:
                    'url("https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/kakaoService/c947f606018c00001.png")',
                }}
              ></Link>
              <Link
                to='#'
                className={styles.link_service}
                style={{
                  backgroundImage:
                    'url("https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/kakaoService/c94804d8018c00001.png")',
                }}
              ></Link>
              <Link
                to='#'
                className={styles.link_service}
                style={{
                  backgroundImage:
                    'url("https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/kakaoService/c9481249018c00001.png")',
                }}
              ></Link>
              <Link
                to='#'
                className={styles.link_service}
                style={{
                  backgroundImage: `url('/dummy/plus.svg')`,
                }}
              ></Link>
            </div>
          </li>
          <li className={styles.box_service}>
            <strong className={styles.cate_service}>쇼핑</strong>
            <div className={styles.items_service}>
              <Link
                to='#'
                className={styles.link_service}
                style={{
                  backgroundImage:
                    'url("https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/kakaoService/c94a2627018c00001.png")',
                }}
              ></Link>
              <Link
                to='#'
                className={styles.link_service}
                style={{
                  backgroundImage:
                    'url("https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/kakaoService/cd650bd2019300001.png")',
                }}
              ></Link>
              <Link
                to='#'
                className={styles.link_service}
                style={{
                  backgroundImage:
                    'url("https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/kakaoService/c94a96f9018c00001.png")',
                }}
              ></Link>
              <Link
                to='#'
                className={styles.link_service}
                style={{
                  backgroundImage: `url('/dummy/plus.svg')`,
                }}
              ></Link>
            </div>
          </li>
          <li className={styles.box_service}>
            <strong className={styles.cate_service}>엔터테인먼트</strong>
            <div className={styles.items_service}>
              <Link
                to='#'
                className={styles.link_service}
                style={{
                  backgroundImage:
                    'url("https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/kakaoService/c94b668f018c00001.png")',
                }}
              ></Link>
              <Link
                to='#'
                className={styles.link_service}
                style={{
                  backgroundImage:
                    'url("https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/kakaoService/c94b7687018c00001.png")',
                }}
              ></Link>
              <Link
                to='#'
                className={styles.link_service}
                style={{
                  backgroundImage:
                    'url("https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/kakaoService/c94b83e3018c00001.png")',
                }}
              ></Link>
              <Link
                to='#'
                className={styles.link_service}
                style={{
                  backgroundImage: `url('/dummy/plus.svg')`,
                }}
              ></Link>
            </div>
          </li>
          <li className={styles.box_service}>
            <strong className={styles.cate_service}>소셜임팩트</strong>
            <div className={styles.items_service}>
              <Link
                to='#'
                className={styles.link_service}
                style={{
                  backgroundImage:
                    'url("https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/kakaoService/c94c09cc018c00001.png")',
                }}
              ></Link>
              <Link
                to='#'
                className={styles.link_service}
                style={{
                  backgroundImage: `url('/dummy/plus.svg')`,
                }}
              ></Link>
            </div>
          </li>
        </ul>
        <div className={styles.wrap_btn}>
          <Link className={styles.link_common}>
            서비스 전체보기
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className={styles.btn_arr}
            >
              <circle cx='12' cy='12' r='12' fill='black' />
              <path
                d='M7 12H16M16 12L12.5 8.5M16 12L12.5 15.5'
                stroke='white'
                stroke-width='1.5'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export const AreaNews = () => {
  const [expandedId, setExpandedId] = useState(null);
  return (
    <div className={`${styles.cont_main} ${styles.area_news}`}>
      <h3
        className={`${styles.title_cont} ${styles.type_news} ${styles.tit_news15}`}
      >
        오늘의 뉴스
      </h3>
      <div className={`${styles.inner_main} ${styles.inner_news}`}>
        <div className={styles.wrap_top}>
          <ul className={styles.card_list}>
            <li>
              <SearchResultItemCustom
                key={dummyArticleList[0].id}
                result={dummyArticleList[0]}
                expanded={expandedId === dummyArticleList[0].id}
                toggle={() =>
                  setExpandedId(
                    expandedId === dummyArticleList[0].id
                      ? null
                      : dummyArticleList[0].id,
                  )
                }
              />
            </li>
            <li>
              <SearchResultItemCustom
                key={dummyArticleList[1].id}
                result={dummyArticleList[1]}
                expanded={expandedId === dummyArticleList[1].id}
                toggle={() =>
                  setExpandedId(
                    expandedId === dummyArticleList[1].id
                      ? null
                      : dummyArticleList[1].id,
                  )
                }
              />
            </li>
            <li>
              <SearchResultItemCustom
                key={dummyArticleList[2].id}
                result={dummyArticleList[2]}
                expanded={expandedId === dummyArticleList[2].id}
                toggle={() =>
                  setExpandedId(
                    expandedId === dummyArticleList[2].id
                      ? null
                      : dummyArticleList[2].id,
                  )
                }
              />
            </li>
          </ul>
        </div>
        <div className={styles.wrap_bottom}>
          <div className={styles.wrap_slides}>
            <ul>
              <li>
                <MiniCard item={dummyArticleList[0]} />
              </li>
              <li>
                <MiniCard item={dummyArticleList[1]} />
              </li>
            </ul>
          </div>
          <div className={styles.wrap_links}>
            <Link
              to='/presskit'
              className={styles.link_news}
              onClick={() => window.scrollTo(0, 0)}
            >
              <strong className={styles.title_link}>보도자료</strong>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className={styles.btn_arr}
              >
                <circle cx='12' cy='12' r='12' fill='black' />
                <path
                  d='M7 12H16M16 12L12.5 8.5M16 12L12.5 15.5'
                  stroke='white'
                  stroke-width='1.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
            </Link>
            <Link className={styles.link_news}>
              <strong className={styles.title_link}>미디어자료</strong>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className={styles.btn_arr}
              >
                <circle cx='12' cy='12' r='12' fill='black' />
                <path
                  d='M7 12H16M16 12L12.5 8.5M16 12L12.5 15.5'
                  stroke='white'
                  stroke-width='1.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

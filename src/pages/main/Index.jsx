import React, { useState } from 'react';
import styles from './Index.module.scss';

import mainData from '../../components/Main/mainData.js';
import { Link } from 'react-router-dom';

const Index = () => {
  const [animate, setAnimate] = useState(true); // 실제 애니메이션 작동 여부
  const [isManualPause, setIsManualPause] = useState(false); // 버튼으로 멈췄는지 여부

  const onStop = () => {
    if (!isManualPause) setAnimate(false);
  };

  const onRun = () => {
    if (!isManualPause) setAnimate(true);
  };

  const onToggle = () => {
    if (animate) {
      setAnimate(false);
      setIsManualPause(true);
    } else {
      setAnimate(true);
      setIsManualPause(false);
    }
  };

  return (
    <>
      <section id='mainContent' className={styles['inner-main']}>
        <article className={`${styles['content-article']} ${styles.wrap_home}`}>
          <div className={styles.cont_home}>
            {/* 메인페이지 동영상 영역 */}
            <div className={`${styles.cont_main} ${styles.area_banner}`}></div>

            {/* 슬라이드 */}
            <div className={`${styles.cont_main} ${styles.area_story}`}>
              <h3
                id='titleStory'
                className={`${styles.title_cont} ${styles.type_story}`}
              >
                <span>카카오와 카카오 그룹이 축적해 온 이야기들</span>
                <div className={styles.wrap_top}>
                  <button
                    className={`${styles.btn_story} ${animate ? styles.type_pause : styles.type_play}`}
                    onClick={onToggle}
                  >
                    <span>{animate ? '슬라이드 멈춤' : '슬라이드 재생'}</span>
                  </button>
                </div>
              </h3>
              <div className={`${styles.inner_main} ${styles.inner_story}`}>
                <ul
                  className={styles.list_story}
                  onMouseEnter={onStop}
                  onMouseLeave={onRun}
                >
                  {[styles.original, styles.clone].map((slideClass, idx) => (
                    <div
                      key={idx}
                      className={`${styles.slide} ${slideClass} ${!animate ? styles.stop : ''}`}
                      inert
                    >
                      {mainData.map((story, i) => (
                        <li
                          key={i}
                          className={`${styles.item_story} ${
                            i === 0
                              ? styles.type_wide
                              : i === 4
                                ? styles.type_row
                                : styles.type_normal
                          }`}
                        >
                          <div
                            className={`${styles.item_card_new} ${
                              i === 0 || i === 4
                                ? styles.item_row_card
                                : i === 2 || i === 6
                                  ? styles.item_normal_card
                                  : styles.item_bottom_card
                            } ${i === 0 ? styles.type_flow_wide : styles.type_flow}`}
                          >
                            <Link to={story.id}>
                              <div className={styles.wrap_text}>
                                <span className={styles.info_cate}>
                                  <img
                                    src={story.iconSrc}
                                    alt={story.category}
                                    className={styles.ico_cate}
                                  />
                                  <span className={styles.txt_cate}>
                                    {story.category}
                                  </span>
                                </span>
                                <strong className={styles.tit_card}>
                                  {story.title}
                                </strong>

                                {(i === 0 || i === 4) && (
                                  <p className={styles.desc_card}>
                                    {story.content}
                                  </p>
                                )}

                                <span className={styles.info_card}>
                                  {story.tags.map((tag, tagIdx) => (
                                    <span
                                      key={tagIdx}
                                      className={styles.txt_keyword}
                                    >
                                      {tag}
                                    </span>
                                  ))}
                                </span>
                              </div>
                              <div className={styles.wrap_thumb}>
                                <img src={story.imgSrc} alt={story.category} />
                              </div>
                            </Link>
                          </div>
                        </li>
                      ))}
                    </div>
                  ))}
                </ul>
              </div>
            </div>

            {/* 서비스 */}
            <div className={`${styles.cont_main} ${styles.area_service}`}></div>

            {/* 뉴스 */}
            <div className={`${styles.cont_main} ${styles.area_news}`}></div>

            {/* 약속과 책임 */}
            <div
              className={`${styles.cont_main} ${styles.area_responsible}`}
            ></div>

            {/* 헬퍼 */}
            <div className={`${styles.cont_main} ${styles.area_help}`}></div>
          </div>
        </article>
      </section>
    </>
  );
};

export default Index;

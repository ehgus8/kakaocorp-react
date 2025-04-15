import React from 'react';
import styles from './Index.module.scss';

const Index = () => {
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
                  <button className={styles.screen_out}>슬라이드 멈추기</button>
                </div>
              </h3>
              <div className={`${styles.inner_main} ${styles.inner_story}`}>
                <ul className={styles.list_story}></ul>
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

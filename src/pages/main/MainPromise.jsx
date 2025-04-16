import React from 'react';
import styles from './MainPromise.module.scss';

const MainTest = () => {
  return (
    <section className={styles.promiseSection}>
      <div className={styles.sectionTitleWrap}>
        <img
          src='/img/ico_tit_esg.gif'
          alt='하트 아이콘'
          className={styles.heartIcon}
        />
        <h2 className={styles.sectionTitle}>약속과 책임</h2>
      </div>

      <div className={styles.cardContainer}>
        {/* 카드 1 */}
        <div className={styles.promiseCard}>
          <span className={`${styles.cardLabel} `}>
            <div className={`${styles.cardLabelText} ${styles.labelBlue}`}>
              esg
            </div>
          </span>
          <img
            src='/img/mainesg.gif'
            alt='ESG illustration'
            className={styles.cardImage}
          />
          <p className={styles.cardText}>
            모두의 지속가능한 미래를 위한
            <br />
            카카오의 약속과 책임
          </p>
          <div className={styles.buttonArea}>
            <span className={styles.arrowButton}>
              <div className={styles.buttonBox}>→</div>
            </span>
          </div>
        </div>

        {/* 카드 2 */}
        <div className={styles.promiseCard}>
          <span className={styles.cardLabel}>
            <div className={`${styles.cardLabelText} ${styles.labelGreen}`}>
              액티브그린
            </div>
          </span>

          <img
            src='/img/maingreen.gif'
            alt='Active green illustration'
            className={styles.cardImage}
          />
          <p className={styles.cardText}>
            카카오를 이용하는 만큼 우리들의
            <br />
            지구도 더 풍요로울 수 있도록
          </p>
          <div className={styles.buttonArea}>
            <span className={styles.arrowButton}>
              <div className={styles.buttonBox}>→</div>
            </span>
          </div>
        </div>

        {/* 카드 3 */}
        <div className={styles.promiseCard}>
          <span className={styles.cardLabel}>
            <div className={`${styles.cardLabelText} ${styles.labelYellow}`}>
              정책매거진
            </div>
          </span>
          <img
            src='/img/mainpolicy.gif'
            alt='Policy magazine illustration'
            className={styles.cardImage}
          />
          <p className={styles.cardText}>
            기술과 사람이 함께 만드는 건강한
            <br />
            디지털 문화를 고민합니다
          </p>
          <div className={styles.buttonArea}>
            <span className={styles.arrowButton}>
              <div className={styles.buttonBox}>→</div>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainTest;

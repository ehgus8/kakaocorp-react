import React from 'react';
import styles from './MainHelp.module.scss';

const MainHelp = () => {
  return (
    <>
      <div className={styles.title}>
        <img src='/mainHelp/ico_tit_help.gif' className={styles.titleImg} />
        <h2>무엇을 도와드릴까요?</h2>
      </div>
      {/* 전체 컨테이너 */}
      <div>
        {/* 카드 3개 */}
        <div className={styles.cardContainer}>
          {/* 카드 1 */}
          <div className={`${styles.card} ${styles.cardType1}`}>
            <div className={styles.helpCardContainer}>
              <div
                className={styles.helpCard}
                onClick={() => window.open('https://cs.kakao.com/', '_blank')}
              >
                <div className={styles.textBox}>
                  <p>카카오 고객센터</p>

                  <span className={styles.linkText}>
                    바로가기
                    <div className={styles.arrowWrapper}>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='40'
                        height='40'
                        viewBox='0 0 24 24'
                        fill='none'
                        className={styles.svgIcon}
                      >
                        <circle
                          cx='12'
                          cy='12'
                          r='12'
                          fill='black'
                          stroke='none'
                        />
                        <path
                          // transform='0 -10'
                          d='M9 15L15 9M15 9H10M15 9V14'
                          stroke='white'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                    </div>
                  </span>
                </div>
                <div className={styles.imageWrapper}>
                  <img
                    src='/mainHelp/kakaoHelp.webp'
                    className={styles.helpImg}
                  />
                </div>
              </div>

              <div
                className={styles.helpCard}
                onClick={() => window.open('https://cs.daum.net/', '_blank')}
              >
                <div className={styles.textBox}>
                  <p>다음 고객센터</p>

                  <span className={styles.linkText}>
                    바로가기
                    <div className={styles.arrowWrapper}>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='40'
                        height='40'
                        viewBox='0 0 24 24'
                        fill='none'
                        className={styles.svgIcon}
                      >
                        <circle
                          cx='12'
                          cy='12'
                          r='12'
                          fill='black'
                          stroke='none'
                        />
                        <path
                          d='M9 15L15 9M15 9H10M15 9V14'
                          stroke='white'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                    </div>
                  </span>
                </div>
                <div className={styles.imageWrapper}>
                  <img
                    src='/mainHelp/daumHelp.webp'
                    className={styles.helpImg}
                  />
                </div>
              </div>

              <div
                className={styles.helpCard}
                onClick={() => window.open('https://ccs.kakao.com/', '_blank')}
              >
                <div className={styles.textBox}>
                  <p>커머스 고객센터</p>
                  <div className={styles.imgSec}></div>
                  <span className={styles.linkText}>
                    바로가기
                    <div className={styles.arrowWrapper}>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='40'
                        height='40'
                        viewBox='0 0 24 24'
                        fill='none'
                        className={styles.svgIcon}
                      >
                        <circle
                          cx='12'
                          cy='12'
                          r='12'
                          fill='black'
                          stroke='none'
                        />
                        <path
                          // transform='0 -10'
                          d='M9 15L15 9M15 9H10M15 9V14'
                          stroke='white'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                    </div>
                  </span>
                </div>
                <div className={styles.imageWrapper}>
                  <img
                    src='/mainHelp/commerceHelp.webp'
                    className={styles.helpImg}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 카드 2 */}
          <div className={`${styles.card} ${styles.cardType2}`}>
            <div className={styles.cardContent}>
              <div className={styles.txtSection}>
                <div className={`${styles.textBox} ${styles.cardText1}`}>
                  <strong>
                    카카오의 다양한 소식을 <br /> 구독하세요!
                  </strong>
                </div>

                <p className={styles.subTextBox}>공식 소셜 미디어 바로가기</p>

                <div className={styles.buttonList}>
                  <button
                    className={styles.button}
                    onClick={() =>
                      window.open('https://pf.kakao.com/_ZRQBh', '_blank')
                    }
                  >
                    <img
                      src='/mainHelp/icon_ch.png'
                      className={styles.buttonIcon}
                    />
                  </button>
                  <button
                    className={styles.button}
                    onClick={() =>
                      window.open(
                        'https://www.youtube.com/@Kakaobrandmedia',
                        '_blank',
                      )
                    }
                  >
                    <img
                      src='/mainHelp/icon_yt.png'
                      className={styles.buttonIcon}
                    />
                  </button>
                  <button
                    className={styles.button}
                    onClick={() =>
                      window.open(
                        'https://www.instagram.com/kakao.today',
                        '_blank',
                      )
                    }
                  >
                    <img
                      src='/mainHelp/icon_insta.png'
                      className={styles.buttonIcon}
                    />
                  </button>
                  <button
                    className={styles.button}
                    onClick={() =>
                      window.open(
                        'https://www.facebook.com/kakao.brandmedia',
                        '_blank',
                      )
                    }
                  >
                    <img
                      src='/mainHelp/icon_fb.png'
                      className={styles.buttonIcon}
                    />
                  </button>
                  <button
                    className={styles.button}
                    onClick={() =>
                      window.open(
                        'https://www.linkedin.com/company/kakaocorp',
                        '_blank',
                      )
                    }
                  >
                    <img
                      src='/mainHelp/icon_li.png'
                      className={styles.buttonIcon}
                    />
                  </button>
                </div>
              </div>
              <div className={`${styles.imageSection} ${styles.card2Image}`}>
                <img src='/mainHelp/img_ryan.png' />
              </div>
            </div>
          </div>

          {/* 카드 3 */}
          <div className={`${styles.card} ${styles.cardType3}`}>
            <div className={styles.cardContent}>
              <div className={styles.txtSection}>
                <div className={`${styles.textBox} ${styles.cardText2}`}>
                  <strong>
                    세상만사에 관심이 많다면, <br /> 당신은 이미 카카오 크루
                  </strong>
                </div>
                <div
                  className={styles.subTextBox}
                  onClick={() =>
                    window.open('https://careers.kakao.com/index', '_blank')
                  }
                >
                  <p className={styles.cardText2}>
                    영입소식
                    <div className={styles.whiteArrowWrapper}>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='40'
                        height='40'
                        viewBox='0 0 24 24'
                        fill='none'
                        className={styles.svgIcon}
                      >
                        <circle
                          cx='12'
                          cy='12'
                          r='12'
                          fill='white'
                          stroke='none'
                        />
                        <path
                          d='M9 15L15 9M15 9H10M15 9V14'
                          stroke='black'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                    </div>
                  </p>
                </div>
              </div>
              <div className={styles.imageSection}>
                <img src='/mainHelp/img_recruit.png' />
              </div>
            </div>
          </div>
        </div>

        {/* 두 카드 섹션 */}
        <div className={styles.twoCardContainer}>
          <div
            className={styles.twoCardContent}
            onClick={() =>
              window.open('https://www.kakaocorp.com/ir/main', '_blank')
            }
          >
            <div className={styles.twoTextBox}>
              <div className={styles.twoText1}>
                <p>투자정보</p>
              </div>

              <span className={styles.linkText}>
                바로가기
                <div className={styles.arrowWrapper}>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='40'
                    height='40'
                    viewBox='0 0 24 24'
                    fill='none'
                    className={styles.svgIcon}
                  >
                    <circle cx='12' cy='12' r='12' fill='black' stroke='none' />
                    <path
                      d='M9 15L15 9M15 9H10M15 9V14'
                      stroke='white'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </div>
              </span>
            </div>
            <div className={styles.imageWrapper}>
              <img src='/mainHelp/img.webp' className={styles.titleImg} />
            </div>
          </div>

          <div
            className={styles.twoCardContent}
            onClick={() =>
              window.open('https://privacy.kakao.com/main', '_blank')
            }
          >
            <div className={styles.twoTextBox}>
              <p className={styles.twoText1}>
                데이터의 연결과 보호의 균형을 위한 <br /> 카카오의 노력
              </p>
            </div>
            <div className={styles.twoText2}>
              <span>
                바로가기
                <div className={styles.arrowWrapper}>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='40'
                    height='40'
                    viewBox='0 0 24 24'
                    fill='none'
                    className={styles.svgIcon}
                  >
                    <circle cx='12' cy='12' r='12' fill='black' stroke='none' />
                    <path
                      d='M9 15L15 9M15 9H10M15 9V14'
                      stroke='white'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </div>
              </span>
            </div>
            <div className={styles.imageWrapper}>
              <img src='/mainHelp/img2.webp' className={styles.titleImg} />
            </div>
          </div>
        </div>

        {/* 하단 카드 */}
        <div className={styles.bottomCardWrapper}>
          <div
            className={styles.bottomCard}
            onClick={() =>
              window.open('https://www.kakaocorp.com/page/collection', '_blank')
            }
          >
            <div className={styles.contentRow}>
              <p>카카오 소식 모아보기</p>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='40'
                height='40'
                viewBox='0 0 24 24'
                fill='none'
                className={styles.svgIcon}
              >
                <circle cx='12' cy='12' r='12' fill='black' stroke='none' />
                <path
                  d='M9 12H15M15 12L11 8M15 12L11 16'
                  stroke='white'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      {/* 전체 컨테이너 끝 */}
    </>
  );
};

export default MainHelp;

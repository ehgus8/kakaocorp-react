import React, { useState } from 'react';
import styles from './Index.module.scss';
import MainHelp from './MainHelp';
import { AreaNews, AreaService } from './MainServiceAndNews';
import MainTest from './MainPromise';

import mainData from '../../components/Main/mainData.js';
import { Link } from 'react-router-dom';
import Slick from '../../assets/components/Slick.jsx';
import AnimateNumber from './AnimateNumber.jsx';
import Slider from 'react-slick';

const Index = () => {
  // 상태를 설정하는 부분
  const [animate, setAnimate] = useState(true); // 애니메이션의 실행 여부를 관리하는 상태. 기본값은 true (애니메이션 시작).
  const [isManualPause, setIsManualPause] = useState(false); // 애니메이션이 수동으로 일시 정지되었는지를 관리하는 상태.
  const [animateKey, setAnimateKey] = useState(Date.now()); // AnimateNumber 컴포넌트의 key값. 값이 변경되면 해당 컴포넌트가 재실행되도록 유도.

  // 애니메이션을 멈추는 함수
  const onStop = () => {
    // 수동으로 일시 정지된 상태가 아니라면 애니메이션을 멈춤
    if (!isManualPause) setAnimate(false);
  };

  // 애니메이션을 다시 시작하는 함수
  const onRun = () => {
    // 수동으로 일시 정지된 상태가 아니라면 애니메이션을 시작
    if (!isManualPause) setAnimate(true);
  };

  // 애니메이션의 상태를 토글하는 함수
  const onToggle = () => {
    // 애니메이션이 실행 중이라면 멈추고, 수동 정지 상태로 변경
    if (animate) {
      setAnimate(false); // 애니메이션을 멈춤
      setIsManualPause(true); // 수동으로 멈췄다고 표시
    } else {
      // 애니메이션이 멈춰있다면 다시 실행하고, 수동 정지 상태를 해제
      setAnimate(true); // 애니메이션을 시작
      setIsManualPause(false); // 수동 정지 상태 해제
    }
  };

  // 슬라이드 인덱스가 변경될 때마다 실행되는 함수
  const handleSlideChange = (index) => {
    // 슬라이드가 첫 번째 인덱스(0번)일 때만 애니메이션의 key값을 변경
    // key값을 변경하면 AnimateNumber 컴포넌트가 재실행되도록 유도
    if (index === 0) {
      setAnimateKey(Date.now()); // 현재 시간을 key로 설정하여 컴포넌트 강제 리렌더링
    }
  };

  const slideItems1 = [
    <div className={styles.slide_wrap} key='slide1'>
      <p>기부에 함께 해주신 착한 마음들</p>
      <AnimateNumber key={animateKey} target={66445518} duration={1000} />
    </div>,
    <div className={styles.slide_wrap} key='slide2'>
      <img
        src='https://t1.kakaocdn.net/thumb/C544x544.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Fwidget%2F777385a5018d00001.png'
        alt='이미지'
      />
    </div>,
  ];

  const slideItems2 = [
    <div className={styles.slide_wrap} key='slide1'>
      <span className={styles.black}>다양성의 가치</span>
      <p>2023</p>
      <p>카카오 다양성 보고서</p>
      <span>
        <span>#다양성</span>
        <span>#건강한디지털</span>
      </span>
    </div>,
    <div className={styles.slide_wrap} key='slide2'>
      <span>디지털 격차 줄이기</span>
      <p>어르신을 위한</p>
      <p>개인정보보호 안내</p>
      <span>
        <span>#기술복지</span>
        <span>#피싱범죄예방</span>
      </span>
    </div>,
    <div className={styles.slide_wrap} key='slide3'>
      <span>카톡설명서</span>
      <p>모두의 카톡을</p>
      <p>더 가깝고 안전하게</p>
      <span>
        <span>#업데이트소식</span>
        <span>#톡활용팁</span>
      </span>
    </div>,
  ];

  const slideItems3 = [
    <div className={styles.slide_wrap} key='slide1'>
      <img className={styles.s_img} src='/main/visual/visual3.webp' alt='' />
      <p>카카오그룹</p>
    </div>,
    <div className={styles.slide_wrap} key='slide2'>
      <img src='/main/visual/visual5.webp' alt='' />
      <p>연혁</p>
    </div>,
  ];

  const settings3 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: true,
    fade: true,
  };

  return (
    <>
      <section id='mainContent' className={styles['inner-main']}>
        <article className={`${styles['content-article']} ${styles.wrap_home}`}>
          <div className={styles.cont_home}>
            {/* 메인페이지 동영상 영역 */}
            <div className={`${styles.cont_main} ${styles.area_banner}`}>
              <div className={styles.area_visual}>
                <div className={styles.wrap_slide}>
                  <video
                    src='https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/heroVisual/879d102d019500001.mp4'
                    poster='https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/heroVisual/879d244a019500001.png?type=thumb&opt=C1424x808.fwebp'
                    autoPlay
                    muted
                    loop
                    playsInline
                    type='video/mp4'
                  />
                </div>
                <div className={styles.inner_top}>
                  <Link to={'https://www.kakaocorp.com/page/collection'}>
                    <img src='/main/visual/visual1.gif' alt='visual1' />
                  </Link>
                </div>
                <div className={styles.inner_text}>
                  <strong>
                    AI 서비스를 <br />내 일상 속으로
                  </strong>
                </div>
                <div className={styles.inner_bottom}>
                  <Link
                    to={'https://www.kakaocorp.com/page/detail/11450?lang=KOR'}
                  >
                    자세히 알아보기
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='64'
                      height='64'
                      viewBox='0 0 64 64'
                      fill='none'
                    >
                      <circle cx='32' cy='31.9961' r='32' fill='black'></circle>
                      <path
                        d='M34.9292 25.5325L33.515 26.9467L38.1748 31.6065L23 31.6074V33.6015L38.1748 33.6005L33.515 38.2604L34.9292 39.6746L42.0002 32.6035L34.9292 25.5325Z'
                        fill='white'
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>
              <div className={styles.area_widget}>
                <div
                  className={`${styles.inner_widget} ${styles.first_widget}`}
                >
                  <div className={styles['slick-slide']}>
                    <Link to={'#'}>
                      <Slick
                        items={slideItems1}
                        infinite={true}
                        slidesToShow={1}
                        autoplay={false}
                        arrows={false}
                        fade={true}
                        dotsPosition={'absolute'}
                        dotsBottom={'22px'}
                        dotsBg={'#fff'}
                        dotsOp={1}
                        onSlideChange={handleSlideChange}
                      />
                    </Link>
                  </div>
                </div>
                <div
                  className={`${styles.inner_widget} ${styles.second_widget}`}
                >
                  <div className={styles['slick-slide']}>
                    <Link to={'#'}>
                      <Slick
                        items={slideItems2}
                        infinite={true}
                        slidesToShow={1}
                        autoplay={false}
                        arrows={false}
                        fade={true}
                        dotsPosition={'absolute'}
                        dotsBottom={'22px'}
                      />
                    </Link>
                  </div>
                </div>
                <div
                  className={`${styles.inner_widget} ${styles.third_widget}`}
                >
                  <div className={styles['slick-slide']}>
                    <Link to={'#'}>
                      <style>{`
                        .slick-arrow {
                          width:32px;height:32px;z-index:100;

                          &.slick-next{right:22px;}
                          &.slick-prev{left:10px;}
                        }`}</style>
                      <Slider {...settings3}>
                        {slideItems3.map((item, index) => (
                          <div key={index}>
                            {/* 이미지나 카드, 텍스트 등 자유롭게 렌더링 */}
                            {item}
                          </div>
                        ))}
                      </Slider>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

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
            <div className={`${styles.cont_main} ${styles.area_service}`}>
              <AreaService />
            </div>

            {/* 뉴스 */}
            <div className={`${styles.cont_main} ${styles.area_news}`}>
              <AreaNews />
            </div>

            {/* 약속과 책임 */}
            <div className={`${styles.cont_main} ${styles.area_responsible}`}>
              <MainTest />
            </div>

            {/* 헬퍼 */}
            <div className={`${styles.cont_main} ${styles.area_help}`}>
              <MainHelp />
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default Index;

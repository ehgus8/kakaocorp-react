import React, { useEffect, useRef, useState } from 'react';
import styles from './ESGPage.module.scss';
import DropDown from './DropDown.jsx';
import Card from '../esg/CardCustom.jsx';
import styles2 from '../esg/CardCustom.module.scss';

function ESGPage() {
  /* 헤더 스크롤 이벤트 */
  const [isShrunkHeaderVisible, setShrunkHeaderVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setShrunkHeaderVisible(currentY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* 하이라이트 더보기 함수 */
  const handleShowMore = () => {
    setShowAllCards(true);
  };

  const [showAllCards, setShowAllCards] = useState(false);

  const allCards = [
    {
      img: `${import.meta.env.BASE_URL}img/card_energy.png`,
      title: '22년 대비\n재생에너지 2배 확대',
      desc: '제주에서 바람으로\n판교에서 태양으로',
    },
    {
      img: `${import.meta.env.BASE_URL}img/card_committee.png`,
      title: '준법과신뢰위원회\n 설립ㆍ운영',
      desc: '신뢰 회복을 위한\n쇄신 시스템 마련',
    },
    {
      img: `${import.meta.env.BASE_URL}img/card_dangol.png`,
      title: '우리동네 단골시장\n 대통령상 수상',
      desc: '서비스를 통한\n전통시장의 디지털전환',
    },
    {
      img: `${import.meta.env.BASE_URL}img/card_information.png`,
      title: '정보보호 투자액\n 22년 대비 48.8% 증가',
      desc: '안정적인 서비스를 위한\n정보보호 강화',
    },
    {
      img: `${import.meta.env.BASE_URL}img/card_datacenter.png`,
      title: '친환경 설계\n 카카오 데이터센터 안산',
      desc: '에너지와 물을 덜쓰는\n 친환경 설계',
    },
    {
      img: `${import.meta.env.BASE_URL}img/card_together.png`,
      title: '같이가치 긴급모금\n 100만 참여',
      desc: '튀르키예 지진 모금\n 127만 명 참여, 48억 원 모금',
    },
    {
      img: `${import.meta.env.BASE_URL}img/card_it.png`,
      title: 'IT업계 최초\n 다양성 보고서 발간',
      desc: '다양성 내재화 및\n 확산을 위한 첫 걸음',
    },
    {
      img: `${import.meta.env.BASE_URL}img/card_grs.png`,
      title: 'GRS 인증을 통한\n 친환경 이커머스 강화',
      desc: '재사용과 새활용을 통한\n 자원순환 연결고리',
    },
    {
      img: `${import.meta.env.BASE_URL}img/card_jegaberchi.png`,
      title: '제가버치 누적거래액\n 300억 원 달성',
      desc: '판로를 찾지 못한\n 농수산물의 제값 찾기',
    },
  ];

  const firstCards = allCards.slice(0, 3);
  const extraCards = allCards.slice(3);

  /* 주요 지표 슬라이드 */
  const indicatorRef = useRef(null);

  const handleScroll = (dir) => {
    if (indicatorRef.current) {
      const scrollAmount = 324;
      const maxIndex = cardCount - visibleCards;
      let newIndex = slideIndex;

      if (dir === 'next' && slideIndex < maxIndex) {
        newIndex = slideIndex + 1;
      } else if (dir === 'prev' && slideIndex > 0) {
        newIndex = slideIndex - 1;
      }

      setSlideIndex(newIndex);
      indicatorRef.current.scrollTo({
        left: newIndex * scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  /* 주요 지표 주각보기 */
  const scrollToFootnote = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const [slideIndex, setSlideIndex] = useState(0);
  const cardCount = 7;
  const visibleCards = 3;

  const isAtStart = slideIndex === 0;
  const isAtEnd = slideIndex >= cardCount - visibleCards;

  // 파트너 슬라이드
  const [partnerIndex, setPartnerIndex] = useState(0);
  const partnerSliderRef = useRef(null);

  const scrollToPartnerCard = (index) => {
    const container = partnerSliderRef.current;
    if (!container) return;

    const card = container.children[index];
    if (card) {
      container.scrollTo({
        left: card.offsetLeft,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.esgPage}>
        {/* ESG Header */}
        <section className={styles.esgHeader}>
          <div className={styles.headerLeft}>
            <img
              src={`${import.meta.env.BASE_URL}img/ico_tit_esg.gif`}
              alt='ESG 아이콘'
            />
            <h2>ESG 보고서</h2>
          </div>
          <DropDown />
        </section>

        {isShrunkHeaderVisible && (
          <div className={styles.shrunkHeader}>
            <div className={styles.left}>
              <img
                src={`${import.meta.env.BASE_URL}img/ico_tit_esg.gif`}
                alt='ESG'
              />
              <span>ESG</span>
            </div>
            <DropDown small />
          </div>
        )}

        {/*  ESG First */}
        <section className={styles.esgFirst}>
          <div className={styles.esgFirstInner}>
            <div className={styles.textBox}>
              <strong>
                모두의 지속가능한 미래를 위한
                <br />
                카카오의 약속과 책임
              </strong>
              <br />
              <span>
                카카오의 혁신과 우리의 연결이 모여 더 나은 세상, 지속가능한
                미래를 함께 만들어 갑니다.
              </span>
            </div>
          </div>
        </section>

        {/* ESG Highlights */}
        <section className={styles.highlightSection}>
          <div className={styles.highlightInner}>
            <h2 className={styles.sectionTitle}>2023 HIGHLIGHT</h2>

            <div className={styles.cardGrid}>
              {(showAllCards ? allCards : firstCards).map((card, i) => (
                <div key={i} className={styles.highlightCard}>
                  <div className={styles.cardInner}>
                    <div className={styles.cardText}>
                      <h3>{card.title}</h3>
                      <p>{card.desc}</p>
                    </div>
                    <div className={styles.imageWrapper}>
                      <img src={card.img} alt={card.title} />
                    </div>
                    <button type='button' className={styles.cardIcon}>
                      ＋
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {!showAllCards && (
              <button className={styles.showMoreBtn} onClick={handleShowMore}>
                더보기
              </button>
            )}
          </div>
        </section>

        {/*  ESG 평가 결과 */}
        <section className={styles.esgEvaluation}>
          <h2>카카오 ESG 평가 결과</h2>
          <div className={styles.sliderWrapper}>
            <div className={styles.sliderTrack}>
              <div className={styles.card}>
                <img
                  className={styles.img1}
                  src={`${import.meta.env.BASE_URL}img/msci_logo.png`}
                  alt='MSCI'
                />
                <br />
                <strong>
                  ESG 평가
                  <br /> A등급 2년 연속 획득
                </strong>
                <p>(2023~2024)</p>
                <img
                  className={styles.img2}
                  src={`${import.meta.env.BASE_URL}img/outcome_01_250121.png`}
                  alt='MSCI A등급'
                />
              </div>
              <div className={styles.card}>
                <img
                  className={styles.img1}
                  src={`${import.meta.env.BASE_URL}/img/esg_logo.png`}
                  alt='ESG기준원'
                />
                <br />
                <strong>
                  ESG 평가 통합 부문
                  <br /> A등급 4년 연속 획득
                </strong>
                <p>(2021~2024)</p>
                <img
                  className={styles.img2}
                  src={`${import.meta.env.BASE_URL}img/outcome_02_250121.png`}
                  alt='ESG A등급'
                />
              </div>
              <div className={styles.card}>
                <img
                  className={styles.img1}
                  src={`${import.meta.env.BASE_URL}img/snp_logo.png`}
                  alt='S&P'
                />
                <br />
                <strong>
                  ESG 평가 2년 연속
                  <br /> ‘Top 1%’로 선정
                </strong>
                <p>(2023~2024)</p>
                <img
                  className={styles.img2}
                  src={`${import.meta.env.BASE_URL}img/outcome_03.png`}
                  alt='S&P Top1%'
                />
              </div>
              <div className={styles.card}>
                <img
                  className={styles.img1}
                  src={`${import.meta.env.BASE_URL}img/cdp_logo.png`}
                  alt='CDP'
                />
                <br />
                <strong>
                  Climate Change
                  <br /> 리더십A 획득
                </strong>
                <p>(2023)</p>
                <img
                  className={styles.img2}
                  src={`${import.meta.env.BASE_URL}img/outcome_04.png`}
                  alt='CDP A등급'
                />
              </div>
            </div>
          </div>
        </section>

        {/* 주요 지표 */}
        <section id='esgIndicators' className={styles.indicatorSection}>
          <h2>2023 ESG 주요 지표</h2>

          <div className={styles.sliderContainer}>
            <div className={styles.sliderTrack} ref={indicatorRef}>
              {/* 카드 리스트 */}
              <div className={`${styles.card} ${styles.green}`}>
                <span className={styles.tag}>환경</span>
                <p>온실가스 배출량</p>
                <strong>53,426 tCO₂e</strong>
                <p className={styles.smallP}>
                  (scope1 + scope2)
                  <br />
                  22년 대비 20% 감소
                </p>
                <img
                  src={`${import.meta.env.BASE_URL}img/indicators_greenGas.png`}
                  alt='co2'
                />
              </div>

              <div className={`${styles.card} ${styles.blue}`}>
                <span className={styles.tag}>거버넌스</span>
                <p>사외이사 구성 비율</p>
                <strong>62.5%</strong>
                <p className={styles.smallP}>
                  이사회의 독립성 확보
                  <br />
                  (2024년 2월 기준)
                </p>
                <img
                  src={`${import.meta.env.BASE_URL}img/indicators_director.png`}
                  alt='director'
                />
              </div>

              <div className={`${styles.card} ${styles.pink}`}>
                <span className={styles.tag}>사회</span>
                <p>
                  지역사회 기부금
                  <strong>30,853</strong>백만원
                </p>
                <p className={styles.smallP}>22년 대비 24% 증가</p>
                <img
                  src={`${import.meta.env.BASE_URL}img/indicators_donation.png`}
                  alt='donation'
                />
              </div>

              <div className={`${styles.card} ${styles.green}`}>
                <span className={styles.tag}>환경</span>
                <p>재생에너지 사용량</p>
                <strong>4,000 MWh</strong>
                <p className={styles.smallP}>22년 대비 2배 증가</p>
                <img
                  src={`${import.meta.env.BASE_URL}img/indicators_energy.png`}
                  alt='energy'
                />
              </div>

              <div className={`${styles.card} ${styles.pink}`}>
                <span className={styles.tag}>사회</span>
                <p>
                  주요 기능 접근성
                  <sup
                    onClick={() => scrollToFootnote('note1')}
                    className={styles.footnoteLink}
                  >
                    1)
                  </sup>
                  적용률
                </p>
                <strong>
                  81.2%
                  <sup
                    onClick={() => scrollToFootnote('note2')}
                    className={styles.footnoteLink}
                  >
                    2)
                  </sup>
                </strong>
                <p className={styles.smallP}>모두가 누리는 서비스</p>
                <img
                  src={`${import.meta.env.BASE_URL}img/indicators_accessibility.png`}
                  alt='accessibility'
                />
              </div>

              <div className={`${styles.card} ${styles.blue}`}>
                <span className={styles.tag}>거버넌스</span>
                <p>
                  경영진 ESG 성과지표
                  <br />
                  성과급<strong>15%</strong>
                </p>
                <p className={styles.smallP}>ESG 기반 의사결정</p>
                <img
                  src={`${import.meta.env.BASE_URL}img/indicators_performance.png`}
                  alt='performance'
                />
              </div>

              <div className={`${styles.card} ${styles.pink}`}>
                <span className={styles.tag}>사회</span>
                <p>여성 임원 비율</p>
                <strong>57.1%</strong>
                <p className={styles.smallP}>다양성과 포용성</p>
                <img
                  src={`${import.meta.env.BASE_URL}img/indicators_executives.png`}
                  alt='executives'
                />
              </div>
            </div>

            {/* 방향키 */}
            <div className={styles.arrowControls}>
              <button
                className={`${styles.arrowBtn} ${isAtStart ? styles.disabled : ''}`}
                onClick={() => handleScroll('prev')}
                disabled={isAtStart}
              >
                ＜
              </button>
              <button
                className={`${styles.arrowBtn} ${isAtEnd ? styles.disabled : ''}`}
                onClick={() => handleScroll('next')}
                disabled={isAtEnd}
              >
                ＞
              </button>
            </div>
          </div>
        </section>

        {/* ESG 보고서 & 정책 */}
        <section className={styles.reportSection}>
          <h2>ESG 보고서&정책</h2>

          <div className={styles.reportContainer}>
            {/* 텍스트 박스 */}
            <div className={styles.reportTextBox}>
              <p className={styles.subTitle}>Kakao ESG Report</p>
              <h3>2023 ESG 보고서</h3>
              <p className={styles.description}>
                지속가능한 기업을 만들어가기 위한
                <br />
                카카오의 약속과 책임을 담은 ESG보고서를
                <br />
                매년 발간하고 있습니다.
              </p>

              <div className={styles.buttonGroup}>
                <button className={styles.downloadBtn}>국문 ↓</button>
                <button className={styles.downloadBtn}>영문 ↓</button>
                <button className={styles.downloadBtn}>
                  시각장애인용 대체자료 ↓
                </button>
              </div>
            </div>

            {/* 이미지 박스 */}
            <div className={styles.reportImage}>
              <img
                src={`${import.meta.env.BASE_URL}img/esgReports.png`}
                alt='2023 ESG 보고서 미리보기'
              />
            </div>
          </div>

          {/* 설명문구 */}
          <p className={styles.caption}>
            * 시각장애인 대체자료는 시각장애인과 독서장애인을 위해
            데이지(Digital Accessible Information System) 파일로 제공되며,
            <br />
            별도의 플레이어나 기기를 통해서만 이용이 가능합니다. 보다 자세한
            이용 방법은 국립장애인도서관 페이지를 참고하시기 바랍니다.
            <a href='#' className={styles.link}>
              {' '}
              바로가기 ▶
            </a>
          </p>

          {/* 하단 카드 */}
          <div className={styles.bottomCards}>
            <a className={styles.resourceCard}>
              <img
                src={`${import.meta.env.BASE_URL}img/report_archive.png`}
                alt='보고서 아이콘'
              />
              <div className={styles.cardText}>
                <h4>보고서 아카이브</h4>
                <p>ESG 관련 보고서</p>
              </div>
            </a>
            <a className={styles.resourceCard}>
              <img
                src={`${import.meta.env.BASE_URL}img/report_policy.png`}
                alt='정책 아이콘'
              />
              <div className={styles.cardText}>
                <h4>정책과 규정</h4>
                <p>ESG경영 관련 정책</p>
              </div>
            </a>
          </div>
        </section>

        {/* 파트너와 함께하는 성장 */}
        <section className={styles.partnerSection}>
          <h2>파트너와 함께하는 지속가능한 성장</h2>
          <p className={styles.subText}>
            카카오 그룹은 파트너와 함께 성장한다는 믿음으로 선순환의 생태계를
            만들어가고자
            <br />
            다양한 상생 프로그램을 운영하고 있습니다.
          </p>

          <div className={styles.sliderWrapper}>
            <div className={styles.sliderTrack} ref={partnerSliderRef}>
              <div className={`${styles.card} ${styles.purple}`}>
                <div className={styles.cardContent}>
                  <div className={styles.cardText}>
                    <h3>소상공인 디지털 전환 지원</h3>
                    <strong>379억원</strong>
                    <p>(집행, 23년 12월 기준)</p>
                    <div className={styles.hash}>
                      #소상공인 #지역파트너
                      <br />
                      #카카오 #카카오임팩트
                    </div>
                  </div>
                  <img
                    className={styles.cardImage}
                    src={`${import.meta.env.BASE_URL}img/img_fund_digital.png`}
                    alt='소상공인'
                  />
                </div>
              </div>

              <div className={`${styles.card} ${styles.brown}`}>
                <div className={styles.cardContent}>
                  <div className={styles.cardText}>
                    <h3>창작자 생태계 및 육성 지원</h3>
                    <strong>100억원</strong>
                    <p>(약정)</p>
                    <div className={styles.hash}>
                      #디지털 창작자
                      <br />
                      #카카오엔터테인먼트
                    </div>
                  </div>
                  <img
                    className={styles.cardImage}
                    src={`${import.meta.env.BASE_URL}img/img_fund_creater.png`}
                    alt='창작자'
                  />
                </div>
              </div>

              <div className={`${styles.card} ${styles.pink}`}>
                <div className={styles.cardContent}>
                  <div className={styles.cardText}>
                    <h3>우리가 같이 만든 변화</h3>
                    <strong>741억원</strong>
                    <p>(누적기부금, 24년 4월 기준)</p>
                    <div className={styles.hash}>
                      #이용자 #지역사회
                      <br />
                      #카카오같이가치
                    </div>
                  </div>
                  <img
                    className={styles.cardImage}
                    src={`${import.meta.env.BASE_URL}img/img_fund_with.png`}
                    alt='같이가치'
                  />
                </div>
              </div>

              <div className={`${styles.card} ${styles.green}`}>
                <div className={styles.cardContent}>
                  <div className={styles.cardText}>
                    <h3>과잉생산 농축수산물 판로 지원</h3>
                    <strong>300억원</strong>
                    <p>(누적거래액, 24년 2월 기준)</p>
                    <div className={styles.hash}>
                      #소상공인 #지역 파트너
                      <br />
                      #카카오메이커스
                    </div>
                  </div>
                  <img
                    className={styles.cardImage}
                    src={`${import.meta.env.BASE_URL}img/img_fund_farm.png`}
                    alt='농축수산물'
                  />
                </div>
              </div>

              <div className={`${styles.card} ${styles.blue}`}>
                <div className={styles.cardContent}>
                  <div className={styles.cardText}>
                    <h3>
                      택시기사 의료 생계비 지원,
                      <br />
                      의인 시상기금 등
                    </h3>
                    <strong>100억원</strong>
                    <p>(약정)</p>
                    <div className={styles.hash}>
                      #모빌리티 종사자
                      <br />
                      #카카오모빌리티 #카카오임팩트
                    </div>
                  </div>
                  <img
                    className={styles.cardImage}
                    src={`${import.meta.env.BASE_URL}img/img_fund_medic.png`}
                    alt='모빌리티'
                  />
                </div>

                <div className={`${styles.card} ${styles.yellow}`}>
                  <div className={styles.cardContent}>
                    <div className={styles.cardText}>
                      <h3>소규모/인디 개발사 투자 펀드</h3>
                      <strong>260억원</strong>
                      <p>(펀드 총 규모)</p>
                      <div className={styles.hash}>
                        #스타트업 #인디게임
                        <br />
                        #상생펀드 #카카오게임즈
                      </div>
                    </div>
                    <img
                      className={styles.cardImage}
                      src={`${import.meta.env.BASE_URL}img/img_fund_indie.png`}
                      alt='카카오게임즈'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 방향키 */}
          <div className={styles.partnerArrows}>
            <button
              className={`${styles.arrowBtn} ${partnerIndex === 0 ? styles.disabled : ''}`}
              onClick={() => {
                if (partnerIndex > 0) {
                  const newIndex = partnerIndex - 1;
                  setPartnerIndex(newIndex);
                  scrollToPartnerCard(newIndex);
                }
              }}
              disabled={partnerIndex === 0}
            >
              ＜
            </button>
            <button
              className={`${styles.arrowBtn} ${partnerIndex >= 5 ? styles.disabled : ''}`}
              onClick={() => {
                if (partnerIndex < 5) {
                  const newIndex = partnerIndex + 1;
                  setPartnerIndex(newIndex);
                  scrollToPartnerCard(newIndex);
                }
              }}
              disabled={partnerIndex >= 5}
            >
              ＞
            </button>
          </div>
        </section>

        {/* 관련 사이트 */}
        <section className={styles.relatedSites}>
          <h2>관련 사이트</h2>
          <div className={styles.siteGrid}>
            {[
              { title: '카카오임팩트', tags: '#사회문제해결 #tech4good' },
              { title: '카카오창작재단', tags: '#디지털창작자 #발굴교육지원' },
              { title: '카카오같이가치', tags: '#사회문제해결 #기부 #캠페인' },
              {
                title: '카카오메이커스',
                tags: '#재고없는생산 #제카버치 #새카버치',
              },
              { title: '카카오 소상공인 지원사업', tags: '#소상공인 #상생' },
              {
                title: '우리동네 단골시장',
                tags: '#소상공인 #상생 #디지털전환',
              },
              { title: '도로 위 히어로즈', tags: '#모빌리티 #의인상 #상생' },
              {
                title: '카카오 테크 캠퍼스',
                tags: '#IT인재육성 #지역사회 #대학연계',
              },
              { title: '제주 with Kakao', tags: '#지역사회 #상생 #제주' },
            ].map((item, index) => (
              <div className={styles.siteCard} key={index}>
                <div className={styles.text}>
                  <strong>{item.title}</strong>
                  <p>{item.tags}</p>
                </div>
                <div className={styles.icon}>
                  <span>↗</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 최근 소식 */}
        <section className={styles.esgNews}>
          <h2>최근 소식</h2>
          <ul className={styles.cardBox}>
            <li>
              <Card
                item={{
                  id: 11184,
                  title: '카카오, 그룹 차원 "공정거래 자율준수 공동 서약" 완료',
                  tags: ['#공정거래', '#준신위'],
                  date: '2024.08.14',
                  category: 'NEWS',
                  imgSrc: `${import.meta.env.BASE_URL}img/11184.webp`,
                  iconSrc: `${import.meta.env.BASE_URL}dummy/loudspeaker.webp`,
                }}
                imgPosition='bottom'
              />
            </li>
            <li>
              <Card
                item={{
                  id: 11077,
                  title:
                    '카카오, 세계 환경의 날 맞아 다양한 캠페인 진행 \n - 2023년 한 해 동안의 이용자 환...',
                  tags: ['#ESG', '#새가버치', '#세계환경의날', '#카본인덱...'],
                  date: '2024.06.05',
                  category: 'NEWS',
                  imgSrc: `${import.meta.env.BASE_URL}img/11077.webp`,
                  iconSrc: `${import.meta.env.BASE_URL}dummy/loudspeaker.webp`,
                }}
                imgPosition='bottom'
              />
            </li>
            <li>
              <Card
                item={{
                  id: 11184,
                  title:
                    '카카오, 디지털 소외계층 위한 "더 쉬운 카톡설명서" 공개',
                  tags: ['#카톡설명서', '#디지털접근성', '#세계접근성인...'],
                  date: '2024.05.16',
                  category: 'NEWS',
                  imgSrc: `${import.meta.env.BASE_URL}img/11024.webp`,
                  iconSrc: `${import.meta.env.BASE_URL}dummy/loudspeaker.webp`,
                }}
                imgPosition='bottom'
              />
            </li>
          </ul>
        </section>

        {/* 데이터 기준 */}
        <div className={styles.esgFootnoteWrapper}>
          <h2 className={styles.footnoteTitle}>데이터 기준</h2>
          <div className={styles.footnoteContent}>
            <div className={styles.esgFootnote} id='note1'>
              <p>
                <strong>1)</strong> 접근성(accessibility)이란, 비장애인 뿐만
                아니라 장애를 가진 사람 등도
                <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;웹/앱 서비스를
                이용할 수 있도록 만드는 것
                <a href='#esgIndicators' className={styles.scrollUp}>
                  ↑
                </a>
              </p>
            </div>
            <div className={styles.esgFootnote} id='note2'>
              <p>
                <strong>2)</strong> 출처 : 2023 접근성 실태조사
                <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- 카카오 주요
                서비스 내 중요도 높은 기능만을 대상으로 하였음
                <a href='#esgIndicators' className={styles.scrollUp}>
                  ↑
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.fixedBottom}>
        <button
          className={styles.scrollToTopBtn}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          ↑
        </button>
      </div>
    </section>
  );
}

export default ESGPage;

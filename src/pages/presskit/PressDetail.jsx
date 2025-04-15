import React from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from './PressDetail.module.scss';
import dummyArticleList from '../../assets/dummy/dummyArticleList';
import ListShare from './ListShare';
import Card from '../../assets/components/Card';
const posts = [
  {
    id: 11517,
    title:
      '“하루 1만 명 오가던 골목상권에서 5천 명의 온라인 단골 만들다” 카카오-북촌 계동길 상인회장, 파리 OECD 회의에서 ‘프로젝트 단골’ 성과 발표',
    content: (
      <>
        <p>
          <b>- </b>
          <b>
            카카오, 아시아 유일 민간 협력사로 ‘D4SME’ 정례 회의 참석… 소상공인
            디지털 전환 지원 사례 소개
          </b>
        </p>
        <p>
          <b>- </b>
          <b>
            북촌 계동길 상인회장이 발표 참여해 현장 경험 전달, “골목상권의
            디지털 전환 계기”
          </b>
        </p>
        <p>&nbsp;</p>
        <p>
          [2025-04-11] 카카오(대표이사 정신아)가 지난 10일 프랑스 파리
          OECD(경제협력개발기구) 본부에서 열린 ‘D4SME(Digital for SMEs
          Initiative)’ 회의에 아시아 유일 공식 민간 협력사로 참여해, 소상공인
          상생 사례인 ‘프로젝트 단골’을 소개했다.
        </p>
        <p>&nbsp;</p>
        <p>
          ‘디지털 및 AI 도입을 통한 중소기업 경쟁력 강화’를 주제로 열린 이번
          회의에서 카카오는 전통시장과 지역 상권의 디지털 전환을 지원해 온
          ‘프로젝트 단골’의 성과를 소개했다. 발표자로 나선 김은화 상생사업
          리더는 “지금까지 212개 전통시장과 15개 지역 상권을 지원했으며, 지난해
          우수시장으로 선정된 시장들은 각각 1만 명 이상의 단골 고객을
          확보했다”며 “소상공인시장진흥공단과 유통학회의 공동 연구에 따르면,
          프로젝트 참여 전통시장은 3년 평균 매출이 미참여 시장 대비 3% 증가한
          것으로 나타났다”고 덧붙였다.
        </p>
        <p>&nbsp;</p>
        <p>
          이어서 프로젝트에 참여한 서울 북촌 계동길 상인회 김용조 회장이
          발표자로 나서 세계 각국 정부, 플랫폼 기업, 중소기업, 학계 전문가들에게
          현장 경험을 전해 주목을 받았다. 김용조 상인회장은 “카카오 덕분에 하루
          1만 명이 오가던 골목상권에서 5천 명 이상을 단골 고객으로 확보하고,
          온라인 소통도 시작할 수 있었다”고 전했다. 또한 “전통적인 방식에서
          디지털 상거래로 전환할 수 있는 계기가 됐으며, 상인들이 디지털 도구에
          대한 두려움을 극복하고 자신감을 얻었다”고 말했다. 이어 “이러한 사례가
          세계적으로 확산되길 바란다”고 덧붙였다.
        </p>
        <p>&nbsp;</p>
        <p>
          카카오는 이와 함께 디지털 기술 기반의 중소기업 지원 전략도 발표했다.
          카카오 단골만들기 지원센터에서는 정부에서 진행하는 다양한 지원 정책을
          안내하고, 자회사 디케이테크인을 통해 기술 협력 프로그램을 운영해
          중소기업의 경쟁력 강화를 돕고 있다. 올해 출시되는 기업용 솔루션
          ‘카카오워크 2.0’에는 AI 업무 지원 기능을 추가해, 중소기업에서 AI
          기술을 쉽게 활용할 수 있도록 지원할 계획이다.
        </p>
        <p>&nbsp;</p>
        <p>
          카카오 김은화 리더는 “OECD 회의를 통해 카카오의 상생 노력이 국제적으로
          주목받는 기회를 얻게 됐다”며, “앞으로도 소상공인이 디지털 환경 속에서
          지속적으로 성장할 수 있도록 적극 지원하겠다”고 말했다.
        </p>
        <p>&nbsp;</p>
        <p>
          한편, 카카오는 2019년부터 OECD D4SME 회의에 공식 파트너로 참여하고
          있으며, AI와 디지털 기술을 활용한 다양한 소상공인 지원 사례를 꾸준히
          공유하고 있다. 지난해에는 카카오톡 채널 챗봇 기반의 디지털 전환 사례를
          소개한 바 있다. (끝)
        </p>
        <p>&nbsp;</p>
        <p>
          <b>[</b>
          <b>참고]</b>
        </p>
        <p>
          - 위 OECD D4SME 참석 관련, 카카오 정책 산업 연구 브런치 게시{' '}
          <a href='https://brunch.co.kr/@kakao-it/483'>
            https://brunch.co.kr/@kakao-it/483
          </a>
        </p>
        <p>&nbsp;</p>
        <p>
          <b>[</b>
          <b>사진 자료]</b>
        </p>
        <p>
          - 사진 설명: 지난 10일 열린 OECD D4SME 회의에 참석한 카카오 김은화
          상생사업 리더와 북촌 계동길 상인회 김용조 회장(왼쪽에서 두 번째, 세
          번째)
        </p>
      </>
    ),
    tags: ['#프로젝트단골', '#oecd', '#상생사례', '#디지털전환', '#소상공인'],
    date: '2025.04.11',
    category: '보도자료',
    imgSrc: '../../dummy/11517.webp',
    iconSrc: '../../dummy/loudspeaker.webp',
  },
];

const PressDetail = () => {
  const { postId } = useParams();
  const foundPost = dummyArticleList.find((p) => p.id === +postId);
  console.log(foundPost);
  return (
    <div className={styles.mainContainer}>
      <div className={styles.area_title}>
        <div className={styles.wrap_subinfo}>
          <span>뉴스</span> <span>| {foundPost.date}</span>
        </div>
        <h3 className={styles.tit_detail}>{foundPost.title}</h3>
        <div className={styles.wrap_share}>
          <ListShare />
        </div>
      </div>
      <div className={styles.area_visual}>
        <img src={foundPost.imgSrc} />
      </div>
      <div className={styles.area_cont}>
        <div className={styles.wrap_cont}>
          <p>{foundPost.content}</p>
        </div>
      </div>
      <div className={styles.area_subinfo}>
        <div className={styles.wrap_share}>
          <ListShare />
        </div>
        <div className={styles.wrap_tag}>
          {foundPost.tags.map((tag) => (
            <Link
              to={`?searchKeyword=${tag.slice(1, tag.length)}&searchPage=1`}
              className={styles.link_tag}
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>
      <div className={styles.section_relation}>
        <Link to='/presskit' className={styles.link_list}>
          목록 보기
        </Link>
        <div className={styles.area_relation}>
          <strong className={styles.tit_relation}>추천 콘텐츠</strong>
          <ul className={styles.list_card_new}>
            <li>
              <Card item={dummyArticleList[0]} imgPosition='bottom' />
            </li>
            <li>
              <Card item={dummyArticleList[1]} imgPosition='bottom' />
            </li>
            <li>
              <Card item={dummyArticleList[2]} imgPosition='bottom' />
            </li>
            <li>
              <Card item={dummyArticleList[3]} imgPosition='bottom' />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PressDetail;

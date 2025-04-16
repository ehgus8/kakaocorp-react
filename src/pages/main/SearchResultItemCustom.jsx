import { Link } from 'react-router-dom';
import styles from './SearchResultItemCustom.module.scss';
// import loudspeaker from '/src/assets/dummy/loudspeaker.webp';

const SearchResultItemCustom = ({ result, expanded, toggle }) => {
  console.log(`Toggle state for ${result.id}: ${expanded}`); // 로그 추가
  return (
    <div
      className={`${styles.cardContainer} ${expanded ? styles.expanded : ''}`}
    >
      <div className={styles.textContainer}>
        <div className={styles.header}>
          <div className={styles.imageStyle}>
            <img
              src={`${import.meta.env.BASE_URL}dummy/loudspeaker.webp`}
              width='30px'
            />
          </div>
          <span className={styles.category}>{result.category}</span>
          <span>{result.date}</span>
          <div className={styles.toggleWrapper}>
            <button
              className={`${styles.toggleButton} ${expanded ? styles.expanded : ''}`}
              onClick={toggle}
            >
              {expanded ? 'X' : '⋮'}
            </button>
            {expanded && (
              <div className={styles.iconGroup}>
                <button
                  className={styles.iconButton}
                  onClick={() =>
                    window.open(
                      'https://accounts.kakao.com/login/?continue=https%3A%2F%2Fsharer.kakao.com%2Fpicker%2Flink%3Fapp_key%3D4e0f02e43248fed6c5850431ea527a61%26short_key%3Dcddcc3fb-ebe5-4b4b-b40d-5391d1b1d1e2#login',
                      '_blank',
                    )
                  }
                >
                  <svg
                    style={{
                      width: '25px',
                      height: '25px',
                      overflow: 'visible',
                    }}
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 40 40'
                    width='40'
                    height='40'
                  >
                    <path
                      d='M9.375 1.5C5.025 1.5 1.5 4.393 1.5 7.962c0 2.718 1.151 3.858 2.949 5.042l.01 3.315c0 .149.178.234.303.145L7.827 14.3c.5.082 1.018.125 1.548.125 4.35 0 7.875-2.893 7.875-6.463 0-3.569-3.526-6.462-7.875-6.462'
                      transform='translate(0, -12)'
                      style={{ fill: 'var(--colorFg1)' }}
                    />
                  </svg>
                </button>
                <button
                  className={styles.iconButton}
                  onClick={() =>
                    window.open(
                      'https://www.facebook.com/share_channel/#',
                      '_blank',
                    )
                  }
                >
                  <svg
                    style={{
                      width: '25px',
                      height: '40px',
                      overflow: 'visible',
                    }}
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 40 40'
                    width='20'
                    height='20'
                  >
                    <path
                      d='M 9.556 16.5 V 9.658 h 2.297 l 0.344 -2.667 h -2.64 V 5.289 c 0 -0.772 0.213 -1.298 1.321 -1.298 h 1.412 V 1.604 c -0.684 -0.073 -1.37 -0.107 -2.058 -0.105 c -2.035 0 -3.43 1.243 -3.43 3.525 v 1.967 H 4.5 v 2.666 h 2.303 V 16.5 h 2.753 Z'
                      transform='translate(0, -25)'
                      style={{ fill: 'var(--colorFg1)' }}
                    />
                  </svg>
                </button>
                <button
                  className={styles.iconButton}
                  onClick={() =>
                    window.open('https://x.com/intent/post?', '_blank')
                  }
                >
                  <svg
                    style={{
                      width: '25px',
                      height: '40px',
                      overflow: 'visible',
                    }}
                    xmlns='http://www.w3.org/2000/svg'
                    width='32'
                    height='32'
                    viewBox='0 0 40 40'
                  >
                    <path
                      data-v-56200dcb=''
                      fill-rule='nonzero'
                      d='M6.162 15.75c6.514 0 10.076-5.195 10.076-9.697 0-.149 0-.297-.008-.439.69-.48 1.293-1.081 1.77-1.767-.632.269-1.314.453-2.034.538.734-.425 1.292-1.089 1.557-1.888-.683.39-1.44.672-2.247.827-.647-.664-1.565-1.074-2.585-1.074-1.954 0-3.54 1.527-3.54 3.407 0 .268.03.53.095.777-2.944-.141-5.551-1.498-7.299-3.562-.301.502-.477 1.088-.477 1.71 0 1.18.624 2.227 1.579 2.835-.58-.014-1.124-.17-1.601-.424v.042c0 1.654 1.219 3.025 2.842 3.343-.294.078-.61.12-.933.12-.228 0-.448-.02-.668-.063.448 1.357 1.755 2.34 3.304 2.368-1.211.911-2.739 1.456-4.398 1.456-.287 0-.566-.014-.845-.05 1.55.976 3.415 1.541 5.412 1.541'
                      transform='translate(0, -25)'
                      class='fill'
                    ></path>
                  </svg>
                </button>
                <button
                  className={styles.iconButton}
                  onClick={() => alert('URL이 클립보드에 복사되었습니다.')}
                >
                  <svg
                    style={{
                      width: '25px',
                      height: '40px',
                      overflow: 'visible',
                    }}
                    xmlns='http://www.w3.org/2000/svg'
                    width='32'
                    height='32'
                    viewBox='0 0 40 40'
                  >
                    <path
                      data-v-0317007f=''
                      d='M6.717 11.106l-.887.886c-1.333 1.334-3.496 1.334-4.83 0-1.333-1.334-1.333-3.496 0-4.83l2.146-2.145c1.334-1.334 3.496-1.334 4.83 0'
                      transform='translate(0,-25) translate(2.25 2.25) translate(.035 .033)'
                    ></path>
                    <path
                      data-v-0317007f=''
                      d='M6.276 1.887L7.162 1c1.334-1.333 3.496-1.333 4.83 0 1.334 1.334 1.334 3.497 0 4.83L9.846 7.976c-1.333 1.334-3.496 1.334-4.83 0'
                      transform='translate(0, -25) translate(2.25 2.25) translate(.035 .033)'
                    ></path>
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
        <Link
          to={`/detail/${result.id}`}
          className={styles.noLinkStyle}
          draggable={false}
          onClick={() => window.scrollTo(0, 0)}
        >
          <div className={styles.title}>
            <strong>{result.title}</strong>
          </div>
          <div className={styles.tags}>
            {result.tags.map((tag, index) => (
              <span key={index}>{tag} </span>
            ))}
          </div>
        </Link>
      </div>

      <div className={styles.imageContainer}>
        <img src={result.imgSrc} />
      </div>
    </div>
  );
};

export default SearchResultItemCustom;

import { Link } from 'react-router-dom';
import styles from './SearchResultItem.module.scss';
// import loudspeaker from '/src/assets/dummy/loudspeaker.webp';

const SearchResultItem = ({ result, expanded, toggle }) => {
  console.log(`Toggle state for ${result.id}: ${expanded}`); // 로그 추가
  return (
    <div
      className={`${styles.cardContainer} ${expanded ? styles.expanded : ''}`}
    >
      <div className={styles.textContainer}>
        <div className={styles.header}>
          <div className={styles.imageStyle}>
            <img src='/dummy/loudspeaker.webp' width='30px' />
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
                <button className={styles.iconButton}>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    width='20'
                    height='20'
                  >
                    <path
                      d='M 9.556 16.5 V 9.658 h 2.297 l 0.344 -2.667 h -2.64 V 5.289 c 0 -0.772 0.213 -1.298 1.321 -1.298 h 1.412 V 1.604 c -0.684 -0.073 -1.37 -0.107 -2.058 -0.105 c -2.035 0 -3.43 1.243 -3.43 3.525 v 1.967 H 4.5 v 2.666 h 2.303 V 16.5 h 2.753 Z'
                      transform='translate(-10, 10)'
                      style={{ fill: 'var(--colorFg1)' }}
                    />
                  </svg>
                </button>
                <button className={styles.iconButton}>3</button>
                <button className={styles.iconButton}>4</button>
              </div>
            )}
          </div>
        </div>
        <Link
          to={`/detail/${result.id}`}
          className={styles.noLinkStyle}
          draggable={false}
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

export default SearchResultItem;

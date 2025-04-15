import { Link } from 'react-router-dom';
import styles from './SearchResultItem.module.scss';
import loudspeaker from '/src/assets/dummy/loudspeaker.webp';

const SearchResultItem = ({ result, expanded, toggle }) => {
  console.log(`Toggle state for ${result.id}: ${expanded}`); // 로그 추가
  return (
    <div
      className={`${styles.cardContainer} ${expanded ? styles.expanded : ''}`}
    >
      <div className={styles.textContainer}>
        <div className={styles.header}>
          <div className={styles.imageStyle}>
            <img src={loudspeaker} width='30px' />
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
                  1
                </button>
                <button className={styles.iconButton}>2</button>
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

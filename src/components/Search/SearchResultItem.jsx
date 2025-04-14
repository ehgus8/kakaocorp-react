import styles from './SearchPage.module.scss';

const SearchResultItem = ({ result, expanded, toggle }) => (
  <div className={styles.resultItem}>
    <div className={styles.resultText}>
      <div className={styles.arrowWrapper}>
        <img src='/img/icon.png' />
        <p className={styles.resultTitle}>{result.title}</p>
        <p>{result.date}</p>
        <button className={styles.toggleButton} onClick={toggle}>
          {expanded ? 'X' : ':'}
        </button>
        {expanded && (
          <div className={styles.iconGroup}>
            <button className={styles.iconButton}>1</button>
            <button className={styles.iconButton}>2</button>
            <button className={styles.iconButton}>3</button>
          </div>
        )}
      </div>
      <p className={styles.resultDescription}>{result.description}</p>
    </div>
    <img src={result.imageUrl} className={styles.resultImage} />
  </div>
);

export default SearchResultItem;

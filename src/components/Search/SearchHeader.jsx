import styles from './SearchPage.module.scss';

const SearchHeader = ({ onClose }) => (
  <div className={styles.header}>
    <span className={styles.title}>kakao</span>
    <button className={styles.closeButton} onClick={onClose}>
      ×
    </button>
  </div>
);

export default SearchHeader;

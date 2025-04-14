import { useNavigate } from 'react-router-dom';
import styles from './searchHeader.module.scss';

const SearchHeader = ({ onClose }) => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/'); // 루트로 이동
  };

  return (
    <div className={styles.header}>
      <span className={styles.title}>kakao</span>
      <button className={styles.closeButton} onClick={onClose}>
        ×
      </button>
    </div>
  );
};

export default SearchHeader;

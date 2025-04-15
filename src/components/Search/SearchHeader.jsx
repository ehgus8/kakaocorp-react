import { useLocation, useNavigate } from 'react-router-dom';
import styles from './searchHeader.module.scss';
import { useEffect } from 'react';

const SearchHeader = ({ onClose }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClose = () => {
    const { pathname } = location;
    // 쿼리 제거하고 현재 pathname으로 이동
    navigate(pathname, { replace: true });

    // navigate('/'); // 루트로 이동
    if (onClose) {
      onClose();
    }
  };

  useEffect(() => {
    console.log('SearchHeader loaded');
  }, []);

  return (
    <div className={styles.header}>
      <span className={styles.title}>kakao</span>
      <button
        className={styles.closeButton}
        onClick={() => {
          console.log('Close button clicked');
          handleClose();
        }}
      >
        ×
      </button>
    </div>
  );
};

export default SearchHeader;

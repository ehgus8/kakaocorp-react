import React, { useState } from 'react';
import styles from './SearchModal.module.scss';
import { useNavigate } from 'react-router-dom';

// 모달 창을 띄울 때 알림창에 포커스를 주도록 뒷배경을 어둡게 만드는 용도.
const BackDrop = ({ onConfirm }) => {
  return <div onClick={onConfirm} className={styles.backdrop} />;
};

const SearchModal = ({ onClose }) => {
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate(); // ✅ 네비게이터 생성

  const submitHandler = (e) => {
    e.preventDefault();
    if (searchValue.trim()) {
      //navigate('/searchKeyword');
      navigate(`/?searchKeyword=${encodeURIComponent(searchValue.trim())}`); // 수정된 부분
      onClose(); // 모달 닫기
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          ×
        </button>
        <form onSubmit={submitHandler}>
          <input
            type='text'
            placeholder='무엇이 궁금하신가요?'
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className={styles.searchInput}
          />
        </form>
      </div>
    </div>
  );
};

export default SearchModal;

import React, { useState, useEffect, useRef } from 'react';
import styles from './DropDown.module.scss';

function DropDown({ small }) {
  const [isOpen, setIsOpen] = useState(false); // 드롭다운 열림 상태
  const dropdownRef = useRef(null); // 외부 클릭 감지를 위한 참조

  // 외부 클릭 시 드롭다운 닫기
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false); // 바깥 클릭이면 닫음
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    // 컴포넌트 언마운트 시 이벤트 제거
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // 버튼 클릭 시 열고 닫는 토글 함수
  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={styles.dropdown} ref={dropdownRef}>
      <button
        onClick={handleToggle} // 드롭다운 열고 닫기
        className={`${styles.downloadButton} ${small ? styles.small : ''}`}
      >
        2023 ESG 보고서 ↓
      </button>

      {isOpen && (
        <div className={styles.menu}>
          <a href='/report/2023_kr.pdf' target='_blank' rel='noreferrer'>
            국문 보고서
          </a>
          <a href='/report/2023_en.pdf' target='_blank' rel='noreferrer'>
            영문 보고서
          </a>
          <a href='/report/2023_daisy.zip' target='_blank' rel='noreferrer'>
            시각장애인용
          </a>
        </div>
      )}
    </div>
  );
}

export default DropDown;

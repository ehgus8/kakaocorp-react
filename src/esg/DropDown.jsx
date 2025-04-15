import React, { useState, useEffect, useRef } from 'react';
import styles from './DropDown.module.scss';

function DropDown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // 바깥 클릭 시 닫힘
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={styles.dropdown} ref={dropdownRef}>
      <button className={styles.button} onClick={() => setIsOpen(!isOpen)}>
        2023 ESG 보고서 <span className={styles.arrow}>↓</span>
      </button>

      {isOpen && (
        <div className={styles.menu}>
          <a href="/report/2023_kr.pdf" target="_blank" rel="noreferrer">국문 보고서</a>
          <a href="/report/2023_en.pdf" target="_blank" rel="noreferrer">영문 보고서</a>
          <a href="/report/2023_daisy.zip" target="_blank" rel="noreferrer">시각장애인용</a>
        </div>
      )}
    </div>
  );
}

export default DropDown;

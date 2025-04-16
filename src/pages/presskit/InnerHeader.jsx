import React, { useEffect, useState } from 'react';
import styles from './InnerHeader.module.scss';

const InnerHeader = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    setScrolled(window.scrollY > 80);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className={`${styles.innerHeader}`}>
        <h1>
          <img
            src={`${import.meta.env.BASE_URL}dummy/loudspeaker.webp`}
            width='42px'
          ></img>{' '}
          보도자료
        </h1>
        <h2>카카오가 전하는 최신 뉴스</h2>
      </div>
      <div
        className={`${styles.innerHeader} ${scrolled ? styles.scrolled : styles.none}`}
      >
        <img
          src={`${import.meta.env.BASE_URL}dummy/loudspeaker.webp`}
          width='36px'
        ></img>
        <h3>보도자료</h3>
      </div>
    </>
  );
};

export default InnerHeader;

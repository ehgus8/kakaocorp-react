import React from 'react';
import styles from './RootLayout.module.scss';
import MainNav from '../assets/components/MainNav';
import Footer from '../assets/components/Footer';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <div className={styles.container}>
          <MainNav />
        </div>
      </header>

      <main className={styles.main}>
        {/* 바뀌는 부분(동적 컴포넌트)이 들어갈 자리 */}
        <Outlet />
      </main>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <Footer />
        </div>
      </footer>
    </div>
  );
};

export default RootLayout;

import React, { useState } from 'react';
import styles from './MainNav.module.scss';
import { NavLink, useLocation } from 'react-router-dom';

const MainNav = ({ onShow }) => {
  const location = useLocation();

  const activateLink = ({ isActive }) =>
    `${styles.navLink} ${isActive && location.pathname !== '/' ? styles.active : ''}`;

  return (
    <nav className={styles.nav}>
      <NavLink className={activateLink} to='/about'>
        소개
      </NavLink>
      <NavLink className={activateLink} to='/service'>
        기술과 서비스
      </NavLink>
      <NavLink className={activateLink} to='/responsible'>
        약속과 책임
      </NavLink>
      <NavLink className={activateLink} to='/presskit'>
        소식
      </NavLink>
      <NavLink className={activateLink} to='https://www.kakaocorp.com/ir/main'>
        투자정보
      </NavLink>

      <button onClick={onShow}>search</button>
    </nav>
  );
};

export default MainNav;

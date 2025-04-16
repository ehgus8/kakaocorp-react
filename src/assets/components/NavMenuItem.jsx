import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './MainNav.module.scss';
import SlideSection from './SlideSection';

const NavMenuItem = ({ menu, isOpen, onToggle }) => {
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        onToggle(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onToggle]);

  // 더미데이터에 링크랑 타이틀만 있을시 (드롭다운 버튼이 없을때)
  if (menu.link && menu.id && !menu.categories && !menu.items) {
    return (
      <li id={menu.id}>
        <Link to={menu.link} className={styles.item_menu} target='_blank'>
          {menu.title}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='9'
            height='9'
            viewBox='0 0 9 9'
            className={styles.ico_outlink}
            aria-hidden='true'
          >
            <g fill='none'>
              <path
                d='M1.795 1.074L7.942 1.074 7.942 7.221M7.942 1.074L1.378 7.638'
                transform='translate(-935 -867) translate(836 848) translate(14 14) translate(85 5)'
              ></path>
            </g>
          </svg>
        </Link>
      </li>
    );
  }

  return (
    <li ref={menuRef}>
      <button
        type='button'
        className={styles.item_menu}
        onClick={() => onToggle(menu.id)}
      >
        {menu.title}
      </button>
      <div
        id={menu.id}
        className={`${styles.box_menu} ${isOpen ? styles.visible : ''}`}
      >
        <ul
          className={`${styles.list_second} ${
            menu.categories?.length > 0 ? styles.list_flex : ''
          }`}
        >
          {menu.categories?.map((cat, idx) => (
            <li key={idx}>
              <ul className={styles.list_third}>
                <em>{cat.label}</em>
                {cat.items.map((item, i) => (
                  <li key={i}>
                    <Link
                      to={item === '보도자료' ? '/presskit' : '#'}
                      className={styles.link_submenu}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
          {menu.items &&
            !menu.categories?.length &&
            menu.items.map((item, idx) => (
              <li key={idx}>
                <Link
                  to={item === 'ESG 보고서' ? '/responsible/esg' : '#'}
                  className={styles.link_submenu}
                >
                  {item}
                </Link>
              </li>
            ))}
        </ul>
        <div className={styles.cont_menu}>
          <SlideSection data={menu.slides} />
        </div>
      </div>
    </li>
  );
};

export default NavMenuItem;

import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './MainNav.module.scss';
import SlideSection from './SlideSection';

const NavMenuItem = ({ menu, isOpen, onToggle }) => {
  const menuRef = useRef(null);

  // 외부 클릭 감지
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
                    <Link to='#' className={styles.link_submenu}>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
          {menu.items &&
            !menu.categories.length &&
            menu.items.map((item, idx) => (
              <li key={idx}>
                <Link to='#' className={styles.link_submenu}>
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

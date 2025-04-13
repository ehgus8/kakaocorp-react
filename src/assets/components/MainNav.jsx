import React from 'react';
import styles from './MainNav.module.scss';
import { NavLink, useLocation, Link } from 'react-router-dom';

const MainNav = () => {
  const location = useLocation();

  const activateLink = ({ isActive }) =>
    `${styles.navLink} ${isActive && location.pathname !== '/' ? styles.active : ''}`;

  return (
    <>
      <h1>
        <Link to={'/'}>
          <svg
            className={styles.logo}
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
            viewBox='0 0 75 25'
          >
            <defs>
              <path
                id='os5cgsl0ta'
                d='M0.011 0.205L11.948 0.205 11.948 22.203 0.011 22.203z'
              />
              <path
                id='oanpyfjipc'
                d='M0.264 0.004L13.566 0.004 13.566 15.487 0.264 15.487z'
              />
            </defs>
            <g fillRule='evenodd'>
              <g>
                <path
                  d='M18.91 20.05c.344 0 .7-.046 1.071-.137.371-.09.742-.209 1.113-.354.371-.146.72-.323 1.045-.532.327-.21.616-.432.87-.668V14.87h-2.607c-1.32 0-2.284.227-2.89.681-.606.455-.91 1.173-.91 2.154 0 1.562.769 2.344 2.308 2.344m-4.706-2.235c0-1.508.503-2.658 1.513-3.448 1.008-.79 2.476-1.186 4.401-1.186h2.89v-.954c0-2.308-1.018-3.461-3.053-3.461-.653 0-1.34.09-2.057.272-.719.182-1.377.409-1.977.681l-.736-1.771c.745-.418 1.55-.74 2.413-.968.862-.227 1.704-.341 2.52-.341 3.526 0 5.288 1.88 5.288 5.642v9.54h-1.852l-.3-1.635c-.745.6-1.54 1.063-2.385 1.39-.845.328-1.649.49-2.414.49-1.325 0-2.365-.376-3.12-1.13-.754-.754-1.131-1.794-1.131-3.12'
                  transform='translate(-151 -168) translate(79.5 145) translate(72 24) translate(.956 .112)'
                />
                <g transform='translate(-151 -168) translate(79.5 145) translate(72 24) translate(.956 .112) translate(29.859)'>
                  <mask id='5ym1s98mqb' fill='#fff'>
                    <use xlinkHref='#os5cgsl0ta' />
                  </mask>
                  <path
                    d='M9.222 6.53l1.963 1.416-4.823 6.052 5.586 6.705-1.934 1.5-6.596-8.07L9.222 6.53zM2.518 21.82H.011V.75L2.518.206V21.82z'
                    mask='url(#5ym1s98mqb)'
                  />
                </g>
                <path
                  d='M48.735 20.05c.343 0 .701-.046 1.072-.137.371-.09.742-.209 1.113-.354.37-.146.718-.323 1.045-.532.324-.21.614-.432.868-.668V14.87h-2.606c-1.322 0-2.285.227-2.89.681-.607.455-.909 1.173-.909 2.154 0 1.562.768 2.344 2.307 2.344m-4.706-2.235c0-1.508.504-2.658 1.512-3.448 1.01-.79 2.475-1.186 4.403-1.186h2.889v-.954c0-2.308-1.017-3.461-3.053-3.461-.655 0-1.34.09-2.058.272-.719.182-1.377.409-1.975.681l-.737-1.771c.746-.418 1.55-.74 2.412-.968.862-.227 1.703-.341 2.522-.341 3.524 0 5.288 1.88 5.288 5.642v9.54h-1.855l-.3-1.635c-.745.6-1.538 1.063-2.385 1.39-.844.328-1.648.49-2.411.49-1.327 0-2.368-.376-3.121-1.13-.755-.754-1.131-1.794-1.131-3.12'
                  transform='translate(-151 -168) translate(79.5 145) translate(72 24) translate(.956 .112)'
                />
                <g transform='translate(-151 -168) translate(79.5 145) translate(72 24) translate(.956 .112) translate(58.405 6.66)'>
                  <mask id='e5668wah2d' fill='#fff'>
                    <use xlinkHref='#oanpyfjipc' />
                  </mask>
                  <path
                    d='M6.915 2.021c-1.308 0-2.312.491-3.011 1.472-.701.982-1.05 2.417-1.05 4.307 0 1.872.349 3.285 1.05 4.239.699.954 1.703 1.431 3.011 1.431 1.326 0 2.34-.477 3.04-1.431.7-.954 1.049-2.367 1.049-4.239 0-1.89-.35-3.325-1.049-4.307-.7-.981-1.714-1.472-3.04-1.472m0-2.017c2.071 0 3.699.673 4.878 2.017 1.182 1.346 1.773 3.272 1.773 5.78 0 2.47-.585 4.37-1.758 5.697-1.172 1.325-2.804 1.989-4.893 1.989-2.07 0-3.698-.664-4.878-1.99C.855 12.172.264 10.272.264 7.8c0-2.507.594-4.433 1.785-5.779C3.24.677 4.862.004 6.915.004'
                    mask='url(#e5668wah2d)'
                  />
                </g>
                <path
                  d='M2.552.205L.044.75v21.07h2.508V.204zm.9 13.929l6.595 8.069 1.937-1.5-5.589-6.705 4.825-6.051-1.962-1.418-5.807 7.605z'
                  transform='translate(-151 -168) translate(79.5 145) translate(72 24) translate(.956 .112)'
                />
              </g>
            </g>
          </svg>
        </Link>
      </h1>
      <nav id='gnbContentPC' className={styles['doc-gnb']}>
        <ul className={styles.list_gnb}>
          <li>
            <button type='button' className={styles.item_menu}>
              소개
            </button>
            <div id='mainMenu-0' className={styles.box_menu}>
              <ul className={styles.list_second}>
                <li>
                  <Link to={'#'} className={styles.link_submenu}>
                    카카오 문화
                  </Link>
                </li>
                <li>
                  <Link to={'#'} className={styles.link_submenu}>
                    카카오 그룹
                  </Link>
                </li>
                <li>
                  <Link to={'#'} className={styles.link_submenu}>
                    연혁
                  </Link>
                </li>
              </ul>
              <div className={styles.cont_menu}>
                <div className={styles['slick-slider']}>
                  <div className={styles.slick_list}></div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </nav>
      <div className={styles.area_util}></div>
    </>
  );
};

export default MainNav;

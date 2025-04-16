import { createBrowserRouter } from 'react-router-dom';

import RootLayout from '../layouts/RootLayout';
import Index from '../pages/main';
import SearchPage from '../components/Search/SearchPage';
import PressRelease from '../pages/presskit/PressRelease';
import ESGPage from '../esg/ESGPage';
import MainTest from '../pages/main/MainPromise';
import PressDetail from '../pages/presskit/PressDetail';

// 라우터 설정
export const router = createBrowserRouter(
  [
    {
      path: '/', // 부모 경로가 활성화 되었을 때 기본으로 사용할 컴포넌트
      element: <RootLayout />,
      errorElement: <div></div>,
      children: [
        {
          index: true,
          element: <Index />,
        },
        { path: 'searchKeyword', element: <SearchPage /> },
        { path: 'presskit', element: <PressRelease /> },
        { path: 'responsible/esg', element: <ESGPage /> }, // ESG 페이지 추가
        { path: 'detail/:postId', element: <PressDetail /> },
      ],
    },
  ],
  {
    basename: '/kakaocorp-react-release',
  },
);

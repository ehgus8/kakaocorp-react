import { createBrowserRouter } from 'react-router-dom';

import RootLayout from '../layouts/RootLayout';
import Index from '../pages/main';

// 라우터 설정
export const router = createBrowserRouter([
  {
    path: '/', // 부모 경로가 활성화 되었을 때 기본으로 사용할 컴포넌트
    element: <RootLayout />,
    errorElement: <div></div>,
    children: [
      {
        index: true,
        element: <Index />,
      },
    ],
  },
]);

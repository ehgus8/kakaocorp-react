import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/kakaocorp-react-release/', // 꼭 수정할 것! 예: base: '/test-github-page/'
});

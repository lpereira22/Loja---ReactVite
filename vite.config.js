// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Loja---ReactVite/', // << este nome precisa ser exato ao do seu repositório!
});

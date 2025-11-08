// vite.config.ts (or vite.config.js)
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  preview: {
    host: '0.0.0.0',
    port: Number(process.env.PORT) || 5173,
    // allow your public domain
    allowedHosts: ['my-vite-app-production.up.railway.app']
  }
});

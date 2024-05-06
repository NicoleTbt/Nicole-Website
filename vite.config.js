import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Nicole-Website/",
  build: {
    rollupOptions: {
      external: ['firebase/firestore'], // Add this line
    },
  },
});

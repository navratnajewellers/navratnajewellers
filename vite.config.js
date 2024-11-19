import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // to be uncomment onlt to upload to github with hashrouter enabled
  // base: '/navratnajewellers/',
});

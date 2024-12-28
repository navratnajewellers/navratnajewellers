import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // build: {
  //   rollupOptions: {
  //     output: {
  //       manualChunks(id) {
  //         if (id.includes('node_modules')) {
  //           return 'vendor'; // create a separate chunk for vendor libraries
  //         }
  //       },
  //     },
  //   },
  // },
  // to be uncomment onlt to upload to github with hashrouter enabled
  // base: '/navratnajewellers/',
});

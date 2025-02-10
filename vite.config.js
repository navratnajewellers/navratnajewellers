import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    visualizer({ open: true }), // Opens a bundle analysis report
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('lodash')) {
              return 'lodash'; // Moves lodash to its own chunk
            }
            if (id.includes('date-fns') || id.includes('moment')) {
              return 'utilities'; // Groups date libraries into one chunk
            }
            if (id.includes('rsuite')) {
              return 'rsuite'; // Separate chunk for rsuite module
            }
            if (id.includes('motion')) {
              return 'motion'; // Separate chunk for rsuite module
            }
            if (id.includes('crypto-js')) {
              return 'crypto-js'; // Separate chunk for rsuite module
            }
            if (id.includes('axios')) {
              return 'axios'; // Separate chunk for rsuite module
            }
            return 'vendor'; // Other node_modules go to the vendor chunk
          }
        },
      },
    },
  },
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

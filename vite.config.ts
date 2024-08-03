import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react({
      babel: {
        presets: ['@babel/preset-react'],
      },
    }),
  ],
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
        '.jsx': 'jsx',
        '.ts': 'tsx',
        '.tsx': 'tsx',
      },
    },
  },
  root: '.', // Ensure the root is the project directory where index.html is located
  publicDir: 'public', // Ensure static assets are served from public directory
  base: process.env.BUILD_PATH_PREFIX || undefined,
  ...(process.env.BUILD_COMBINED === "true" && process.env.BUILD_TYPE === "storybook" && {
    base: (process.env.BUILD_PATH_PREFIX ? process.env.BUILD_PATH_PREFIX + "/storybook" : "/storybook"),
  }),
});

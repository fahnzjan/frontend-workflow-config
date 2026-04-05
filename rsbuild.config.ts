import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],

  source: {
    alias: {
      '@': './src',
    },
  },

  output: {
    // Content hash for cache busting
    filename: {
      js: '[name].[contenthash:8].js',
      css: '[name].[contenthash:8].css',
    },

    // Source maps: generate but don't deploy publicly
    sourceMap: {
      js: process.env.NODE_ENV === 'production' ? 'source-map' : 'cheap-module-source-map',
      css: process.env.NODE_ENV !== 'production',
    },

    // Clean dist before each build
    cleanDistPath: true,
  },

  performance: {
    // Route-based code splitting
    chunkSplit: {
      strategy: 'split-by-experience',
    },
  },

  server: {
    port: 3000,
  },
  html: {
    title: 'my react app',
  },
});

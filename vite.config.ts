/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import tailwindcss from '@tailwindcss/vite';

import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';

const dirname =
  typeof __dirname !== 'undefined'
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

export default defineConfig(({ command }) => {
  // 在构建时禁用 React Compiler，避免运行时注入 require 导致的 ES 模块兼容性问题
  // React Compiler 应该在最终使用库的应用中运行
  const enableReactCompiler = command !== 'build';
  const isLibBuild = process.env.BUILD_LIB === 'true';

  return {
    plugins: [
      react({
      babel: {
        plugins: enableReactCompiler ? [['babel-plugin-react-compiler']] : [],
      },
    }),

      // ✅ 只在 dev / storybook 启用
      !isLibBuild && tailwindcss(),

      dts({
      entryRoot: './src/libs',
      tsconfigPath: './tsconfig.build.json',
      insertTypesEntry: true,
      rollupTypes: true,
        exclude: ['**/*.css', '**/style-entry.ts', '**/*.stories.tsx', '**/*.test.ts', '**/*.test.tsx'],
      }),
    ].filter(Boolean),


    resolve: {
      alias: {
        '@': path.resolve(dirname, './src'),
      },
    },

    build: {
      lib: {
      entry: {
        index: path.resolve(dirname, './src/libs/index.ts')
      },
      name: 'gemini-uis',
        formats: ['es'],
        fileName: () => 'index.js',
      },
      rollupOptions: {
        external: [
          'react',
          'react-dom',
          'react/jsx-runtime',
          'react/jsx-dev-runtime',
        ],
        output: {
          assetFileNames: (assetInfo) => {
            // 将所有 CSS 文件命名为 style.css
            if (assetInfo.name && assetInfo.name.endsWith('.css')) {
              return 'style.css';
            }
            return assetInfo.name || 'assets/[name]-[hash].[ext]';
          },
        },
      },
      cssCodeSplit: false,
    },

    test: {
      projects: [
      {
        extends: true,
        plugins: [
          storybookTest({
            configDir: path.join(dirname, '.storybook'),
          }),
        ],
        test: {
          name: 'storybook',
          browser: {
            enabled: true,
            headless: true,
            provider: playwright({}),
            instances: [{ browser: 'chromium' }],
          },
          setupFiles: ['.storybook/vitest.setup.ts'],
        },
      },
    ],
    },
  };
});

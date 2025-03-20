import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(),
    AutoImport({
      imports: ['vue', 'vue-router'],
      dts: 'src/auto-imports.d.ts',
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(process.cwd(), 'src'),
      '~': path.resolve(process.cwd()),
    },
  },
})

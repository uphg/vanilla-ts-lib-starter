import path from 'path'
import { defineConfig } from 'vite'

// 参考：https://vitejs.dev/guide/build.html#library-mode
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'funny',
      formats: ['es', 'umd'], // 默认配置：['es', 'umd']
      fileName: (format) => `index.${format}.js`
    }
  }
})

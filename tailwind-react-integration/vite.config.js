npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})

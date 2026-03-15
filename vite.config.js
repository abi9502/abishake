import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages-ல் Blank Page வராமல் இருக்க இந்த Base URL முக்கியம்:
  base: './',
})

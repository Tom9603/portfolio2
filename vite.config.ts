import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Avec un nom de domaine perso → garde '/'
  // Sans domaine, sur github.io/nom-du-repo → remplace par '/nom-du-repo/'
  base: '/portfolio2/',
})

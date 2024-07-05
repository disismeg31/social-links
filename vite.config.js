import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace 'your-repo-name' with your actual repository name
const base = '/social-links/';
// https://vitejs.dev/config/
export default defineConfig({
  base,
  plugins: [react()],
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createRequire } from 'module';
import tailwindcss from '@tailwindcss/vite'

const require = createRequire(import.meta.url);

// https://vite.dev/config/
export default defineConfig({
  plugins: [  tailwindcss(),,react()],
});                                                                                                                         
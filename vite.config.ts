import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// Relative asset URLs work on both / and GitHub Pages /portfolio/.
export default defineConfig({ base: './', plugins: [react()] });

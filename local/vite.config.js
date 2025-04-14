import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
<<<<<<< HEAD

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),],
           
=======
import tsconfigPaths from "vite-tsconfig-paths"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),tsconfigPaths(),],
>>>>>>> 1a93fbd375b0c167c4244e9212b584b2c8bd5917
  
})

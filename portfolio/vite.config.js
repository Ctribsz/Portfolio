// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Alias opcionales, por ejemplo para acortar rutas:
      "@": "/src"
    }
  },
  server: {
    port: 5173,
    open: true
  }
});
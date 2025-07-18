import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  // vite.config.ts
  server: {
    proxy: {
      "/api": {
        target: "http://95.215.56.173:8000",
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, ""), // /api/v1/auth/login → /v1/auth/login
      },
    },
  },
});

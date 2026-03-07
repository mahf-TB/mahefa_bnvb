import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import path from "path"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          "vendor-react": ["react", "react-dom", "react-router-dom"],
          "vendor-motion": ["motion"],
          "vendor-ui": [
            "@radix-ui/react-avatar",
            "@radix-ui/react-dropdown-menu",
            "@radix-ui/react-slot",
            "@radix-ui/react-tooltip",
            "@base-ui/react",
          ],
          "vendor-icons": [
            "@hugeicons/core-free-icons",
            "@hugeicons/react",
          ],
        },
      },
    },
  },
})

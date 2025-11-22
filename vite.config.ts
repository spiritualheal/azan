import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

// Create a compatible __dirname for ESM environments
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  // Base path for assets — set to the repo name for GitHub Pages by default.
  // You can override by setting VITE_BASE environment variable when building.
  base: process.env.VITE_BASE || "/azan/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },
  root: path.resolve(__dirname, "client"),
  build: {
    outDir: path.resolve(__dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});

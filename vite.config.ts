import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

// Create a compatible __dirname for ESM environments
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  // Use a relative base so the site works on any domain or path (project page, custom domain, or local file).
  // This is more portable than hardcoding a repo name. You can override by setting VITE_BASE when necessary.
  base: process.env.VITE_BASE || "./",
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
    outDir: path.resolve(__dirname, "docs"),
    emptyOutDir: true,
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});

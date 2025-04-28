import { defineConfig } from "vite";
import path from "path";
import { fileURLToPath } from 'url';

// Construct equivalent of __dirname in ESM
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Dynamically import plugins only when needed
const loadPlugins = async () => {
  const plugins = [];
  
  // Only import React plugin if we're not in production
  if (process.env.NODE_ENV !== "production") {
    const react = (await import("@vitejs/plugin-react")).default;
    plugins.push(react());
    
    const runtimeErrorOverlay = (await import("@replit/vite-plugin-runtime-error-modal")).default;
    plugins.push(runtimeErrorOverlay());
    
    if (process.env.REPL_ID !== undefined) {
      const { cartographer } = await import("@replit/vite-plugin-cartographer");
      plugins.push(cartographer());
    }
  }
  
  return plugins;
};

export default defineConfig(async () => ({
  plugins: await loadPlugins(),
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
}));

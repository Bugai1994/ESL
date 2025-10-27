import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";


const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
      },
    },
  },
  plugins: [
    ViteImageOptimizer({
      // JPEG
      jpeg: {
        quality: 75,
      },
      // PNG
      png: {
        quality: 80,
        compressionLevel: 8,
      },
      // WebP
      webp: {
        quality: 80,
      },
      // AVIF
      avif: {
        quality: 70,
      },
      // SVG
      svg: {
        multipass: true,
        plugins: [
          { name: "removeViewBox", active: false },
          { name: "sortAttrs", params: { xmlnsOrder: "alphabetical" } },
        ],
      },
      // Общие настройки
      include: ["**/*.{png,jpeg,jpg,svg,webp,avif}"],
      exclude: ["node_modules/**", "dist/**"],
    }),
  ],
});

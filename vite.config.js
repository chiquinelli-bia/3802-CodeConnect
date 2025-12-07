import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        login: resolve(__dirname, "publicar.html"),
        cadastro: resolve(__dirname, "cadastro.html"),
        feed: resolve(__dirname, "feed.html"),
      },
      output: {
        chunkFileNames: "chunks/[name]-[hash].js", // [name] é o nome do chunk gerado
      },
    },
  },
});

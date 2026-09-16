import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        chunkFileNames: "chunks/[name]-[hash].js", // [name] é o nome do chunk gerado
      },
    },
  },
});

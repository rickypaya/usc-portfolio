import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  root: "./fulcrum", // Set the root directory to /fulcrum
  build: {
    rollupOptions: {
      input: "./fulcrum/index.html", // Specify the entry HTML file
    },
  },
});

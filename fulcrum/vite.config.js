import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  root: "../fulcrum", // Set the root directory to /fulcrum
});

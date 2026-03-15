import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
// When deploying to GitHub Pages as a project site, set `base` to the repo path.
export default defineConfig({
  base: "/Portfolio/",
  plugins: [react()],
});

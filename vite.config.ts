import { defineConfig } from "vite";
import storylitePlugin from "@storylite/vite-plugin";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    storylitePlugin({
      stories: "stories/**/*.stories.tsx", // relative to process.cwd()
    }),
    react(),
  ],
});

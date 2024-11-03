/// <reference types="vitest/config" />

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import removeConsole from "vite-plugin-remove-console";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), removeConsole()],
  resolve: {
    alias: {
      src: "/src",
      assets: "/src/assets",
      components: "/src/components",
      context: "/src/context",
      hooks: "/src/hooks",
      i18n: "/src/i18n",
      pages: "/src/pages",
      routes: "/src/routes",
      providers: "/src/providers",
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/setupTests.ts"],
    css: true,

    coverage: {
      include: ["src/**/*"],
      exclude: ["**/*.stories.tsx", "**/*.test.tsx"],
      reporter: ["text", "html", "json"],
      thresholds: {
        branches: 70,
        functions: 60,
        lines: 70,
        statements: 70,
      },
    },
  },
});

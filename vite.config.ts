/// <reference types="vitest/config" />

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import removeConsole from "vite-plugin-remove-console";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), removeConsole()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/setupTests.ts"],
    css: true,

    coverage: {
      include: ["src/**/*"],
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

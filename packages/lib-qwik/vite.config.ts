import { defineConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";

export default defineConfig(() => {
  return {
    build: {
      target: "es2020",
      lib: {
        entry: "./src/index.ts",
        formats: ["es", "cjs"],
        fileName: (format) =>
          `boringer-avatars.qwik.${format === "es" ? "mjs" : "cjs"}`,
      },
    },
    plugins: [qwikVite()],
  };
});

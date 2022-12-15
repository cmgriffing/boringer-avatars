import { defineConfig, type UserConfig } from "vite";
import vue from "@vitejs/plugin-vue2";

// const path = require("path");
import path from "path";

/**
 * Vite Configure
 *
 * @see {@link https://vitejs.dev/config/}
 */
export default defineConfig(async ({ command, mode }): Promise<UserConfig> => {
  const config: UserConfig = {
    base: "./",
    plugins: [vue()],
    build: {
      lib: {
        entry: path.resolve(__dirname, "src/index.ts"),
        name: "BoringerAvatarsVue2",
        formats: ["es", "umd"],
        fileName: (format) => `boringer-avatars.vue2.${format}.js`,
      },
      rollupOptions: {
        external: ["vue"],
        output: {
          // Provide global variables to use in the UMD build
          // for externalized deps
          globals: {
            vue: "Vue",
          },
        },
      },
    },
  };

  return config;
});

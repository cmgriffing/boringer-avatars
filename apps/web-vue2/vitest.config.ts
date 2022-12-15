import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue2";

import { fileURLToPath, URL } from "node:url";

/**
 * Vitest Configure
 *
 * @see {@link https://vitest.dev/config/}
 */
export default defineConfig({
  // plugins
  plugins: [
    {
      name: "vitest-plugin-beforeall",
      config: () => ({
        test: {
          setupFiles: [
            fileURLToPath(new URL("./vitest/beforeAll.ts", import.meta.url)),
          ],
        },
      }),
    } as any,
    // Vue2
    // https://github.com/vitejs/vite-plugin-vue2
    vue(),
  ],
  // Resolver
  resolve: {
    // https://vitejs.dev/config/shared-options.html#resolve-alias
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "~": fileURLToPath(new URL("./node_modules", import.meta.url)),
    },
  },
});
